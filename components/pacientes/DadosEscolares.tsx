import React, { useState } from 'react';
import { Button, Checkbox, Divider, FormControl, FormControlLabel, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { turnos, series } from '@/constants';

const DadosEscolares = () => {
  const [serie, setSerie] = React.useState('');
  const handleSerieChange = (event: SelectChangeEvent) => {
    setSerie(event.target.value as string);
  };

  const [turno, setTurno] = React.useState('');
  const handleTurnoChange = (event: SelectChangeEvent) => {
    setTurno(event.target.value as string);
  };

  const [isExtraCurricularChecked, setIsExtracurricularChecked] = useState(false);
  const handleExtracurricularChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsExtracurricularChecked(event.target.checked);
  };

  const [isReforcoEscolarChecked, setIsReforcoEscolarChecked] = useState(false);
  const handleReforcoEscolarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsReforcoEscolarChecked(event.target.checked);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid xs={12} md={8}>
          <TextField id='escola' label="Nome da escola" fullWidth variant="outlined" />
        </Grid>

        <Grid xs={12} md={2}>
          <FormControl fullWidth>
            <InputLabel id="turno">Turno</InputLabel>
            <Select
              id="turno"
              value={turno}
              label="Turno"
              onChange={handleTurnoChange}
            >
              {turnos.map((turno) => (
                <MenuItem key={turno.value} value={turno.value}>
                  {turno.value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid xs={12} md={2}>
        <FormControl fullWidth>
            <InputLabel id="serie">Ano / Série</InputLabel>
            <Select
              id="serie"
              value={serie}
              label="Ano / Série"
              onChange={handleSerieChange}
            >
              {series.map((serie) => (
                <MenuItem key={serie.value} value={serie.value}>
                  {serie.value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid xs={12} md={10}>
          <TextField id='escola-endereco' label="Endereço da escola" fullWidth variant="outlined" />
        </Grid>

        <Grid xs={12} md={2}>
          <TextField id='escola-numero' label="Número" fullWidth variant="outlined" />
        </Grid>

        <Grid xs={12} md={6}>
          <TextField id='escola-complemento' label="Complemento" fullWidth variant="outlined" />
        </Grid>

        <Grid xs={12} md={6}>
          <TextField id='escola-bairro' label="Bairro" fullWidth variant="outlined" />
        </Grid>

        <Grid xs={12} md={6}>
          <TextField id='escola-cidade' label="Cidade" fullWidth variant="outlined" />
        </Grid>

        <Grid xs={12} md={2}>
          <TextField id='escola-uf' label="Estado" fullWidth variant="outlined" />
        </Grid>

        <Grid xs={12} md={4}>
          <TextField id='escola-telefone' label="Telefone da escola" fullWidth variant="outlined" />
        </Grid>

        <Grid xs={12} md={6}>
          <TextField id='escola-coordenadora' label="Nome da coordenadora pedagógica" fullWidth variant="outlined" />
        </Grid>

        <Grid xs={12} md={6}>
          <TextField id='escola-professora' label="Nome da professora" fullWidth variant="outlined" />
        </Grid>

        <Grid xs={12} md={6}>
          &nbsp;<FormControlLabel
            control={<Checkbox checked={isReforcoEscolarChecked} onChange={handleReforcoEscolarChange} />}
            label="Reforço Escolar?"
          />
          {isReforcoEscolarChecked && (
            <TextField
              id="materias"
              label="Matérias do reforço escolar?"
              placeholder="Em quais matérias o paciente precisa de reforço escolar?"
              fullWidth
              multiline
              rows={3}
            />
          )}
        </Grid>

        <Grid xs={12} md={6}>
          &nbsp;<FormControlLabel
            control={<Checkbox checked={isExtraCurricularChecked} onChange={handleExtracurricularChange} />}
            label="Atividades extra-curriculares?"
          />
          {isExtraCurricularChecked && (
            <TextField
              id="atividades"
              label="Atividades extra-curriculares"
              placeholder="Lista de atividades extra-curriculares do paciente"
              fullWidth
              multiline
              rows={3}
            />
          )}
        </Grid>

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

export default DadosEscolares;
