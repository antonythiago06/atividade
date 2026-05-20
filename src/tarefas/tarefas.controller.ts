// tarefas/tarefas.controller.ts
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateTarefaDto } from './dto/create-tarefa.dto';
import { UpdateTarefaDto } from './dto/update-tarefa.dto';
import { TarefasService } from './tarefas.service';

@Controller('tarefas')
export class TarefasController {
  constructor(private readonly tarefasService: TarefasService) {}

  @Get()
  listar() {
    return this.tarefasService.listar();
  }

  @Get(':id')
  buscarPorId(@Param('id', ParseIntPipe) id: number) {
    return this.tarefasService.buscarPorId(id);
  }

  @Post()
  criar(@Body() body: CreateTarefaDto) {
    return this.tarefasService.criar(body);
  }

  @Patch(':id')
  atualizarParcial(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateTarefaDto,
  ) {
    return this.tarefasService.atualizarParcial(id, body);
  }

  @Delete(':id')
  remover(@Param('id', ParseIntPipe) id: number) {
    return this.tarefasService.remover(id);
  }
}
