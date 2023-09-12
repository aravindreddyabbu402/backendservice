import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandRepository {
  constructor(
    @InjectRepository(Brand)
    private brandRepository: Repository<Brand>,
  ) {}

  async findAll(): Promise<Brand[]> {
    return await this.brandRepository.find();
  }

  async findOne(id: any): Promise<Brand> {
    return await this.brandRepository.findOne(id);
  }

  async create(brand: Brand): Promise<Brand> {
    return await this.brandRepository.save(brand);
  }

  async update(id: any, brand: Brand): Promise<Brand> {
    await this.brandRepository.update(id, brand);
    return await this.brandRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.brandRepository.delete(id);
  }
}
