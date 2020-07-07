import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

/* Controller */
import ProfileController from '../controllers/ProfileController';

/* Middleware */
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const profielRouter = Router();

const profileController = new ProfileController();

profielRouter.use(ensureAuthenticated);

/* Update the user */
profielRouter.put(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      old_password: Joi.string(),
      password: Joi.string(),
      password_confirmation: Joi.string().valid(Joi.ref('password')),
    },
  }),
  profileController.update,
);
profielRouter.get('/', profileController.show);

export default profielRouter;
