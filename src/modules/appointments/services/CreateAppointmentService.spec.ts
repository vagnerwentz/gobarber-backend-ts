/* Error */
import AppError from '@shared/errors/AppError';

/* Fake */
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';

/* Service */
import CreateAppointmentService from './CreateAppointmentService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let createAppointment: CreateAppointmentService;

describe('CreateAppointment', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to create a new appointment', async () => {
    const appointment = await createAppointment.execute({
      provider_id: '1212',
      user_id: '121212',
      date: new Date(),
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('1212');
  });

  it('should not be able to create two appointment in the same time', async () => {
    const appointmentDate = new Date(2020, 4, 10, 11);

    await createAppointment.execute({
      provider_id: '1212',
      user_id: '121212',
      date: appointmentDate,
    });

    await expect(
      createAppointment.execute({
        provider_id: '1212',
        user_id: '121212',
        date: appointmentDate,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
