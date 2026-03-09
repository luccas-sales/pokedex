import { IsInt, IsOptional, IsString, IsUrl } from 'class-validator';

export class UpdatePokemonDTO {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsInt()
  pokedex_id?: number;

  @IsOptional()
  @IsString()
  type?: string;

  @IsOptional()
  @IsInt()
  level?: number;

  @IsOptional()
  @IsInt()
  hp?: number;
}
