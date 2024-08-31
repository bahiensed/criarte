import * as React from 'react';
import { Autocomplete, Button, TextField } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

const top100Films = [
  { label: 'Carina', year: 1994 },
  { label: 'Rafael', year: 1972 },
  { label: 'Gabriel', year: 1974 },
  { label: 'Daniel', year: 2008 },
  { label: 'Douglas', year: 1957 },
  { label: "Daniela", year: 1993 },
  { label: 'Lucas', year: 1994 },
  { label: 'Pedro', year: 1994 },
  { label: 'João', year: 1994 },
  { label: 'José', year: 1994 },
]

export default function ComboBox() {
  return (
    <Grid container spacing={2}>
      <Grid xs={6} md={6}>
        <Autocomplete
          disablePortal
          options={top100Films}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Profissional" />}
        />
      </Grid>
      <Grid xs={6} md={6}>
        <Button variant="contained">Adicionar ao Time</Button>
      </Grid>
    </Grid>
  );
}