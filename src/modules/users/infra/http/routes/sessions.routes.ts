import { Router } from 'express';

/* Service */
import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';

/* Repository */
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

const sessionsRouter = Router();

/* Create a session */
sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const usersRepository = new UsersRepository();
  const authenticateUser = new AuthenticateUserService(usersRepository);

  const { user, token } = await authenticateUser.execute({ email, password });

  delete user.password;

  return response.status(200).json({ user, token });
});

export default sessionsRouter;
