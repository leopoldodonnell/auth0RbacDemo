import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';

@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const routePermissions = this.reflector.get<string[]>('permissions', context.getHandler());

    const first = context.getArgs()[0];
    const user = first.user;
    const usePermissions = user.permissions;

    if (!routePermissions) {
      return true;
    }

    const hasPermission = () => usePermissions.some(permission => routePermissions.includes(permission));

    const isPermissioned: boolean = hasPermission();
    return isPermissioned;
  }
}
