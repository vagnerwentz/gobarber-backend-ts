import { Router } from 'express';

/* Service */
import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

/* Create a session */
sessionsRouter.post('/', async (request, response) => {
  try {
    const { email, password } = request.body;

    const authenticateUser = new AuthenticateUserService();

    const { user, token } = await authenticateUser.execute({ email, password });

    delete user.password;

    return response.status(200).json({ user, token });
  } catch (err) {
    return response.status(err.statusCode).json({ error: err.message });
  }
});

export default sessionsRouter;
