'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import DadosPessoais from '@/components/pacientes/DadosPessoais';
import DadosEscolares from '@/components/pacientes/DadosEscolares';
import DadosFamiliares from '@/components/pacientes/DadosFamiliares';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Dados Pessoais" {...a11yProps(0)} />
          <Tab label="Dados Familiares" {...a11yProps(1)} />
          <Tab label="Dados Escolares" {...a11yProps(2)} />
          <Tab label="PEII Hipotético" {...a11yProps(3)} />
          <Tab label="Anamnese" {...a11yProps(4)} />
          <Tab label="Avaliação Integrada" {...a11yProps(5)} />
          <Tab label="Objetivos" {...a11yProps(6)} />
          <Tab label="Evolução Diária" {...a11yProps(7)} />
          <Tab label="Relatório Mensal" {...a11yProps(8)} />
          <Tab label="Relatório Trimestral" {...a11yProps(9)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <DadosPessoais />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <DadosFamiliares />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        <DadosEscolares />
      </CustomTabPanel>
    </Box>
  </>
  );
}