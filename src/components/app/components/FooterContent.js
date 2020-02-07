import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import LinkComponent from 'src/components/link/linkComponent';

const FooterContent = () => (
  <div style={{ maxWidth: 700, margin: 'auto', textAlign: 'center' }}>
    <Typography variant="caption" align={'center'}>
      © Copyright 2020 - Deep Six Design
    </Typography>
    <Divider style={{ margin: '24px auto', width: 60 }} />
    <Grid container justify={'center'} spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
        <Typography
          align={'center'}
          gutterBottom
          color={'textSecondary'}
          component={LinkComponent}
          to="/about"
        >
          About
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography
          align={'center'}
          gutterBottom
          color={'textSecondary'}
          component={LinkComponent}
          to="/blog"
        >
          Blog
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography
          align={'center'}
          gutterBottom
          color={'textSecondary'}
          component={LinkComponent}
          to="/terms"
        >
          Terms & Conditions
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography
          align={'center'}
          gutterBottom
          color={'textSecondary'}
          component={LinkComponent}
          to="/contact"
        >
          Contact Us
        </Typography>
      </Grid>
    </Grid>
  </div>
);

export default FooterContent;
