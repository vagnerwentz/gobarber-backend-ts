/* Fake */
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';

/* Service */
import CreateAppointmentService from './CreateAppointmentService';

describe('CreateAppointment', () => {
  it('should be able to create a new appointment', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointment = new CreateAppointmentService(fakeAppointmentsRepository);

    const appointment = await createAppointment.execute({
      provider_id: '1212',
      date: new Date(),
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('1212');

  });

  // it('should not be able to create two appointment in the same time', () => {
  //   expect(1 + 2).toBe(4)
  // })
})
