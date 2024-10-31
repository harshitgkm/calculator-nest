import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Operation } from './entities/operation.entity';
import { CreateOperationDto } from './dto/create-operation.dto';

@Injectable()
export class OperationsService {
  constructor(
    @InjectRepository(Operation)
    private readonly operationRepository: Repository<Operation>,
  ) {}

  async calculate(createOperationDto: CreateOperationDto) {
    const { a, b, operations, email } = createOperationDto;

    let result;

    switch (operations) {
      case '+':
        result = a + b;
        break;
      case '-':
        result = a - b;
        break;
      case '*':
        result = a * b;
        break;
      case '/':
        if (b === 0) throw new BadRequestException('Cannot divide by zero');
        result = a / b;
        break;
      default:
        throw new BadRequestException('Invalid operation');
    }

    const calculation = this.operationRepository.create({
      email,
      operations: `${a} ${operations} ${b}`,
      result,
    });

    await this.operationRepository.save(calculation);
    return { result, email };
  }

  async getHistory(email: string): Promise<Operation[]> {
    return await this.operationRepository.find({
      where: { email },
    });
  }

  // async getHistory(historyDto: HistoryDto) {
  //   const { email } = historyDto;
  //   return await this.calculationRepository.find({
  //     where: { email },
  //     order: { timestamp: 'DESC' },
  //   });
  // }

  async clearHistory() {
    await this.operationRepository.clear();
    return { message: 'Calculation history cleared' };
  }

  async resetHistory(email: string) {
    await this.operationRepository.delete({ email });
    return { message: `History for ${email} reset` };
  }
}
