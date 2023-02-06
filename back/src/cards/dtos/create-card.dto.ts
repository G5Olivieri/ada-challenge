import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCardDto {
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @IsString()
  @IsNotEmpty()
  conteudo: string;

  @IsString()
  @IsNotEmpty()
  lista: string;
}
