import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { TABLES_DB } from '../tables.db'


@Entity({ name: TABLES_DB.REGIONS })
export class Region extends BaseEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  public regionID: number;

  @ApiProperty()
  @Column({ length: 100 })
  public name: string;
}
