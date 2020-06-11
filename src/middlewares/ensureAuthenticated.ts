import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

/* Authenticate config */
import authConfig from '../config/auth';

/* Error */
import AppError from '../errors/AppError';

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  /* Validating the JWT Token */
  const authHeader = request.headers.authorization;
  if (!authHeader) {
    throw new AppError('JWT Token is missing.', 401);
  }

  const [, token] = authHeader.split(' ');
  try {
    const decoded = verify(token, authConfig.jwt.secret);

    const { sub } = decoded as TokenPayload;

    request.user = {
      id: sub,
    };

    return next();
  } catch {
    throw new AppError('Invalid JWT Token.', 401);
  }
}
