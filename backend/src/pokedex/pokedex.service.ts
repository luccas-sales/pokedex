import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePokemonDTO } from './dtos/createPokemon';
import { PrismaService } from 'src/prisma.service';
import { UpdatePokemonDTO } from './dtos/updatePokemon';

@Injectable()
export class PokedexService {
  constructor(private prismaService: PrismaService) {}

  async create(data: CreatePokemonDTO, userId: number) {
    return await this.prismaService.pokedex.create({
      data: {
        ...data,
        userId,
      },
    });
  }

  async findAll() {
    return await this.prismaService.pokedex.findMany();
  }

  async update(id: string, data: UpdatePokemonDTO, userId: number) {
    const numericId = parseInt(id, 10);

    const pokemon = await this.prismaService.pokedex.findUnique({
      where: { id: numericId },
    });

    if (!pokemon) {
      throw new NotFoundException('Pokémon não encontrado no sistema.');
    }

    if (pokemon.userId !== userId) {
      throw new ForbiddenException(
        'Você não tem permissão para editar este Pokémon.',
      );
    }

    return await this.prismaService.pokedex.update({
      where: { id: numericId },
      data,
    });
  }

  async remove(id: string, userId: number) {
    const numericId = parseInt(id, 10);

    const pokemon = await this.prismaService.pokedex.findUnique({
      where: { id: numericId },
    });

    if (!pokemon) {
      throw new NotFoundException('Pokémon não encontrado no sistema.');
    }

    if (pokemon.userId !== userId) {
      throw new ForbiddenException(
        'Você não tem permissão para deletar este Pokémon.',
      );
    }

    return await this.prismaService.pokedex.delete({
      where: { id: numericId },
    });
  }
}
