import { Request, Response } from 'express';
import { container } from 'tsyringe';

/* Service */
import ListProviderAppointmentsService from '@modules/appointments/services/ListProviderAppointmentsService';

export default class ProviderAppointmentsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const provider_id = request.user.id;
    const { day, month, year } = request.body;

    const listPrviderAppointments = container.resolve(
      ListProviderAppointmentsService,
    );

    const appointments = await listPrviderAppointments.execute({
      provider_id,
      day,
      month,
      year,
    });

    return response.json(appointments);
  }
}
