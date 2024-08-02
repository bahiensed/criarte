import React from 'react';
import 'dayjs/locale/pt-br';
import { AdapterDayjs } from  '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from    '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Autocomplete, Chekcbox, Divider, FormControlLabel, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { escolaridades } from '@/constants';

export default function Date() {

  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };  


  return (
    <>
    <Grid container spacing={2}>
      <Grid xs={12} md={6}>
        <TextField id='nomeCompleto' label="Nome completo do paciente" fullWidth variant="outlined" />
      </Grid>

      <Grid xs={12} md={2}>
        <FormControl fullWidth>
          <InputLabel id="turno">Sexo</InputLabel>
          <Select
            id="sexo"
            value={age}
            label="Sexo"
            onChange={handleChange}
          >
            <MenuItem value={0}>Feminino</MenuItem>
            <MenuItem value={1}>Masculino</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid xs={12} md={3}>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'pt-br'}>
          <DemoContainer components={['DatePicker']} sx={{pt:0}}>
              <DatePicker
                label="Data de nascimento"
                slots={{
                  textField: (params) => <TextField {...params} fullWidth />,
                }}
              />
          </DemoContainer>
        </LocalizationProvider>
      </Grid>

      <Grid xs={12} md={1}>
        <TextField id='idade' label='Idade' value='0' variant='outlined' disabled fullWidth />
      </Grid>

      <Grid xs={12} md={3}>
        <TextField id='naturalidade' label="Naturalidade" fullWidth variant="outlined" />
      </Grid>


      <Grid xs={12} md={3}>
        <TextField id='cpfPaciente' label="CPF" fullWidth variant="outlined" />
      </Grid>

      <Grid xs={12} md={3}>
        <TextField id='idPaciente' label="Carteira de identidade" fullWidth variant="outlined" />
      </Grid>


      <Grid xs={12} md={3}>
        <TextField id='telefone' label="Telefone de contato (com DDD)" fullWidth variant="outlined" />
      </Grid>


      <Grid xs={12} md={4}>
        <TextField id='endereco' label="Endereço atual" fullWidth variant="outlined" />
      </Grid>

      <Grid xs={12} md={2}>
        <TextField id='numero' label="Número" fullWidth variant="outlined" type="number" />
      </Grid>

      <Grid xs={12} md={4}>
        <TextField id='complemento' label="Complemento" fullWidth variant="outlined" />
      </Grid>

      <Grid xs={12} md={2}>
        <TextField id='cep' label="CEP" fullWidth variant="outlined" type="number" />
      </Grid>

      <Grid xs={12} md={4}>
        <TextField id='bairro' label="Bairro" fullWidth variant="outlined" />
      </Grid>

      <Grid xs={12} md={4}>
        <TextField id='cidade' label="Cidade" fullWidth variant="outlined" />
      </Grid>

      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={top100Films}
        sx={{ width: "fit-content" }}
        renderInput={(params) => <TextField {...params} label="Estado" />}
      />
    </Grid>


      <Divider sx={{my: '2rem ',}}/>




    <Divider sx={{my: '3rem ',}}/>


    <Grid container spacing={2}>
      <Grid xs={12} md={6}>
        <TextField id='nomeCompletoMae' label="Nome Completo da Mãe" fullWidth variant="outlined" />
      </Grid>

      <Grid xs={12} md={2}>
        <TextField id='cpfMae' label="CPF" fullWidth variant="outlined" />
      </Grid>

      <Grid xs={12} md={3}>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'pt-br'}>
          <DemoContainer components={['DatePicker']} sx={{pt:0}}>
              <DatePicker
                label="Data de Nascimento da Mãe"
                slots={{
                  textField: (params) => <TextField {...params} fullWidth />,
                }}
              />
          </DemoContainer>
        </LocalizationProvider>
      </Grid>

      <Grid xs={12} md={1}>
        <TextField id='idade' label='Idade' value='0' variant='outlined' disabled fullWidth />
      </Grid>

      <Grid xs={12} md={4}>
        <FormControl fullWidth>
          <InputLabel id="escolaridadeMae">Escolaridade</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="escolaridadeMae"
            value={age}
            label="Escolaridade"
            onChange={handleChange}
          >
            <MenuItem value={0}>Analfabeta</MenuItem>
            <MenuItem value={1}>Fundamental Incompleto</MenuItem>
            <MenuItem value={2}>Fundamental Completo</MenuItem>
            <MenuItem value={3}>Médio Incompleto</MenuItem>
            <MenuItem value={4}>Médio Completo</MenuItem>
            <MenuItem value={5}>Superior Incompleto</MenuItem>
            <MenuItem value={6}>Superior Completo</MenuItem>
            <MenuItem value={7}>Superior Completo</MenuItem>
            <MenuItem value={8}>Mestrado</MenuItem>
            <MenuItem value={9}>Doutorado</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid xs={12} md={4}>
        <TextField id='profissaoMae' label="Profissão" fullWidth variant="outlined" />
      </Grid>
    </Grid>

    <Divider sx={{my: '2rem ',}}/>


    <Grid container spacing={2}>
      <Grid xs={12} md={8}>
        <TextField id='nomeCompletoPai' label="Nome Completo do Pai" fullWidth variant="outlined" />
      </Grid>

      <Grid xs={12} md={3}>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'pt-br'}>
          <DemoContainer components={['DatePicker']} sx={{pt:0}}>
              <DatePicker
                label="Data de Nascimento do Pai"
                slots={{
                  textField: (params) => <TextField {...params} fullWidth />,
                }}
              />
          </DemoContainer>
        </LocalizationProvider>
      </Grid>

      <Grid xs={12} md={1}>
        <TextField id='idade' label='Idade' value='0' variant='outlined' disabled fullWidth />
      </Grid>

      <Grid xs={12} md={4}>
        <FormControl fullWidth>
          <InputLabel id="escolaridadePai">Escolaridade</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="escolaridadePai"
            value={age}
            label="Escolaridade"
            onChange={handleChange}
          >
            <MenuItem value={0}>Analfabeta</MenuItem>
            <MenuItem value={1}>Fundamental Incompleto</MenuItem>
            <MenuItem value={2}>Fundamental Completo</MenuItem>
            <MenuItem value={3}>Médio Incompleto</MenuItem>
            <MenuItem value={4}>Médio Completo</MenuItem>
            <MenuItem value={5}>Superior Incompleto</MenuItem>
            <MenuItem value={6}>Superior Completo</MenuItem>
            <MenuItem value={7}>Superior Completo</MenuItem>
            <MenuItem value={8}>Mestrado</MenuItem>
            <MenuItem value={9}>Doutorado</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid xs={12} md={4}>
        <TextField id='profissaoPai' label="Profissão" fullWidth variant="outlined" />
      </Grid>

      <Grid xs={12} md={4}>
        <TextField id='cpfPai' label="CPF" fullWidth variant="outlined" />
      </Grid>
    </Grid>

    </>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: 'Espírito Santo', year: 1994 },
  { label: 'Minas Gerais', year: 1972 },
  { label: 'Rio de Janeiro', year: 1974 },
  { label: 'São Paulo', year: 2008 },
];