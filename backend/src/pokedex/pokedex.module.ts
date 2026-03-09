import { Module } from '@nestjs/common';
import { PokedexController } from './pokedex.controller';
import { PokedexService } from './pokedex.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [PokedexController],
  providers: [PokedexService, PrismaService],
})
export class PokedexModule {}
