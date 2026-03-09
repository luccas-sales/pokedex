import {
  Body,
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
  Request,
  UseGuards,
} from '@nestjs/common';
import { CreatePokemonDTO } from './dtos/createPokemon';
import { PokedexService } from './pokedex.service';
import { UpdatePokemonDTO } from './dtos/updatePokemon';
import { AuthGuard } from '../auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('pokedex')
export class PokedexController {
  constructor(private pokedexService: PokedexService) {}

  @Post('pokemons')
  async create(@Body() body: CreatePokemonDTO, @Request() req) {
    const userId = req.user.id;
    return await this.pokedexService.create(body, userId);
  }

  @Get('pokemons')
  async findAll(@Request() req) {
    const userId = req.user.id;
    return await this.pokedexService.findAll();
  }

  @Put('pokemons/:id')
  async update(
    @Param('id') id: string,
    @Body() body: UpdatePokemonDTO,
    @Request() req,
  ) {
    const userId = req.user.id;
    return await this.pokedexService.update(id, body, userId);
  }

  @Delete('pokemons/:id')
  async remove(@Param('id') id: string, @Request() req) {
    const userId = req.user.id;
    return await this.pokedexService.remove(id, userId);
  }
}
