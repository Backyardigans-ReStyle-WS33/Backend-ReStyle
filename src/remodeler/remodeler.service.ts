import { Injectable } from '@nestjs/common';
import { CreateRemodelerDto } from './dto/create-remodeler.dto';
import { UpdateRemodelerDto } from './dto/update-remodeler.dto';

@Injectable()
export class RemodelerService {
  create(createRemodelerDto: CreateRemodelerDto) {
    return 'This action adds a new remodeler';
  }

  findAll() {
    return `This action returns all remodeler`;
  }

  findOne(id: number) {
    return `This action returns a #${id} remodeler`;
  }

  update(id: number, updateRemodelerDto: UpdateRemodelerDto) {
    return `This action updates a #${id} remodeler`;
  }

  remove(id: number) {
    return `This action removes a #${id} remodeler`;
  }
}
