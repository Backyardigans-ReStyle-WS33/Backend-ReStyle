import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectModule } from './project/project.module';
import { RemodelerModule } from './remodeler/remodeler.module';

@Module({
  imports: [ProjectModule, RemodelerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
