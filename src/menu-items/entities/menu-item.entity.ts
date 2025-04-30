import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  JoinColumn,
  TreeChildren,
  TreeParent,
  Tree,
} from 'typeorm';
import { MenuEntity } from '../../menus/entities/menu.entity';
import { PageEntity } from '../../pages/entities/page.entity';
// import { LinkEntity } from '../../links/entities/link.entity';

@Entity('menu_items')
@Tree('adjacency-list')
export class MenuItemEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ default: 0 })
  sort: number;

  @Column({ nullable: true })
  parentId?: MenuItemEntity['id'];

  @TreeChildren()
  children?: MenuItemEntity[];

  @TreeParent()
  parent?: MenuItemEntity;

  @Column()
  pageSlug: PageEntity['slug'];

  @ManyToOne(() => PageEntity)
  @JoinColumn({ name: 'pageSlug', referencedColumnName: 'slug' })
  page: PageEntity;

  @Column()
  menuId: MenuEntity['id'];

  @ManyToOne(() => MenuEntity)
  @JoinColumn({ name: 'menuId', referencedColumnName: 'id' })
  menu: MenuEntity;
}
