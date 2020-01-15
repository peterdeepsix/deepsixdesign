import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

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
  <div className={classes.root}>
    <Typography variant={'overline'}>Introducing</Typography>
    <Typography weight={'bold'} variant={'h4'} gutterBottom>
      Plexus Prediction <Link underline={'none'}>Engine</Link>
    </Typography>
    <Typography gutterBottom>
      <b>Version 1.0.0</b>
    </Typography>
    <Typography indent={'small'}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
      eget bibendum dui, nec faucibus nibh. Nunc lobortis erat in odio
      ornare blandit. Nulla molestie nibh dolor, eu ornare diam dictum
      vel. Fusce pellentesque nisl lacus, vitae hendrerit sem cursus
      eu. Donec hendrerit volutpat nibh, at egestas elit vestibulum
      at. Praesent fringilla massa nec sollicitudin dictum. Donec
      venenatis dui scelerisque dapibus tempor. Nunc vitae auctor
      ipsum. Interdum et malesuada fames ac ante ipsum primis in
      faucibus. Praesent et arcu risus. Etiam rhoncus lacus tellus,
      non auctor nibh viverra a. Interdum et malesuada fames ac ante
      ipsum primis in faucibus.
    </Typography>
    <br />
    <Typography weight={'bold'} variant={'h5'} gutterBottom>
      {'Take Me There!'}
    </Typography>
    <Typography gutterBottom>
      Thankful for
      <br />
    </Typography>
    <Typography component={'div'}>
      <ul>
        <li>Connection</li>
        <li>Experience</li>
        <li>Love</li>
        <li>Contrast</li>
      </ul>
    </Typography>
    <br />
    <Typography weight={'bold'} variant={'h5'} gutterBottom>
      Objectives
    </Typography>
    <Typography>
      In mainstream theories of natural language syntax, every
      syntactically-valid utterance can be extended to produce a new,
      longer one, because of recursion.[5] If this process can be
      continued indefinitely, then there is no upper bound on the
      length of a well-formed utterance and the number of unique
      well-formed strings of any language is countably infinite.[6]
      However, the books in the Library of Babel are of bounded length
      ("each book is of four hundred and ten pages; each page, of
      forty lines, each line, of some eighty letters"), so the Library
      can only contain a finite number of distinct strings, and thus
      cannot contain all possible well-formed utterances. Borges'
      narrator notes this fact, but believes that the Library is
      nevertheless infinite; he speculates that it repeats itself
      periodically, giving an eventual "order" to the "disorder" of
      the seemingly-random arrangement of books.
    </Typography>
    <br />
    <Typography weight={'bold'} variant={'h5'} gutterBottom>
      Solution
    </Typography>
    <Typography>
      Capture wordly patterns in order to create visions, from which
      projected beauty emerges.
    </Typography>
    <Typography component={'div'}>
      <ol>
        <li>Capture wordly patterns, common and rare.</li>
        <li>
          Search for 2 signature matches (content, style) in AquilaDB.
        </li>
        <li>
          Run results (content, style) through Neural Style Transfer
          to predict a vision.
        </li>
        <li>
          Run the (worldly_pattern, vision ) through Neural Style
          Transfer to project emergent beauty.
        </li>
      </ol>
    </Typography>
    <Typography>
      <b>Capture</b> - To emphasize, represent, or preserve
      (something, such as a scene, mood, or quality) in a more or less
      permanent form
    </Typography>
    <Typography>
      <b>Train</b> - To make prepared (as by exercise) for a test of
      skill.
    </Typography>
    <Typography>
      <b>Predict</b> - Fortell and forecast (patterns) on the basis of
      observation, experience, or scientific reason.
    </Typography>
    <Typography>
      <b>Project</b> to attribute (one's own ideas, feelings, or
      characteristics) to other people or to objects.
      <Link href={'https://deepsixdesign.com'}>Deep Six Design</Link>
    </Typography>
    <br />
  </div>
);

export default withStyles(styles)(AboutComponent);
