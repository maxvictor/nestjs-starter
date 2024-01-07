import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Sample {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;
}
