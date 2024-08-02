import React from 'react';
import 'dayjs/locale/pt-br';
import { AdapterDayjs } from  '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from    '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Autocomplete, Button, Checkbox, Divider, FormControlLabel, IconButton, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { escolaridades, series } from '@/constants';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Date() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };  

  return (
    <>
    <Grid container spacing={2}>
      <Grid xs={12} md={6}>
        <TextField id='nomeCompletoMae' label="Nome Completo da Mãe" fullWidth variant="outlined" />
      </Grid>

      <Grid xs={8} md={4}>
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

      <Grid xs={4} md={2}>
        <TextField id='idade' label='Idade' value='0' variant='outlined' disabled fullWidth />
      </Grid>

      <Grid xs={12} md={6}>
        <TextField id='telefoneMae' label="Telefone de Contato" fullWidth variant="outlined" />
      </Grid>

      <Grid xs={12} md={6}>
        <TextField id='emailMae' label="e-mail" fullWidth variant="outlined" />
      </Grid>

      <Grid xs={12} md={6}>
        <TextField id='idMae' label="Carteira de Identidade" fullWidth variant="outlined" />
      </Grid>

      <Grid xs={12} md={6}>
        <TextField id='cpfMae' label="CPF" fullWidth variant="outlined" />
      </Grid>

      <Grid xs={12} md={6}>
        <FormControl fullWidth>
          <InputLabel id="escolaridadeMae">Escolaridade</InputLabel>
          <Select
            id="escolaridadeMae"
            value={age}
            label="Escolaridade"
            onChange={handleChange}
          >
            {escolaridades.map((escolaridade) => (
              <MenuItem key={escolaridade.i} value={escolaridade.i}>
                {escolaridade.content}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid xs={12} md={6}>
        <TextField id='profissaoMae' label="Profissão" fullWidth variant="outlined" />
      </Grid>
    </Grid>


    <Divider sx={{my: '2rem ',}}/>


    <Grid container spacing={2}>
      <Grid xs={12} md={6}>
        <TextField id='nomePai' label="Nome Completo do Pai" fullWidth variant="outlined" />
      </Grid>

      <Grid xs={8} md={4}>
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

      <Grid xs={4} md={2}>
        <TextField id='idadePai' label='Idade' value='0' variant='outlined' disabled fullWidth />
      </Grid>

      <Grid xs={12} md={6}>
        <TextField id='telPai' label="Telefone de Contato" fullWidth variant="outlined" />
      </Grid>

      <Grid xs={12} md={6}>
        <TextField id='emailPai' label="e-mail" fullWidth variant="outlined" />
      </Grid>

      <Grid xs={12} md={6}>
        <TextField id='idPai' label="Carteira de Identidade" fullWidth variant="outlined" />
      </Grid>

      <Grid xs={12} md={6}>
        <TextField id='cpfPai' label="CPF" fullWidth variant="outlined" />
      </Grid>

      <Grid xs={12} md={6}>
        <FormControl fullWidth>
          <InputLabel>Escolaridade</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="escolaridadePai"
            value={age}
            label="Escolaridade"
            onChange={handleChange}
          >
            {escolaridades.map((escolaridade) => (
              <MenuItem key={escolaridade.i} value={escolaridade.i}>
                {escolaridade.content}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid xs={12} md={6}>
        <TextField id='profissaoPai' label="Profissão" fullWidth variant="outlined" />
      </Grid>
    </Grid>

    <FormControlLabel control={<Checkbox />} label="Pais vivem juntos?" />


    <Divider sx={{my: '2rem ',}}/>


    <Grid container spacing={2}>
      <Grid xs={12} md={6}>
        <TextField id='nomeIrmao' label="Nome do Irmão" fullWidth variant="outlined" />
      </Grid>

      <Grid xs={8} md={4}>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'pt-br'}>
          <DemoContainer components={['DatePicker']} sx={{pt:0}}>
              <DatePicker
                label="Data de Nascimento do Irmão"
                slots={{
                  textField: (params) => <TextField {...params} fullWidth />,
                }}
              />
          </DemoContainer>
        </LocalizationProvider>
      </Grid>

      <Grid xs={4} md={2}>
        <TextField id='idadeIrmao' label='Idade' value='0' variant='outlined' disabled fullWidth />
      </Grid>

      <Grid xs={12} md={6}>
        <FormControl fullWidth>
          <InputLabel>Gênero</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="generoIrmao"
            value={age}
            label="Gênero"
            onChange={handleChange}
          >
            {escolaridades.map((escolaridade) => (
              <MenuItem key={escolaridade.i} value={escolaridade.i}>
                {escolaridade.content}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid xs={12} md={6}>
        <FormControl fullWidth>
          <InputLabel>Escolaridade</InputLabel>
          <Select
            id="escolaridadePai"
            value={age}
            label="Escolaridade"
            onChange={handleChange}
          >
            {series.map((serie) => (
              <MenuItem key={serie.i} value={serie.i}>
                {serie.v}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid xs={12} md={6}>
        <FormControlLabel control={<Checkbox />} label="Esse irmão mora na mesma casa?" />
      </Grid>

      <Grid xs={12} md={6}>
        <IconButton color='success'>
          <AddCircleIcon />
          <span style={{fontSize: 'small'}}>
            &nbsp; Adicionar irmão
          </span>
        </IconButton>

        <IconButton color='error' size='small'>
          <DeleteIcon fontSize='small' />
          <span style={{fontSize: 'small'}}>
            &nbsp; Excluir irmão
          </span>
        </IconButton>
      </Grid>
    </Grid>



    <Divider sx={{my: '2rem ',}}/>

    <Grid container>
      <Grid xs={12}>
        <TextField
          id="observacoes"
          label="Observações"
          fullWidth
          multiline
          rows={4}
        />
      </Grid>
    </Grid>


    </>
  );
}