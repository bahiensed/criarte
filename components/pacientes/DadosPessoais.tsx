import React from 'react'
import { Button, Divider, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import DateOfBirthAndAge from '@/components/DateOfBirthAndAge';

const DadosPessoais = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid xs={12} md={8}>
          <TextField id='nomePaciente' label="Nome completo do paciente" fullWidth required variant="outlined" />
        </Grid>

        <Grid xs={12} md={4}>
          <TextField id='apelidoPaciente' label="Apelido" fullWidth variant="outlined" />
        </Grid>

        <Grid xs={12} md={6}>
          <TextField id='naturalCidade' label="Cidade onde nasceu" fullWidth variant="outlined" />
        </Grid>

        <DateOfBirthAndAge />

        <Grid xs={12} md={6}>
          <TextField id='cpfPaciente' label="CPF do paciente" fullWidth variant="outlined" />
        </Grid>

        <Grid xs={12} md={6}>
          <TextField id='idPaciente' label="Carteira de identidade do paciente" fullWidth variant="outlined" />
        </Grid>
      </Grid>

      <Divider sx={{my: '2rem ',}}/>

      <Grid container spacing={2}>
        <Grid xs={12} md={10}>
          <TextField id='enderecoPaciente' label="Endereço atual do paciente" fullWidth variant="outlined" />
        </Grid>

        <Grid xs={12} md={2}>
          <TextField id='enderecoNumero' label="Número" fullWidth variant="outlined" />
        </Grid>

        <Grid xs={12} md={6}>
          <TextField id='enderecoComplemento' label="Complemento" fullWidth variant="outlined" />
        </Grid>

        <Grid xs={12} md={6}>
          <TextField id='bairro' label="Bairro" fullWidth variant="outlined" />
        </Grid>

        <Grid xs={12} md={6}>
          <TextField id='cidade' label="Cidade" fullWidth variant="outlined" />
        </Grid>

        <Grid xs={12} md={2}>
          <TextField id='uf' label="Estado" fullWidth variant="outlined" />
        </Grid>

        <Grid xs={12} md={4}>
          <TextField id='cep' label="CEP" fullWidth variant="outlined" />
        </Grid>

      </Grid>


      <Divider sx={{my: '2rem ',}}/>


      <Grid container spacing={2}>
        <Grid xs={6} md={6}>
          <Button variant="contained">Guardar Dados</Button>
        </Grid>

        <Grid xs={3} md={3}>
          <Typography variant='caption'>Criado por:</Typography>
          <Typography variant='caption' display={'block'}>Carina em 10/08/24</Typography>
        </Grid>

        <Grid xs={3} md={3}>
          <Typography variant='caption'>Modificado por:</Typography>
          <Typography variant='caption' display={'block'}>Rafael em 18/08/24</Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default DadosPessoais
