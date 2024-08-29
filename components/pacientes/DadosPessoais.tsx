import React from 'react'
import { Button, Divider, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import DateOfBirthAndAge from '@/components/DateOfBirthAndAge';
import { generos, series } from '@/constants';

const DadosPessoais = () => {
  const [genero, setGenero] = React.useState('');
  const handleGeneroChange = (event: SelectChangeEvent) => {
    setGenero(event.target.value as string);
  };

  const [serie, setSerie] = React.useState('');
  const handleSerieChange = (event: SelectChangeEvent) => {
    setSerie(event.target.value as string);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid xs={12} md={10}>
          <TextField id='paciente-nome' label="Nome completo do paciente" fullWidth required variant="outlined" />
        </Grid>

        <Grid xs={12} md={2}>
          <FormControl fullWidth>
            <InputLabel id="paciente-genero">Gênero</InputLabel>
            <Select
              id="paciente-genero"
              value={genero}
              label="Gênero"
              onChange={handleGeneroChange}
            >
              {generos.map((genero) => (
                <MenuItem key={genero.value} value={genero.value}>
                  {genero.value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid xs={12} md={6}>
          <TextField id='cidade-nascimento' label="Cidade onde nasceu" fullWidth variant="outlined" />
        </Grid>

        <DateOfBirthAndAge />

        <Grid xs={12} md={6}>
          <TextField id='cpf-paciente' label="CPF do paciente" fullWidth variant="outlined" />
        </Grid>

        <Grid xs={12} md={6}>
          <TextField id='identidade-paciente' label="Número da carteira de identidade do paciente" fullWidth variant="outlined" />
        </Grid>
      </Grid>

      <Divider sx={{my: '2rem ',}}/>

      <Grid container spacing={2}>
        <Grid xs={12} md={6}>
          <TextField id='telefone-1' label="Telefone de contato" fullWidth variant="outlined" />
        </Grid>

        <Grid xs={12} md={6}>
          <TextField id='telefone-2' label="Outro telefone" fullWidth variant="outlined" />
        </Grid>

        <Grid xs={12} md={10}>
          <TextField id='endereco-paciente' label="Endereço atual do paciente" fullWidth variant="outlined" />
        </Grid>

        <Grid xs={12} md={2}>
          <TextField id='endereco-numero' label="Número" fullWidth variant="outlined" />
        </Grid>

        <Grid xs={12} md={6}>
          <TextField id='endereco-complemento' label="Complemento" fullWidth variant="outlined" />
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
