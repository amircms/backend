import { PageEntity } from '../../page/entities/page.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'menus' })
export class MenuEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  label: string;

  @Column({ type: 'int', generated: 'increment' })
  order: number;

  @Column({ unique: true, length: 255 })
  slug: string;

  @Column({ name: 'parentId', nullable: true, type: 'uuid' })
  parentId: string | null;

  @ManyToOne(() => MenuEntity, (menu) => menu.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'parentId' })
  parent: MenuEntity | null;

  @OneToMany(() => PageEntity, (page) => page.id)
  pages: PageEntity[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
