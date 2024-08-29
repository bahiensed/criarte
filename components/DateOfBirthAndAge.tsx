import React, { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import minMax from 'dayjs/plugin/minMax';
import { TextField } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

dayjs.extend(minMax);

function DateOfBirthAndAge() {
  const [dateOfBirth, setDateOfBirth] = useState<Dayjs | null>(null);
  const [age, setAge] = useState<number | null>(null);

  const handleDateChange = (date: Dayjs | null) => {
    if (date && date.isValid() && date.year() >= 1901) {
      const minDate = dayjs('1901-01-01');
      const maxDate = dayjs();
      const validDate = dayjs.min(dayjs.max(date, minDate), maxDate);

      const today = dayjs();
      const years = today.diff(validDate, 'year');
      setDateOfBirth(validDate);
      setAge(years);
    } else {
      setDateOfBirth(null);
      setAge(null);
    }
  };

  return (
    <>
      <Grid xs={8} md={4}>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'pt-br'}>
          <DatePicker
            label="Data de nascimento"
            value={dateOfBirth}
            onChange={(newValue) => {
              if (newValue && newValue.isValid() && newValue.year() >= 1901) {
                setDateOfBirth(newValue);
                handleDateChange(newValue);
              }
            }}
            disableFuture
            minDate={dayjs('1901-01-01')}
            slotProps={{
              textField: {
                fullWidth: true,
                required: true,
              },
            }}
          />
        </LocalizationProvider>
      </Grid>

      <Grid xs={4} md={2}>
        <TextField
          label="Idade"
          value={age !== null ? age.toString() : ''}
          variant="outlined"
          disabled
          fullWidth
        />
      </Grid>
    </>
  );
}

export default DateOfBirthAndAge;
