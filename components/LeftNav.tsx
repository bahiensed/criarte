/**
 * 

- Agenda
- Novo Paciente
---- Lista de Pacientes
- Marcar Triagem (horário e reserva de sala e profissional)

- Ficha para entrevista contratual
- Primeiro contato com profissional (1ª consulta - formulário)
- PEII Hipotético
- Pedido para plano de saúde.
- Plano dá autorização com preço.
- Agendar a Anamnese

AGENDA

- Depois da anamnese tem 1 mês de avaliação integrada.
Salvar avaliação / testes. (Lista)
Diagnósticos / exames externos - tomografia, etc. (Lista).

- Reunião, os objetivos são traçados. Determinar o TR - (Terapeuta de Referência)
- Objetivo geral > planejamento 
- Objetivo por área > planejamento 

E os preços dos profissionais.
(Nivelamento)


Inserir os profissionais/setores que vão trabalhar com o paciente.

Input
- Evolução diária (travar depois de X minutos)
- Relatório Mensal
- Relatório 3 meses

*Tudo da psicologia tem que ser restrito.



Cadastro de profissionais
Nivelamento
Área
CLT/Contrato
Otimizar agenda com profissionais CLT
Contar quantos atendimentos o profissional fez.


Falta do paciente, profissional recebe ou não dependendo do caso.

Pagamento dos profissionais

 */

import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';

const buttons = [
  <Button key="0">Agenda</Button>,
  <Button key="1">Novo Paciente</Button>,
  <Button key="3">Lista de Pacientes</Button>,
  <Button key="2">Marcar Triagem</Button>,
  <Button key="5">Dados Financeiros</Button>,
  <Button key="6">Primeira Consulta</Button>,
  <Button key="7">PEII Hipotético</Button>,
  <Button key="8">Pedido para Plano de Saúde</Button>,
  <Button key="9">Autorização do Plano de Saúde</Button>,
  <Button key="10">Anamnese</Button>,
  <Button key="11">Avaliação Integrada</Button>,
  <Button key="12">Diagnóstico</Button>,
  <Button key="13">Terapeuta de Referência e Composição do Time</Button>,
  <Button key="14">Objetivo Geral</Button>,
  <Button key="15">Objetivos por Área</Button>,
  <Button key="16">Evolução Diária</Button>,
  <Button key="17">Relatótio Mensal</Button>,
  <Button key="18">Relatório Trimestral</Button>,
  <Button key="19">Profissionais</Button>,
  <Button key="20">Financeiro</Button>,
];

export default function LeftNav() {
  return (
    <Paper>
      <Box
        sx={{
          display: 'flex',
          '& > *': {
            m: 1,
            width: "100%",
          },
        }}
      >
        <ButtonGroup orientation="vertical" aria-label="Vertical button group">
          {buttons}
        </ButtonGroup>

      </Box>
    </Paper>
  );
}
