import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  JoinColumn,
  Tree,
  TreeChildren,
  TreeParent,
} from 'typeorm';
import { MenuEntity } from '../../menus/entities/menu.entity';
import { MenuItemEntity } from '../../menu-items/entities/menu-item.entity';

@Entity('nested_menu_items')
@Tree('nested-set')
export class NestedMenuItemEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ default: 0 })
  sortOrder: number;

  @Column()
  menuItemId: string;

  @ManyToOne(() => MenuItemEntity, { eager: true })
  @JoinColumn({ name: 'menuItemId' })
  menuItem: MenuItemEntity;

  @ManyToOne(() => MenuEntity, (menu) => menu.items)
  @JoinColumn({ name: 'menuId' })
  menu: MenuEntity;

  @TreeChildren()
  children?: NestedMenuItemEntity[];

  @TreeParent()
  parent?: NestedMenuItemEntity;
}
