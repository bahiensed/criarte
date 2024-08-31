import React from 'react'
import { Button, Divider, TextField, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Image from 'next/image';
import Link from 'next/link';

const RelatorioTrimestral = () => {
  return (
    <>
      <h2>Relatório Transdiciplinar de Avaliação Integrada</h2>

      <ul>
        <li>
          <Link href="/">
            <Image src="/public/next.svg" alt="Relatório" width={2} height={2} />
            Relatório Trimestral Consolidado (06/2024)
          </Link>
        </li>

        <li>
          <Link href="/">
            <Image src="/public/vercel.svg" alt="Relatório" width={2} height={2} />
            Relatório Trimestral Consolidado (03/2024)
          </Link>
        </li>
      </ul>

      <Typography>
        A avaliação integrada conjuga o indivíduo e analisa seu desenvolvimento em todos os seus aspectos: Cognitivo – Processos de aprendizagem, conhecimentos prévios, maturidade conceitual, processamento de informações; Comunicação - Linguagem, vocabulário, expressões e interesse em comunicar; Sensorial - 5 sentidos principais, interpretação, discriminação, resposta as informações sensoriais, bem com sua capacidade de integração; Motor/Psicomotor - movimentação funcional, projeto mental e qualidade da realização; Emocional - investimento afetivo, empatia e capacidade de regulação; Comportamental – Capacidade de adaptação, resposta a interação orgânica e/ou ambiental e valor relacional (social). Sendo assim, nenhuma competência é julgada isoladamente, mas sempre com a expressão de vários aspectos do indivíduo, interagindo entre si, sob uma ótica evolutiva, ou seja, de acordo com a fase de desenvolvimento neuroevolutivo em que se encontra.
      </Typography>

      <Typography>
        A metodologia MEII (Método de Estimulação Integrada Intensiva) possui como prioridade inicial a capacitação da equipe transdisciplinar, estruturação do espaço físico terapêutico e elaboração de um programa de estimulação integrada específica e individual. Ou seja, de acordo com as particularidades de cada indivíduo.
      </Typography>

      <Typography>
        Os acompanhamentos terapêuticos baseados no MEII, visam a estimulação transdisciplinar, onde os terapeutas cientes de todas as necessidades do indivíduo trabalham em sua área de atuação, com um objetivo único acordado com a família ao longo de 3 (três) meses. Em seguida é realizada a reavaliação para a modificação do mesmo.
      </Typography>

      <h3 style={{
        color: '#444',
        marginBottom: 0,
        marginTop: '3rem',
        paddingBottom: 0
        }}
      >
        Análise Sensorial (Terapia Ocupacional)
      </h3>

      <Divider sx={{mb: '2rem',}}/>

      <Grid container spacing={2}>
        <Grid xs={12}>
          <ul>
            <li>
              <Link href="/">
                <Image src="/public/next.svg" alt="Relatório" width={2} height={2} />
                Relatório (06/2024)
              </Link>
            </li>

            <li>
              <Link href="/">
                <Image src="/public/vercel.svg" alt="Relatório" width={2} height={2} />
                Relatório (03/2024)
              </Link>
            </li>
          </ul>

          <TextField
            id="relatorio-terapia-ocupacional"
            label="Relatório"
            fullWidth multiline rows={8}
          />
        </Grid>
        <Grid xs={6} md={6}>
          <Button variant="contained">Guardar Relatório</Button>
        </Grid>
      </Grid>




      <h3 style={{
        color: '#444',
        marginBottom: 0,
        marginTop: '3rem',
        paddingBottom: 0
        }}
      >
        Análise Motora, Psicomotora, Funcional (Fisioterapia, Terapia Ocupacional)
      </h3>

      <Divider sx={{mb: '2rem',}}/>

      <Grid container spacing={2}>
        <Grid xs={12}>
          <ul>
            <li>
              <Link href="/">
                <Image src="/public/next.svg" alt="Relatório" width={2} height={2} />
                Relatório (06/2024)
              </Link>
            </li>

            <li>
              <Link href="/">
                <Image src="/public/vercel.svg" alt="Relatório" width={2} height={2} />
                Relatório (03/2024)
              </Link>
            </li>
          </ul>

          <TextField
            id="relatorio-terapia-ocupacional"
            label="Relatório"
            fullWidth multiline rows={8}
          />
        </Grid>
        <Grid xs={6} md={6}>
          <Button variant="contained">Guardar Relatório</Button>
        </Grid>
      </Grid>




      <h3 style={{
        color: '#444',
        marginBottom: 0,
        marginTop: '3rem',
        paddingBottom: 0
        }}
      >
        Análise Cognitiva (Psicopedagogia)
      </h3>

      <Divider sx={{mb: '2rem',}}/>

      <Grid container spacing={2}>
        <Grid xs={12}>
          <ul>
            <li>
              <Link href="/">
                <Image src="/public/next.svg" alt="Relatório" width={2} height={2} />
                Relatório (06/2024)
              </Link>
            </li>

            <li>
              <Link href="/">
                <Image src="/public/vercel.svg" alt="Relatório" width={2} height={2} />
                Relatório (03/2024)
              </Link>
            </li>
          </ul>

          <TextField
            id="relatorio-terapia-ocupacional"
            label="Relatório"
            fullWidth multiline rows={8}
          />
        </Grid>
        <Grid xs={6} md={6}>
          <Button variant="contained">Guardar Relatório</Button>
        </Grid>
      </Grid>




      <h3 style={{
        color: '#444',
        marginBottom: 0,
        marginTop: '3rem',
        paddingBottom: 0
        }}
      >
        Análise da Comunicação, Linguagem (Fonoaudiologia)
      </h3>

      <Divider sx={{mb: '2rem',}}/>

      <Grid container spacing={2}>
        <Grid xs={12}>
          <ul>
            <li>
              <Link href="/">
                <Image src="/public/next.svg" alt="Relatório" width={2} height={2} />
                Relatório (06/2024)
              </Link>
            </li>

            <li>
              <Link href="/">
                <Image src="/public/vercel.svg" alt="Relatório" width={2} height={2} />
                Relatório (03/2024)
              </Link>
            </li>
          </ul>

          <TextField
            id="relatorio-terapia-ocupacional"
            label="Relatório"
            fullWidth multiline rows={8}
          />
        </Grid>
        <Grid xs={6} md={6}>
          <Button variant="contained">Guardar Relatório</Button>
        </Grid>
      </Grid>




      <h3 style={{
        color: '#444',
        marginBottom: 0,
        marginTop: '3rem',
        paddingBottom: 0
        }}
      >
        Análise da Alimentação, Nutricional (Nutrição)
      </h3>

      <Divider sx={{mb: '2rem',}}/>

      <Grid container spacing={2}>
        <Grid xs={12}>
          <ul>
            <li>
              <Link href="/">
                <Image src="/public/next.svg" alt="Relatório" width={2} height={2} />
                Relatório (06/2024)
              </Link>
            </li>

            <li>
              <Link href="/">
                <Image src="/public/vercel.svg" alt="Relatório" width={2} height={2} />
                Relatório (03/2024)
              </Link>
            </li>
          </ul>

          <TextField
            id="relatorio-terapia-ocupacional"
            label="Relatório"
            fullWidth multiline rows={8}
          />
        </Grid>
        <Grid xs={6} md={6}>
          <Button variant="contained">Guardar Relatório</Button>
        </Grid>
      </Grid>




      <h3 style={{
        color: '#444',
        marginBottom: 0,
        marginTop: '3rem',
        paddingBottom: 0
        }}
      >
        Análise Comportamental, Socioemocional (Psicologia)
      </h3>

      <Divider sx={{mb: '2rem',}}/>

      <Grid container spacing={2}>
        <Grid xs={12}>
          <ul>
            <li>
              <Link href="/">
                <Image src="/public/next.svg" alt="Relatório" width={2} height={2} />
                Relatório (06/2024)
              </Link>
            </li>

            <li>
              <Link href="/">
                <Image src="/public/vercel.svg" alt="Relatório" width={2} height={2} />
                Relatório (03/2024)
              </Link>
            </li>
          </ul>

          <TextField
            id="relatorio-terapia-ocupacional"
            label="Relatório"
            fullWidth multiline rows={8}
          />
        </Grid>
        <Grid xs={6} md={6}>
          <Button variant="contained">Guardar Relatório</Button>
        </Grid>
      </Grid>
    </>
  )
}

export default RelatorioTrimestral