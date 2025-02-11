import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'settings' })
export class SettingEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  header: string;

  @Column()
  footer: string;

  @Column()
  logo: string;

  @Column()
  websiteName: string;

  @Column()
  primaryColor: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
