import { Router } from 'express';
import multer from 'multer';

/* Upload */
import uploadConfig from '@config/upload';

/* Controller */
import UserAvatarController from '../controllers/UserAvatarController';
import UsersController from '../controllers/UsersController';

/* Middleware */
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRouter = Router();
const upload = multer(uploadConfig);

const usersController = new UsersController();
const userAvatarController = new UserAvatarController();

/* Create an user */
usersRouter.post('/', usersController.create);

/* Update just one information about the user */
usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  userAvatarController.update,
);

export default usersRouter;
