import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { NestedMenuItemEntity } from '../../nested-menu-items/entities/nested-menu-item.entity';

@Entity('menus')
export class MenuEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @OneToMany(() => NestedMenuItemEntity, (item) => item.menu, {
    cascade: true,
    eager: true,
  })
  items: NestedMenuItemEntity[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
