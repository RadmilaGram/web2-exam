import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './category.entity';

@Injectable()
export class CategoriesService {
  private categories: Category[] = [];
  private nextId = 1;

  findAll(): Category[] {
    return this.categories;
  }

  findOne(id: number): Category {
    const category = this.categories.find((c) => c.id === id);
    if (!category) {
      throw new NotFoundException(`Category with id=${id} not found`);
    }
    return category;
  }

  create(dto: CreateCategoryDto): Category {
    const category: Category = { id: this.nextId++, ...dto };
    this.categories.push(category);
    return category;
  }

  update(id: number, dto: UpdateCategoryDto): Category {
    const category = this.findOne(id);
    Object.assign(category, dto);
    return category;
  }

  remove(id: number): Category {
    const index = this.categories.findIndex((c) => c.id === id);
    if (index === -1) {
      throw new NotFoundException(`Category with id=${id} not found`);
    }
    const [removed] = this.categories.splice(index, 1);
    return removed;
  }
}
