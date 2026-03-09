import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma.service';
import { PokedexModule } from './pokedex/pokedex.module';

@Module({
  imports: [AuthModule, PokedexModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
