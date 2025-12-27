import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ProductsModule } from './modules/products/products.module';
import { CategoriesModule } from './modules/products/categories/categories.module';
import { ReviewsModule } from './modules/products/reviews/reviews.module';
import { EmployeesModule } from './modules/products/employees/employees.module';

import { AirlinesModule } from './modules/airlines/airlines.module';
import { FlightRoutesModule } from './modules/flight-routes/flight-routes.module';
import { FlightsModule } from './modules/flights/flights.module';

@Module({
  imports: [
    // делаем .env глобальным
    ConfigModule.forRoot({ isGlobal: true }),

    // подключаем TypeORM + Postgres
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => {
        return {
          type: 'postgres',
          host: 'localhost', // если Nest в Docker – потом поменяем на 'database'
          port: 5435,
          username: 'user',
          password: 'password',
          database: 'mydatabase',
          autoLoadEntities: true,
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          synchronize: true,
        };
      },
    }),

    ProductsModule,
    CategoriesModule,
    ReviewsModule,
    EmployeesModule,
    AirlinesModule,
    FlightRoutesModule,
    FlightsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
