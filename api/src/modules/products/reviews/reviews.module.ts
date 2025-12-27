import { Module } from '@nestjs/common';
import { ReviewsController } from './reviews.controller';
import { ReviewsService } from './reviews.service';

// @Module({
//   controllers: [CategoriesController],
//   providers: [CategoriesService],
//   exports: [CategoriesService],
// })
// export class CategoriesModule {}
// import { Module } from '@nestjs/common';
// import { ReviewsController } from './reviews.controller';
// import { ReviewsService } from './reviews.service';

@Module({
  controllers: [ReviewsController],
  providers: [ReviewsService],
  exports: [ReviewsService],
})
export class ReviewsModule {}
