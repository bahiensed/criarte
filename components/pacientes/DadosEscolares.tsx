import React, { useState } from 'react';
import { Button, Checkbox, Divider, FormControlLabel, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

const DadosEscolares = () => {
  const [isReforcoEscolarChecked, setIsReforcoEscolarChecked] = useState(false);
  const [isExtraCurricularChecked, setIsExtracurricularChecked] = useState(false);

  const handleReforcoEscolarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsReforcoEscolarChecked(event.target.checked);
  };

  const handleExtracurricularChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsExtracurricularChecked(event.target.checked);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid xs={12} md={8}>
          <TextField id='escola' label="Nome da Escola" fullWidth variant="outlined" />
        </Grid>

        <Grid xs={12} md={2}>
          <TextField id='turno' label="Turno" fullWidth variant="outlined" />
        </Grid>

        <Grid xs={12} md={2}>
          <TextField id='serie' label="Ano / Série" fullWidth variant="outlined" />
        </Grid>

        <Grid xs={12} md={6}>
          <TextField id='coordenadora' label="Nome da Coordenadora Pedagógica" fullWidth variant="outlined" />
        </Grid>

        <Grid xs={12} md={6}>
          <TextField id='professora' label="Nome da Professora" fullWidth variant="outlined" />
        </Grid>

        <Grid xs={12} md={6}>
          &nbsp;<FormControlLabel
            control={<Checkbox checked={isReforcoEscolarChecked} onChange={handleReforcoEscolarChange} />}
            label="Reforço Escolar?"
          />
          {isReforcoEscolarChecked && (
            <TextField
              id="materias"
              label="Matérias"
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
              label="Atividades"
              fullWidth
              multiline
              rows={3}
            />
          )}
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
