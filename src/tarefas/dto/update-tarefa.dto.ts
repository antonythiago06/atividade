import { IsIn, IsInt, IsOptional, IsString, Max, Min } from 'class-validator';

export class UpdateTarefaDto {
  @IsOptional()
  @IsString()
  titulo?: string;

  @IsOptional()
  @IsString()
  descricao?: string;

  @IsOptional()
  @IsString()
  @IsIn(['em_aberto', 'em_andamento', 'concluida'])
  status?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(5)
  prioridade?: number;
}
