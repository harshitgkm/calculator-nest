import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OperationsService } from './operations.service';
import { CreateOperationDto } from './dto/create-operation.dto';

@Controller('operations')
export class OperationsController {
  constructor(private readonly operationsService: OperationsService) {}

  @Post()
  async operation(@Body() createOperationDto: CreateOperationDto) {
    // console.log('hello');
    return this.operationsService.calculate(createOperationDto);
  }

  @Get()
  async getHistory(@Body('email') email: string) {
    // console.log('aervwr');

    return this.operationsService.getHistory(email);
  }

  // clear all calculation history
  @Delete('clear')
  async clearHistory() {
    return this.operationsService.clearHistory();
  }

  // reset calculation history for a specific email
  @Delete('reset')
  async resetHistory(@Body('email') email: string) {
    return this.operationsService.resetHistory(email);
  }
}
