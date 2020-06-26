import { Router } from 'express';
import multer from 'multer';

/* Upload */
import uploadConfig from '@config/upload';

/* Service */
import CreateUserService from '@modules/users/services/CreateUserService';
import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';

/* Repository */
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

/* Middleware */
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRouter = Router();
const upload = multer(uploadConfig);

/* Create an user */
usersRouter.post('/', async (request, response) => {
  const { name, email, password } = request.body;

  const usersRepository = new UsersRepository();
  const createUser = new CreateUserService(usersRepository);

  const user = await createUser.execute({
    name,
    email,
    password,
  });

  delete user.password;

  return response.status(200).json(user);
});

/* Update just one information about the user */
usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  async (request, response) => {
    const usersRepository = new UsersRepository();
    const updateUserAvatar = new UpdateUserAvatarService(usersRepository);

    const user = await updateUserAvatar.execute({
      user_id: request.user.id,
      avatarFilename: request.file.filename,
    });

    delete user.password;

    return response.status(200).json(user);
  },
);

export default usersRouter;
