import { Router } from 'express';
import multer from 'multer';

/* Upload */
import uploadConfig from '../config/upload';

/* Service */
import CreateUserService from '../services/CreateUserService';

/* Middleware */
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRouter = Router();
const upload = multer(uploadConfig);

/* Create an user */
usersRouter.post('/', async (request, response) => {
  try {
    const { name, email, password } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    delete user.password;

    return response.status(200).json(user);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

/* Update just one information about the user */
usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  async (request, response) => {
    return response.status(200).json({ ok: true });
  },
);

export default usersRouter;
