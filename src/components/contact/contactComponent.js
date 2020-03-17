import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { CardHeader } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(({ breakpoints, transitions }) => ({
  root: {
    padding: 16,
    transition: transitions.create(),
    [breakpoints.up('sm')]: {
      padding: 24,
      maxWidth: 700,
      margin: 'auto',
    },
    [breakpoints.up('md')]: {
      maxWidth: 960,
    },
  },
}));

const ContactComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <Box mt={2} mb={1}>
          <Card variant="outlined">
            <CardHeader title="Contact Us" />
            <CardContent>
              <Typography>
                Let us get in touch. Together we can deploy, observe,
                ponder and predict.
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box mt={2} mb={1}>
          <Card variant="outlined">
            <CardHeader title="Information" />
            <CardContent>
              <Typography>603.491.6588</Typography>
              <Typography>peter@deepsixdesign.com</Typography>
              <Typography>Henniker, NH 03242</Typography>
            </CardContent>
          </Card>
        </Box>
        <Box mt={2} mb={10}>
          <Card variant="outlined">
            <CardHeader title="Just Babel" />
            <CardContent>
              <Typography weight="bold" variant="h4" gutterBottom>
                Deep Six <Link underline="none">Design</Link>
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </div>
  );
};

export default ContactComponent;
