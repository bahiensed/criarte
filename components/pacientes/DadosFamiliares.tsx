import React from 'react';
import 'dayjs/locale/pt-br';
import { Autocomplete, Button, Checkbox, Divider, FormControl, FormControlLabel, IconButton, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import DateOfBirtheAndAge from '@/components/DateOfBirthAndAge';
import { escolaridades, series } from '@/constants';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Date() {
  const [escolaridade, setEscolaridade] = React.useState('');
  const handleEscolaridadeChange = (event: SelectChangeEvent) => {
    setEscolaridade(event.target.value as string);
  };

  const [genero, setGenero] = React.useState('');
  const handleGeneroChange = (event: SelectChangeEvent) => {
    setGenero(event.target.value as string);
  };

  const [idade, setIdade] = React.useState('');
  const handleIdadeChange = (event: SelectChangeEvent) => {
    setIdade(event.target.value as string);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid xs={12} md={6}>
          <TextField id='mae-nome' label="Nome completo da mãe" fullWidth variant="outlined" />
        </Grid>

        <DateOfBirtheAndAge />
        
        <Grid xs={12} md={6}>
          <TextField id='mae-cpf' label="CPF da mãe" fullWidth variant="outlined" />
        </Grid>

        <Grid xs={12} md={6}>
          <TextField id="mae-identidade" label="Carteira de identidade da mãe" placeholder="Número da carteira de identidade da mãe" fullWidth variant="outlined" />
        </Grid>

        <Grid xs={12} md={6}>
          <TextField id="mae-telefone" label="Telefone de contato da mãe" placeholder="Telefone de contato da mãe" fullWidth variant="outlined" />
        </Grid>

        <Grid xs={12} md={6}>
          <TextField id='mae-email' label="E-mail da mãe" fullWidth variant="outlined" />
        </Grid>

        <Grid xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel id="mae-escolaridade">Escolaridade da Mãe</InputLabel>
            <Select
              id="mae-escolaridade"
              value={escolaridade}
              label="Escolaridade da Mãe"
              onChange={handleEscolaridadeChange}
            >
              {escolaridades.map((escolaridade) => (
                <MenuItem key={escolaridade.value} value={escolaridade.value}>
                  {escolaridade.value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid xs={12} md={6}>
          <TextField id='mae-profissao' label="Profissão da Mãe " fullWidth variant="outlined" />
        </Grid>
      </Grid>

      <Divider sx={{my: '2rem ',}}/>

      <Grid container spacing={2}>
        <Grid xs={12} md={6}>
          <TextField id='pai-nome' label="Nome completo do pai" fullWidth variant="outlined" />
        </Grid>

        <DateOfBirtheAndAge />

        <Grid xs={12} md={6}>
          <TextField id='pai-cpf' label="CPF do pai" fullWidth variant="outlined" />
        </Grid>

        <Grid xs={12} md={6}>
          <TextField id="pai-identidade" label="Carteira de identidade do pai" placeholder="Número da carteira de identidade do pai" fullWidth variant="outlined" />
        </Grid>

        <Grid xs={12} md={6}>
          <TextField id="pai-telefone" label="Telefone de contato do pai" placeholder="Telefone de contato do pai" fullWidth variant="outlined" />
        </Grid>

        <Grid xs={12} md={6}>
          <TextField id='pai-email' label="E-mail do pai" fullWidth variant="outlined" />
        </Grid>

        <Grid xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel id="pai-escolaridade">Escolaridade do pai</InputLabel>
            <Select
              id="pai-escolaridade"
              value={escolaridade}
              label="Escolaridade do pai"
              onChange={handleEscolaridadeChange}
            >
              {escolaridades.map((escolaridade) => (
                <MenuItem key={escolaridade.value} value={escolaridade.value}>
                  {escolaridade.value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid xs={12} md={6}>
          <TextField id='pai-profissao' label="Profissão do pai " fullWidth variant="outlined" />
        </Grid>
      </Grid>

      <Divider sx={{my: '2rem ',}}/>

      <Grid container spacing={2}>
        <Grid xs={12} md={6}>
          <TextField id='irmao-nome' label="Nome do irmão" fullWidth variant="outlined" />
        </Grid>

        <DateOfBirtheAndAge />

        <Grid xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel>Gênero</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="generoIrmao"
              value={genero}
              label="Gênero"
              onChange={handleGeneroChange}
            >
              {escolaridades.map((escolaridade) => (
                <MenuItem key={escolaridade.value} value={escolaridade.value}>
                  {escolaridade.value}
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
              value={escolaridade}
              label="Escolaridade"
              onChange={handleEscolaridadeChange}
            >
              {escolaridades.map((escolaridade) => (
                <MenuItem key={escolaridade.value} value={escolaridade.value}>
                  {escolaridade.value}
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

      <Grid container spacing={2}>
        <Grid xs={12}>
          <TextField
            id="outros-responsaveis"
            label="Quem são os responsáveis pelo paciente na ausência dos pais?"
            placeholder="Quem são os responsáveis pelo paciente na ausência dos pais?"
            fullWidth
          />
        </Grid>
      </Grid>

      <Divider sx={{my: '2rem ',}}/>

      <Grid container spacing={2}>
        <Grid xs={12}>
          <TextField
            id="observacoes"
            label="Observações Gerais"
            fullWidth
            multiline
            rows={3}
          />
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
  );
}