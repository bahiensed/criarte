"use client"

import * as React from 'react';
import {
  AppBar,
  Box, Button,
  Container, CssBaseline,
  Divider, Drawer,
  IconButton,
  List, ListItem, ListItemButton, ListItemText,
  Toolbar, Typography
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import MenuIcon from '@mui/icons-material/Menu';
import LeftNav from '@/components/LeftNav';

interface Props {
  window?: () => Window;
  children: React.ReactNode;
}

const drawerWidth = 200;
const navItems = ['Home', 'About', 'Contact'];

export default function RootLayout({ children, window }: Props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Criarte
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Criarte
          </Typography>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      <Box component="main" sx={{ p: 3, width: '100%' }}>
        <Toolbar />
        <Container maxWidth="lg">
          <Grid container>
            <Grid  xs={0} sm={3} >
              <LeftNav />
            </Grid>

            <Grid  xs={12} sm={9}>
              {children}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
