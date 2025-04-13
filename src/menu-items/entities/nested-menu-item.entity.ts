import { ChildEntity, Column, ManyToOne, OneToMany } from 'typeorm';
import { MenuItemEntity } from './menu-item.entity';

@ChildEntity()
export class NestedMenuItemEntity extends MenuItemEntity {
  @Column({ nullable: true })
  order: number;

  @ManyToOne(() => NestedMenuItemEntity, (item) => item.children, {
    nullable: true,
  })
  parent?: NestedMenuItemEntity;

  @OneToMany(() => NestedMenuItemEntity, (item) => item.parent)
  children?: NestedMenuItemEntity[];
}
