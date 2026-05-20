import {
  IsIn,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class CreateTarefaDto {
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @IsOptional()
  @IsString()
  descricao: string;

  @IsString()
  @IsIn(['aberta', 'em_andamento', 'concluida'])
  status: string;

  @IsInt()
  @Min(1)
  @Max(5)
  prioridade: number;
}
