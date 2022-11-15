import { Entity, Column, PrimaryGeneratedColumn ,OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { Product } from './product.entitty';
import { UserType } from '../modules/user/userType.enum';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({nullable: false, default: UserType.BUYER})
  role: UserType;

  @Column({ default: true })
  isActive: boolean;

  @Column({nullable: true, default: '120012001200'})
  phoneNumber: string

  @ManyToMany((product) => Product,(product)=>product.sellers)
  @JoinTable({ name: 'users_products' })
  products: Product[]
}


