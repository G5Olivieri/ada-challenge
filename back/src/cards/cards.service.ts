import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateCardDto } from './dtos/create-card.dto';
import { UpdateCardDto } from './dtos/update-card.dto';

@Injectable()
export class CardsService {
  constructor(private readonly prisma: PrismaService) {}

  list() {
    return this.prisma.card.findMany();
  }

  create(data: CreateCardDto) {
    return this.prisma.card.create({
      data,
    });
  }

  update(id: string, data: UpdateCardDto) {
    return this.prisma.card.update({ where: { id }, data });
  }

  delete(id: string) {
    return this.prisma.card.delete({ where: { id } });
  }
}
