import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

/* Controller */
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

/* Middleware */
import AppointmentsController from '../controllers/AppointmentsController';
import ProviderAppointmentsController from '../controllers/ProviderAppointmentsController';

const appointmentsRouter = Router();

const appointmentsController = new AppointmentsController();
const providerAppointmentsController = new ProviderAppointmentsController();

appointmentsRouter.use(ensureAuthenticated);

/* Create an appointment */
appointmentsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      provider_id: Joi.string().uuid().required(),
      date: Joi.date(),
    },
  }),
  appointmentsController.create,
);

/* List appointments with provider logged */
appointmentsRouter.get('/me', providerAppointmentsController.index);

export default appointmentsRouter;
