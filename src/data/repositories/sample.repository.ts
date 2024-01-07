import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Sample } from '../entities/sample.entity';

@Injectable()
export class SampleRepository extends Repository<Sample> {
  constructor(private dataSource: DataSource) {
    super(Sample, dataSource.createEntityManager());
  }

  // Custom methods here
}
