import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from '../orm-config';
import { OperationsModule } from './modules/operations/operations.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), OperationsModule],
})
export class AppModule {}
