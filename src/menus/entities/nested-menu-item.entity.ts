import { MenuEntity } from './menu.entity';
import {
  Column,
  Entity,
  ManyToOne,
  Tree,
  TreeChildren,
  TreeParent,
} from 'typeorm';
import { MenuItemEntity } from '../../menu-items/entities/menu-item.entity';

@Entity({ name: 'nested_menu_item' })
@Tree('nested-set')
export class NestedMenuItemEntity extends MenuItemEntity {
  @Column({ default: 0 })
  sortOrder?: number;

  @TreeChildren()
  children?: NestedMenuItemEntity[];

  @TreeParent()
  parent?: NestedMenuItemEntity;

  @ManyToOne(() => MenuEntity, (menu) => menu.items, { nullable: true })
  menu?: MenuEntity;
}
