import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Product } from './entities/product.entitty';
require('dotenv').config({ path: `../.env`})


// console.log("Env ",process.env.DATABASE_HOST)

@Module({
  imports: [ 
    TypeOrmModule.forRoot({
        type: "postgres",
        host: process.env.DATABASE_HOST,
        port: Number(process.env.DATABASE_PORT),
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        entities: [ User , Product],
        logging: true,
        synchronize: true,      // runs the db migrations to create/ modify entitites
  }),
  UserModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
