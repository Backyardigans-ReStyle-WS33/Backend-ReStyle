import { Module } from '@nestjs/common';
import { DatabaseModule } from './infraestructure/database/database.module';

@Module({
  imports: [DatabaseModule],
})
export class SharedModule {}
