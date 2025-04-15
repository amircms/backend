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
  sort: number;

  @Column({ nullable: true })
  parentId?: NestedMenuItemEntity['id'];

  @TreeChildren()
  children?: NestedMenuItemEntity[];

  @TreeParent()
  parent?: NestedMenuItemEntity;

  @Column()
  menuItemId: MenuItemEntity['id'];

  @ManyToOne(() => MenuItemEntity)
  @JoinColumn({ name: 'menuItemId', referencedColumnName: 'id' })
  menuItem: MenuItemEntity;

  @Column()
  MenuId: MenuEntity['id'];

  @ManyToOne(() => MenuEntity)
  @JoinColumn({ name: 'MenuId', referencedColumnName: 'id' })
  menu: MenuEntity;
}
