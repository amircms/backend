import {
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { MenuEntity } from '../../menu/entities/menu.entity';

@Entity({ name: 'pages' })
export class PageEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  label: string;

  @Column({ name: 'menuSlug', nullable: false, unique: true, type: 'varchar' })
  menuSlug: string | null;

  @OneToOne(() => MenuEntity, (menu) => menu.slug, { onDelete: 'CASCADE' })
  @JoinColumn({ referencedColumnName: 'slug', name: 'menuSlug' })
  menu: MenuEntity;

  @Column()
  html: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
