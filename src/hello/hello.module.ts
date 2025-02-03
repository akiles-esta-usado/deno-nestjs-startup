import { Module } from '@nestjs/common';
import { HelloService } from './hello.service.ts';
import { HelloController } from './hello.controller.ts';

@Module({
  controllers: [HelloController],
  providers: [HelloService],
})
export class HelloModule {}
