import { Router } from 'express';

/* Controller */
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

/* Middleware */
import AppointmentsController from '../controllers/AppointmentsController';

const appointmentsRouter = Router();

const appointmentsController = new AppointmentsController();

appointmentsRouter.use(ensureAuthenticated);

/* Create an appointment */
appointmentsRouter.post('/', appointmentsController.create);

export default appointmentsRouter;
