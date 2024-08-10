import React, { useState } from 'react';
import { Button, Checkbox, Divider, FormControl, FormControlLabel, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { responsaveis } from '@/constants';


const DadosFinanceiros = () => {
  const [responsavelFinanceiro, setResponsavelFinanceiro] = React.useState('');
  const handleChange = (event: SelectChangeEvent) => {
    setResponsavelFinanceiro(event.target.value as string);
  };  

  const [isResponsavelFinanceiroChecked, setIsResponsavelFinanceiroChecked] = useState(false);
  const handleResponsavelFinanceiroChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsResponsavelFinanceiroChecked(event.target.checked);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel id="responsavelFinanceiro">Responsável Financeiro</InputLabel>
            <Select
              id="responsavelFinanceiro"
              value={responsavelFinanceiro}
              label="Responsável Financeiro"
              onChange={handleChange}
            >
              {responsaveis.map((responsavel) => (
                <MenuItem key={responsavel.i} value={responsavel.i}>
                  {responsavel.v}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid xs={12} md={12}>
          &nbsp;<FormControlLabel
          control={<Checkbox checked={isResponsavelFinanceiroChecked} onChange={handleResponsavelFinanceiroChange} />}
          label="Usar o mesmo endereço do paciente como endereço financeiro?"
        /></Grid>

        {!isResponsavelFinanceiroChecked && (
          <>
            <Grid xs={12} md={10}>
              <TextField id='enderecoPaciente' label="Endereço do responsável financeiro" fullWidth variant="outlined" />
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
          </>
        )}

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

export default DadosFinanceiros



