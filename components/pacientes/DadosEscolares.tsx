import React from 'react';
import 'dayjs/locale/pt-br';
import { AdapterDayjs } from  '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from    '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Autocomplete, Divider, FormControlLabel, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, TextareaAutosize } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Switch from '@mui/material/Switch';

export default function Date() {

  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };  


  return (
    <>
    <Grid container spacing={2}>

      <Grid xs={12} md={4}>
        <TextField id='escola' label="Nome da escola" fullWidth variant="outlined" />
      </Grid>

      <Grid xs={12} md={4}>
        <TextField id='serie' label="Ano / Série" fullWidth variant="outlined" />
      </Grid>

      <Grid xs={12} md={4}>
        <FormControl fullWidth>
          <InputLabel id="turno">Turno</InputLabel>
          <Select
            id="turno"
            value={age}
            label="Turno"
            onChange={handleChange}
          >
            <MenuItem value={0}>Manhã</MenuItem>
            <MenuItem value={1}>Tarde</MenuItem>
            <MenuItem value={2}>Noite</MenuItem>
            <MenuItem value={3}>Integral</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid xs={12} md={4}>
        <TextField id='coordenadora' label="Nome da coordenadora" fullWidth variant="outlined" />
      </Grid>

      <Grid xs={12} md={4}>
        <TextField id='professora' label="Nome da professora" fullWidth variant="outlined" />
      </Grid>

      <Grid xs={12} md={6}>
        <FormControlLabel
          value="start"
          control={<Switch color="primary" />}
          label="Reforço escolar?"
          labelPlacement="start"
        />
        <TextField
          label="Matérias"
          multiline
          rows={4}
        >
        </TextField>
      </Grid>

      <Grid xs={12} md={6}>
        <FormControlLabel
            value="start"
            control={<Switch color="primary" />}
            label="Atividades extra curriculares?"
            labelPlacement="start"
          />
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