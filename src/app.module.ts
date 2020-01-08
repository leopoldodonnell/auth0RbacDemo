import * as path from 'path';
import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
// import { AuthenticationMiddleware } from './common/authentication.middleware';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { ConfigModule } from 'nestjs-config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.load(path.resolve(__dirname, 'config', '**/!(*.d).{ts,js}')),
    AuthModule,
  ],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class AppModule {
  public configure(consumer: MiddlewareConsumer) {
  }
}
