import { Router } from 'express';

/* Controller */
import ProfileController from '../controllers/ProfileController';

/* Middleware */
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const profielRouter = Router();

const profileController = new ProfileController();

profielRouter.use(ensureAuthenticated);

/* Update the user */
profielRouter.put('/', profileController.update);
profielRouter.get('/', profileController.show);

export default profielRouter;
