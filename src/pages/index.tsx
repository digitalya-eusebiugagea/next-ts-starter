import { Box, Checkbox, FormControlLabel, FormGroup, FormLabel, Grid, Paper } from '@mui/material';
import dynamic from 'next/dynamic';
import React from 'react';

import ChooseBusinessUnit from '@/components/ChooseBusinessUnit';
import JiraInfoTable from '@/components/JiraInfoTable';
import Main from '@/layouts/Main';
import Meta from '@/layouts/Meta';
import { makeStyles } from '@/styles/makeStyles';
import { WebConfig } from '@/utils/WebConfig';

const JiraBarChartWithoutSSR = dynamic(import('../components/JiraBarChart'), { ssr: false });

const useStyles = makeStyles()((theme) => ({
  filters: {
    display: 'flex',
    flexWrap: 'wrap',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'column',
    },
  },
  filter: {
    padding: '1rem',
    marginBottom: '1rem',

    [theme.breakpoints.up('md')]: {
      marginBottom: 0,
    },

    '&:not(:first-of-type)': {
      marginLeft: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
        marginLeft: 0,
        marginTop: theme.spacing(2),
      },
    },
  },
  lala: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      marginLeft: '2rem',
    },
  },
  details: {
    width: '100%',
    marginTop: '2rem',
    [theme.breakpoints.up('md')]: {
      marginTop: '0rem',
    },
  },
}));

function Index() {
  const { classes } = useStyles();

  return (
    <Main meta={<Meta title={WebConfig.title} description={WebConfig.description} />}>
      <Grid container padding='2rem'>
        <Grid item md={2} className={classes.filters}>
          <Paper elevation={3} className={classes.filter}>
            <FormGroup>
              <FormLabel>Product type</FormLabel>
              <FormControlLabel control={<Checkbox />} label='Product type 1' />
              <FormControlLabel control={<Checkbox />} label='Product type 2' />
            </FormGroup>
          </Paper>
          <Paper elevation={3} className={classes.filter}>
            <FormGroup>
              <FormLabel>Some</FormLabel>
              <FormControlLabel control={<Checkbox />} label='Some 1' />
              <FormControlLabel control={<Checkbox />} label='Some 2' />
            </FormGroup>
          </Paper>
        </Grid>
        <Grid item md={10} className={classes.details}>
          <Box className={classes.lala}>
            <ChooseBusinessUnit />
            <Paper elevation={3} sx={{ marginBottom: '2rem' }}>
              <JiraBarChartWithoutSSR />
            </Paper>
            <Paper elevation={3}>
              <JiraInfoTable />
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Main>
  );
}

export default Index;
