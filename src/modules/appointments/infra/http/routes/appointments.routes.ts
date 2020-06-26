import { Router } from 'express';
import { parseISO } from 'date-fns';

/* Repository */
import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';

/* Service */
import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';

/* Middleware */
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const appointmentsRouter = Router();
const appointmentsRepository = new AppointmentsRepository();

appointmentsRouter.use(ensureAuthenticated);

/* Show all appointments */
// appointmentsRouter.get('/', async (request, response) => {
//   const appointments = await appointmentsRepository.find();

//   return response.json(appointments);
// });

/* Create an appointment */
appointmentsRouter.post('/', async (request, response) => {
  const { provider_id, date } = request.body;

  const parsedDate = parseISO(date);

  const createAppointment = new CreateAppointmentService(
    appointmentsRepository,
  );

  const appointment = await createAppointment.execute({
    provider_id,
    date: parsedDate,
  });

  return response.json(appointment);
});

export default appointmentsRouter;
