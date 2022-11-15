import { Entity, Column, PrimaryGeneratedColumn, ManyToOne , ManyToMany} from 'typeorm';
import { User } from './user.entity';
import { ProductType } from '../modules/product/product.type';


@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({nullable : false, default: ProductType.CLOTHING})
  type: ProductType

  @Column({nullable: false, default: 0})
  price: number;

  @ManyToMany((user)=>User,(user)=>user.products)
  sellers: User[] 

  
 
}

