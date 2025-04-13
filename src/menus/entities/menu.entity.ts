import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
} from 'typeorm';
import { NestedMenuItemEntity } from '../../menu-items/entities/nested-menu-item.entity';

@Entity({ name: 'menus' })
export class MenuEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @OneToMany(() => NestedMenuItemEntity, (menuItem) => menuItem.menu)
  items: NestedMenuItemEntity[];

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
