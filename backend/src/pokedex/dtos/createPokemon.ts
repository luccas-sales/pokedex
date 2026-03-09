import { IsInt, IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreatePokemonDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @IsNotEmpty()
  pokedex_id: number;

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsInt()
  @IsNotEmpty()
  level: number;

  @IsInt()
  @IsNotEmpty()
  hp: number;

  @IsUrl()
  @IsNotEmpty()
  image_url: string;
}
