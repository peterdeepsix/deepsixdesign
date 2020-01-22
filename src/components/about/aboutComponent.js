import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';

const styles = ({ breakpoints, transitions }) => ({
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
});

const AboutComponent = ({ classes }) => (
  <Card className={classes.card} elevation={0}>
    <div className={classes.root}>
      <Typography variant={'overline'}>Introducing</Typography>
      <Typography weight={'bold'} variant={'h4'} gutterBottom>
        Plexus Prediction <Link underline={'none'}>Engine</Link>
      </Typography>
      <Typography gutterBottom>
        <b>Version 1.0.2</b>
      </Typography>
      <br />
      <Typography weight={'bold'} variant={'h5'} gutterBottom>
        Objectives
      </Typography>
      <Typography>
        Capture wordly patterns in order to create visions, from which
        projected beauty emerges.
      </Typography>
      <br />
      <Typography weight={'bold'} variant={'h5'} gutterBottom>
        Prior Art
      </Typography>
      <Typography indent={'small'}>
        In mainstream theories of natural language syntax, every
        syntactically-valid utterance can be extended to produce a
        new, longer one, because of recursion. If this process can be
        continued indefinitely, then there is no upper bound on the
        length of a well-formed utterance and the number of unique
        well-formed strings of any language is countably infinite.
        However, the books in the Library of Babel are of bounded--**/
        length ("each book is of four hundred and ten pages; each
        page, of forty lines, each line, of some eighty letters"), so
        the Library can only contain a finite number of distinct
        strings, and thus cannot contain all possible well-formed
        utterances. Borges' narrator notes this fact, but believes
        that the Library is nevertheless infinite; he speculates that
        it repeats itself periodically, giving an eventual "order" to
        the "disorder" of the seemingly-random arrangement of books.
      </Typography>
      <br />
      <Typography weight={'bold'} variant={'h5'} gutterBottom>
        Strategy
      </Typography>
      <Typography>
        Taking out of scope problems beyond completion.
      </Typography>
      <br />
      <Typography weight={'bold'} variant={'h5'} gutterBottom>
        Actions
      </Typography>
      <Typography component={'div'}>
        <ol>
          <li>Capture wordly patterns, common and rare.</li>
          <li>
            Query AquilaDB for signature matches in both content and
            style layers.
          </li>
          <li>
            Input the signature matches through the Neural Style
            Transfer algorithm (NST).
          </li>
          <li>
            Return the resulting signature back through the NST
            algorithm with the worldly paterns.
          </li>
          <li>Display, observe, ponder and predict.</li>
        </ol>
      </Typography>
      <br />
    </div>
  </Card>
);

export default withStyles(styles)(AboutComponent);
