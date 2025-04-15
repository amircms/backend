import { GjsComponent, GjsStyle } from '../../types';
import { PageStatusEnum } from '../../enums';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
} from 'typeorm';

@Entity('pages')
export class PageEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Index()
  @Column({ unique: true })
  slug: string;

  @Column({ type: 'text', nullable: true })
  htmlContent?: string;

  @Column({ type: 'text', nullable: true })
  cssContent?: string;

  @Column({ type: 'jsonb', nullable: true })
  gjsComponents?: GjsComponent[];

  @Column({ type: 'jsonb', nullable: true })
  gjsStyles?: GjsStyle[];

  @Column({ type: 'json', nullable: true })
  meta?: Record<string, any>;

  @Column({ default: PageStatusEnum.DRAFT, enum: PageStatusEnum })
  status: PageStatusEnum;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
