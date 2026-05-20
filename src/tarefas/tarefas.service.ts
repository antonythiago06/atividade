import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTarefaDto } from './dto/create-tarefa.dto';
import { UpdateTarefaDto } from './dto/update-tarefa.dto';

type Tarefa = {
  id: number;
  titulo: string;
  descricao?: string;
  status: string;
  prioridade: number;
};

@Injectable()
export class TarefasService {
  private tarefas: Tarefa[] = [
    {
      id: 1,
      titulo: 'Estudar NestJS',
      descricao: 'Aprender Pipes',
      status: 'em_andamento',
      prioridade: 5,
    },
    {
      id: 2,
      titulo: 'Dormir',
      descricao: 'ZZZZZZZZZZZZZ...',
      status: 'concluida',
      prioridade: 5,
    },
    {
      id: 3,
      titulo: 'Viajar',
      descricao: 'Conhecer o Mundo',
      status: 'em_aberto',
      prioridade: 3,
    },
  ];

  listar() {
    return this.tarefas;
  }

  buscarPorId(id: number) {
    const tarefa = this.tarefas.find((t) => t.id === id);
    if (!tarefa) {
      throw new NotFoundException('Tarefa nao encontrada');
    }
    return tarefa;
  }

  criar(dados: CreateTarefaDto) {
    const novoId =
      this.tarefas.length > 0
        ? Math.max(...this.tarefas.map((t) => t.id)) + 1
        : 1;

    const novaTarefa: Tarefa = { id: novoId, ...dados };
    this.tarefas.push(novaTarefa);
    return novaTarefa;
  }

  atualizarParcial(id: number, dados: UpdateTarefaDto) {
    const tarefa = this.buscarPorId(id);
    const atualizada = { ...tarefa, ...dados };

    this.tarefas = this.tarefas.map((t) => (t.id === id ? atualizada : t));
    return atualizada;
  }

  remover(id: number) {
    const existe = this.tarefas.some((t) => t.id === id);
    if (!existe) {
      throw new NotFoundException('Tarefa nao encontrada');
    }

    this.tarefas = this.tarefas.filter((t) => t.id !== id);
    return { mensagem: `Tarefa ${id} removida com sucesso` };
  }
}
