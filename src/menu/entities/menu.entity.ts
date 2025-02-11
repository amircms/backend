import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Check,
} from 'typeorm';

@Entity({ name: 'menus' })
export class MenuEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  label: string;

  @Column({ type: 'int', generated: 'increment' })
  order: number;

  @Column({ unique: true })
  slug: string;

  @Column({ name: 'parentId', nullable: true, type: 'uuid' })
  parentId: string | null;

  @ManyToOne(() => MenuEntity, (menu) => menu.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'parentId' })
  parent: MenuEntity | null;

  @OneToMany(() => MenuEntity, (menu) => menu.id)
  children: MenuEntity[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
