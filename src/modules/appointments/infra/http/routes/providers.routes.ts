import { Router } from 'express';

/* Controller */
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

/* Middleware */
import ProvidersController from '../controllers/ProvidersController';

const providersRouter = Router();
const providersController = new ProvidersController();

providersRouter.use(ensureAuthenticated);

/* Show all providers except logged user */
providersRouter.get('/', providersController.index);

export default providersRouter;
