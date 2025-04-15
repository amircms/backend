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
  pageSlug?: PageEntity['slug'];

  @ManyToOne(() => PageEntity, { nullable: true, eager: true })
  @JoinColumn({ name: 'pageSlug', referencedColumnName: 'slug' })
  page?: PageEntity;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
