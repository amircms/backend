import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToOne,
  TableInheritance,
  OneToMany,
} from 'typeorm';
import { PageEntity } from '../../pages/entities/page.entity';
import { MenuEntity } from '../../menus/entities/menu.entity';

@Entity({ name: 'menu_item' })
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export class MenuItemEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  order: number;

  @Column({ nullable: true })
  url?: string;

  @Column({ nullable: true })
  pageSlug?: PageEntity['slug'];

  @ManyToOne(() => PageEntity, { nullable: true })
  page?: PageEntity;

  @ManyToOne(() => MenuEntity, (menu) => menu.items, { nullable: true })
  menu?: MenuEntity;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
