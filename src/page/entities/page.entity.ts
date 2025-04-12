import { MenuEntity } from 'src/menu/entities/menu.entity';
import {
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'pages' })
export class PageEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  label: string;

  @Column({ name: 'slug', nullable: false, unique: true, type: 'varchar' })
  slug: string;

  @Column({ name: 'parentId', nullable: true })
  menuId: string;

  @ManyToOne(() => MenuEntity, (menu) => menu.pages, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'menuId' })
  menu: MenuEntity | null;

  @Column({ type: 'text' })
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
