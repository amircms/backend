import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { PageEntity } from '../../pages/entities/page.entity';

@Entity({ name: 'menu_item' })
export class MenuItemEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ nullable: true })
  pageSlug?: PageEntity['slug'];

  @ManyToOne(() => PageEntity, { eager: false })
  @JoinColumn({ name: 'pageSlug', referencedColumnName: 'slug' })
  page?: PageEntity;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
