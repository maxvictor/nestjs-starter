import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sample } from '../../../data/entities/sample.entity';
import { CreateSampleDto } from '../dtos/sample.dto';
import { PinoLogger } from 'nestjs-pino';

@Injectable()
export class SampleService {
  constructor(
    @InjectRepository(Sample) private sampleRepository: Repository<Sample>,
    private readonly logger: PinoLogger,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async findAllSamples() {
    this.logger.info('Finding all samples');

    try {
      const samples = await this.sampleRepository.find();
      this.logger.info('Found samples successfully');
      return samples;
    } catch (error) {
      this.logger.error('Error finding samples', error);
      throw error;
    } finally {
      this.logger.info('Leaving findAllSamples method');
    }
  }

  async create(sampleDto: CreateSampleDto): Promise<Sample> {
    this.logger.info('Creating new sample');

    const sample = new Sample();
    sample.name = sampleDto.name;
    sample.description = sampleDto.description;

    try {
      const createdSample = await this.sampleRepository.save(sample);
      this.logger.info('Sample created successfully');
      return createdSample;
    } catch (error) {
      this.logger.error('Error creating sample', error);
      throw error;
    } finally {
      this.logger.debug('Leaving create method');
    }
  }
}
