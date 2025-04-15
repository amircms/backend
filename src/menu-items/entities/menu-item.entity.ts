import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { PageEntity } from '../../pages/entities/page.entity';

@Entity('menu_items')
export class MenuItemEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ nullable: true })
  pageId?: string;

  @ManyToOne(() => PageEntity, { nullable: true, eager: true })
  @JoinColumn({ name: 'pageId' })
  page?: PageEntity;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
