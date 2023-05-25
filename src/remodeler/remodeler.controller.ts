import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RemodelerService } from './remodeler.service';
import { CreateRemodelerDto } from './dto/create-remodeler.dto';
import { UpdateRemodelerDto } from './dto/update-remodeler.dto';

@Controller('remodeler')
export class RemodelerController {
  constructor(private readonly remodelerService: RemodelerService) {}

  @Post()
  create(@Body() createRemodelerDto: CreateRemodelerDto) {
    return this.remodelerService.create(createRemodelerDto);
  }

  @Get()
  findAll() {
    return this.remodelerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.remodelerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRemodelerDto: UpdateRemodelerDto) {
    return this.remodelerService.update(+id, updateRemodelerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.remodelerService.remove(+id);
  }
}
