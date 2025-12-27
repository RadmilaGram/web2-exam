import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { Review } from './review.entity';

@Injectable()
export class ReviewsService {
  private reviews: Review[] = [];
  private nextId = 1;

  findAll(): Review[] {
    return this.reviews;
  }

  findByProduct(productId: number): Review[] {
    return this.reviews.filter((r) => r.productId === productId);
  }

  findOne(id: number): Review {
    const review = this.reviews.find((r) => r.id === id);
    if (!review) {
      throw new NotFoundException(`Review with id=${id} not found`);
    }
    return review;
  }

  create(dto: CreateReviewDto): Review {
    const review: Review = {
      id: this.nextId++,
      createdAt: new Date().toISOString(),
      ...dto,
    };
    this.reviews.push(review);
    return review;
  }

  update(id: number, dto: UpdateReviewDto): Review {
    const review = this.findOne(id);
    Object.assign(review, dto);
    return review;
  }

  remove(id: number): Review {
    const index = this.reviews.findIndex((r) => r.id === id);
    if (index === -1) {
      throw new NotFoundException(`Review with id=${id} not found`);
    }
    const [removed] = this.reviews.splice(index, 1);
    return removed;
  }
}
