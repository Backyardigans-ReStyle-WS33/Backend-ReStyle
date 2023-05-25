import { PartialType } from '@nestjs/mapped-types';
import { CreateRemodelerDto } from './create-remodeler.dto';

export class UpdateRemodelerDto extends PartialType(CreateRemodelerDto) {}
