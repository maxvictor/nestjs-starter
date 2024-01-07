import { Body, Controller, Get, Post, UseFilters } from '@nestjs/common';
import { SampleService } from '../services/sample.service';
import { CreateSampleDto } from '../dtos/sample.dto';
import { HttpExceptionFilter } from 'src/common/filters/http-exception.filter';

@Controller('sample')
@UseFilters(new HttpExceptionFilter())
export class SampleController {
  constructor(private readonly sampleService: SampleService) {}

  @Get()
  getHello(): string {
    return this.sampleService.getHello();
  }

  @Post()
  async create(@Body() createSampleDto: CreateSampleDto) {
    return this.sampleService.create(createSampleDto);
  }
}
