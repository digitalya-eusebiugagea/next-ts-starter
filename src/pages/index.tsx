import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import React from 'react';

import ColorModeContext from '@/contexts/ColorModeContext';
import Main from '@/layouts/Main';
import Meta from '@/layouts/Meta';
import { makeStyles } from '@/styles/makeStyles';
import { WebConfig } from '@/utils/WebConfig';

const useStyles = makeStyles()((theme) => ({
  root: {
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

function Index() {
  const theme = useTheme();
  const { classes } = useStyles();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <Main meta={<Meta title={WebConfig.title} description={WebConfig.description} />}>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.default',
          color: 'text.primary',
          borderRadius: 1,
          p: 3,
        }}
      >
        {theme.palette.mode} mode
        <IconButton sx={{ ml: 1 }} color='inherit' onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        <Typography className={classes.root}>Hello</Typography>
      </Box>
    </Main>
  );
}

export default Index;
