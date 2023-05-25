import { Module } from '@nestjs/common';
import { RemodelerService } from './remodeler.service';
import { RemodelerController } from './remodeler.controller';

@Module({
  controllers: [RemodelerController],
  providers: [RemodelerService]
})
export class RemodelerModule {}
