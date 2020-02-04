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

const ContentContent = ({ classes }) => (
  <div className={classes.root}>
    <Typography variant={'overline'}>INTRODUCING</Typography>
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
    <br />
    <Typography weight={'bold'} variant={'h5'} gutterBottom>
      Objectives
    </Typography>
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
      amet scelerisque purus, sit amet placerat ligula. Sed malesuada
      molestie pharetra. Morbi vestibulum, ligula ut tincidunt
      maximus, quam libero placerat metus, quis vestibulum lacus massa
      sit amet urna. Praesent ultricies tortor eu mauris varius
      pellentesque. Aliquam dictum tortor erat, et varius leo aliquam
      pharetra. Pellentesque luctus rutrum lectus sit amet dignissim.
      Phasellus non efficitur nibh, in eleifend quam. Nam a efficitur
      nisl. Suspendisse maximus vestibulum sapien, et interdum purus
      ultricies eu. Donec egestas magna metus, a blandit massa
      vestibulum nec. Aliquam a sollicitudin nisl, vel tincidunt erat.
    </Typography>
    <br />
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
      <b>Predict</b> - Fortell and forecast (patterns) on the basis of
      observation, experience, or scientific reason.
    </Typography>
    <Typography>
      <b>Project</b> to attribute (one's own ideas, feelings, or
      characteristics) to other people or to objects.
      <Link href={'https://deepsixdesign.com'}>Deep Six Design</Link>
    </Typography>
    <br />
    <br />
    <br />
  </div>
);

export default withStyles(styles)(ContentContent);
