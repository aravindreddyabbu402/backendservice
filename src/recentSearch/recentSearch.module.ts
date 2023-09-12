import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecentSearchService } from './recentSearch.service';
import { RecentSearchController } from './recentSearch.controller';
import { RecentSearch } from './entities/recentSearch.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RecentSearch])],
  exports: [TypeOrmModule],
  providers: [RecentSearchService],
  controllers: [RecentSearchController],
})
export class RecentSearchModule {}