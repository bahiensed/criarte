import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Dashboard } from '@mui/icons-material'
import Link from 'next/link';
import Image from 'next/image';

const links = [
  {
    name: 'AGENDA',
    href: '/agenda',
    icon: '/icons/calendar-days.svg',
  },
  {
    name: 'Novo Paciente',
    href: '/pacientes',
    icon: '/icons/user-plus.svg',
  },
  {
    name: 'Lista de Pacientes',
    href: '/pacientes',
    icon: '/icons/table-properties.svg',
  },
  {
    name: 'Marcar Triagem',
    href: '/triagem',
    icon: '/icons/filter.svg',
  },
  {
    name: 'Primeira Consulta',
    href: '/primeira-consulta',
    icon: '/icons/hospital.svg',
  },
  {
    name: 'Hipotético (Team Building)',
    href: '/hipotetico',
    icon: '/icons/square-arrow-up-right.svg',
  },
  {
    icon: '/icons/search.svg',
    name: 'Anamnese',
    href: '/anamnese',
  },
  {
    icon: '/icons/list-checks.svg',
    name: 'Avaliação Integrada',
    href: '/avaliacao-integrada',
  },
  {
    name: 'Evolução Diária',
    href: '/evolucao-diaria',
    icon: '/icons/notebook-pen.svg',
  },
  {
    name: 'Relatório Mensal',
    href: '/relatorio-mensal',
    icon: '/icons/notebook.svg',
  },
  {
    name: 'Relatório Trimestral',
    href: '/relatorio-trimestral',
    icon: '/icons/notebook-tabs.svg',
  },
  {
    name: 'Profissionais',
    href: '/profissionais',
    icon: '/icons/users.svg',
  },
  {
    name: 'Especialidades',
    href: '/especialidades',
    icon: '/icons/boxes.svg',
  },
];

const NavLinks = () => {
  return (
    <>
    <List>
    {links.map((link, i) => (
      <Link key={i} href={link.href}>
        <ListItem disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: 'initial', //justifyContent: open ? 'initial' : 'center',
              px: 2,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: 3, //mr: open ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <Image alt={link.name} src={link.icon} width={24} height={24} />
            </ListItemIcon>
            <ListItemText primary={link.name} />
          </ListItemButton>
        </ListItem>
      </Link>
    ))}
    </List>

    <Divider />
    </>
  )
}

export default NavLinks

