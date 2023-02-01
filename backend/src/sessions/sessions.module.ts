import { Module } from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { SessionsController } from './sessions.controller';

@Module({
  controllers: [SessionsController],
  providers: [SessionsService]
})
export class SessionsModule {}
