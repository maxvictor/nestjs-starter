import { Test, TestingModule } from '@nestjs/testing';
import { SampleService } from '../services/sample.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Sample } from '../../../data/entities/sample.entity';
import { Repository } from 'typeorm';
import { randomUUID } from 'crypto';

describe('SampleService', () => {
  let service: SampleService;
  let mockRepository: Repository<Sample>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SampleService,
        {
          provide: getRepositoryToken(Sample),
          useValue: {
            find: jest.fn(),
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<SampleService>(SampleService);
    mockRepository = module.get<Repository<Sample>>(getRepositoryToken(Sample));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAllSamples', () => {
    it('should return an array of samples', async () => {
      const testSamples = [
        { id: randomUUID(), name: 'Sample 1', description: 'Test Sample' },
        { id: randomUUID(), name: 'Sample 2', description: 'Test Sample 2' },
      ];
      jest.spyOn(mockRepository, 'find').mockResolvedValue(testSamples);
      expect(await service.findAllSamples()).toEqual(testSamples);
      expect(mockRepository.find).toHaveBeenCalled();
    });
  });
});
