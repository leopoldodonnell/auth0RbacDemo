// src/auth/jwt.strategy.ts

import { Injectable, Logger } from '@nestjs/common';
import { ConfigService, InjectConfig } from 'nestjs-config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { passportJwtSecret } from 'jwks-rsa';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(@InjectConfig() private readonly config: ConfigService) {
    super({
      secretOrKeyProvider: passportJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `${config.get('auth0.domain')}/.well-known/jwks.json`,
      }),

      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      audience: config.get('auth0.audience'),
      issuer: `${config.get('auth0.domain')}/`,
      algorithms: ['RS256'],
    });
    Logger.log(`JwtStrategy auth0 audience - ${config.get('auth0.audience')}`);
  }

  validate(payload: any) {
    return payload;
  }
}
