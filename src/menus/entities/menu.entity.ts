import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
} from 'typeorm';
import { NestedMenuItemEntity } from './nested-menu-item.entity';

@Entity({ name: 'menus' })
export class MenuEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @OneToMany(
    () => NestedMenuItemEntity,
    (nestedMenuItem) => nestedMenuItem.menu,
    {
      cascade: true,
    },
  )
  items: NestedMenuItemEntity[];

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
