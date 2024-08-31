"use client"

import {
  Accordion, AccordionDetails, AccordionSummary,
  Button,
  Divider,
  Typography
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Anamnese from '@/components/pacientes/Anamnese';
import DadosPessoais from '@/components/pacientes/DadosPessoais';
import DadosFamiliares from '@/components/pacientes/DadosFamiliares';
import DadosEscolares from '@/components/pacientes/DadosEscolares';
import DadosFinanceiros from '@/components/pacientes/DadosFinanceiros';
import RelatorioTrimestral from '@/components/pacientes/RelatorioTrimestral';
import Time from '@/components/pacientes/Time';

const Profissionais = () => {
  return (
  <>
    <Accordion defaultExpanded>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <h2 style={{marginBottom: 0}}>
          Dados Pessoais
        </h2>
      </AccordionSummary>
      <AccordionDetails>
        <DadosPessoais />
      </AccordionDetails>
    </Accordion>

    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2-content"
        id="panel2-header"
      >
        <h2 style={{marginBottom: 0,}}>
          Dados Familiares
        </h2>
      </AccordionSummary>
      <AccordionDetails sx={{maxHeight: '32rem', overflow: 'auto'}}>
        <DadosFamiliares />
      </AccordionDetails>
    </Accordion>

    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2-content"
        id="panel2-header"
      >
        <h2 style={{marginBottom: 0}}>
          Dados Escolares
        </h2>
      </AccordionSummary>
      <AccordionDetails sx={{maxHeight: '32rem', overflow: 'auto'}}>
        <DadosEscolares />
      </AccordionDetails>
    </Accordion>

    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2-content"
        id="panel2-header"
      >
        <h2 style={{marginBottom: 0,}}>
          Dados Financeiros
        </h2>
      </AccordionSummary>
      <AccordionDetails sx={{maxHeight: '32rem', overflow: 'auto'}}>
        <DadosFinanceiros />
      </AccordionDetails>
    </Accordion>

    <Divider sx={{my: '2rem '}} />

    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2-content"
        id="panel2-header"
      >
        <h2 style={{marginBottom: 0,}}>
          Primeira Consulta / PEII Hipotético
        </h2>
      </AccordionSummary>
      <AccordionDetails sx={{maxHeight: '32rem', overflow: 'auto'}}>
        <h1>PEII Hipotético</h1>
      </AccordionDetails>
    </Accordion>

    <Divider sx={{my: '2rem '}} />

    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2-content"
        id="panel2-header"
      >
        <h2 style={{marginBottom: 0,}}>
          Plano de Saúde
        </h2>
      </AccordionSummary>
      <AccordionDetails sx={{maxHeight: '32rem', overflow: 'auto'}}>
        <h1>Plano de Saúde</h1>
      </AccordionDetails>
    </Accordion>

    <Divider sx={{my: '2rem '}} />

    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2-content"
        id="panel2-header"
      >
        <h2 style={{marginBottom: 0,}}>
          Anamnese
        </h2>
      </AccordionSummary>
      <AccordionDetails sx={{maxHeight: '32rem', overflow: 'auto'}}>
        <Anamnese />          
      </AccordionDetails>
    </Accordion>

    <Divider sx={{my: '2rem '}} />

    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2-content"
        id="panel2-header"
      >
        <h2 style={{marginBottom: 0,}}>
          Avaliação Integrada
        </h2>
      </AccordionSummary>
      <AccordionDetails sx={{maxHeight: '32rem', overflow: 'auto'}}>
        <h1>Avaliação Integrada</h1>
      </AccordionDetails>
    </Accordion>

    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2-content"
        id="panel2-header"
      >
        <h2 style={{marginBottom: 0,}}>
          Diagnóstico
        </h2>
      </AccordionSummary>
      <AccordionDetails sx={{maxHeight: '32rem', overflow: 'auto'}}>
        <h1>Diagnóstico</h1>
      </AccordionDetails>
    </Accordion>

    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2-content"
        id="panel2-header"
      >
        <h2 style={{marginBottom: 0,}}>
          Terapeuta de Referência & Equipe
        </h2>
      </AccordionSummary>
      <AccordionDetails sx={{maxHeight: '32rem', overflow: 'auto'}}>
        <Time />
      </AccordionDetails>
    </Accordion>

    <Divider sx={{my: '2rem '}} />

    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2-content"
        id="panel2-header"
      >
        <h2 style={{marginBottom: 0,}}>
          Objetivo Geral
        </h2>
      </AccordionSummary>
      <AccordionDetails sx={{maxHeight: '32rem', overflow: 'auto'}}>
        <h1>Objetivo Geral</h1>
      </AccordionDetails>
    </Accordion>

    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2-content"
        id="panel2-header"
      >
        <h2 style={{marginBottom: 0,}}>
          Objetivos por Área
        </h2>
      </AccordionSummary>
      <AccordionDetails sx={{maxHeight: '32rem', overflow: 'auto'}}>
        <h1>Objetivos por Área</h1>
      </AccordionDetails>
    </Accordion>

    <Divider sx={{my: '2rem '}} />

    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2-content"
        id="panel2-header"
      >
        <h2 style={{marginBottom: 0,}}>
          Evolução Diária
        </h2>
      </AccordionSummary>
      <AccordionDetails sx={{maxHeight: '32rem', overflow: 'auto'}}>
        <h1>Evolução Diária</h1>
      </AccordionDetails>
    </Accordion>

    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2-content"
        id="panel2-header"
      >
        <h2 style={{marginBottom: 0,}}>
          Relatório Mensal
        </h2>
      </AccordionSummary>
      <AccordionDetails sx={{maxHeight: '32rem', overflow: 'auto'}}>
        <h1>Relatório Mensal</h1>
      </AccordionDetails>
    </Accordion>

    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2-content"
        id="panel2-header"
      >
        <h2 style={{marginBottom: 0,}}>
          Relatório Trimestral
        </h2>
      </AccordionSummary>
      <AccordionDetails sx={{maxHeight: '32rem', overflow: 'auto'}}>
        <RelatorioTrimestral />
      </AccordionDetails>
    </Accordion>


  </>
  );
}

export default Profissionais