import React, { useRef } from 'react';
import clsx from 'clsx';
import Loadable from '@loadable/component';
import IndefiniteLoading from 'src/components/loading/indefiniteLoading';

import {
  SnapList,
  SnapItem,
  useVisibleElements,
  useScroll,
} from 'react-snaplist-carousel';

import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from '@material-ui/core';

const LinkComponent = Loadable(
  () => import('src/components/link/LinkComponent'),
  {
    fallback: <IndefiniteLoading message="LinkComponent" />,
  },
);

const ProductsBreadCrumbs = Loadable(
  () => import('./productsBreadCrumbs'),
  {
    fallback: <IndefiniteLoading message="ProductsBreadCrumbs" />,
  },
);

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(3),
    width: '100vw',
  },
  selected: {
    background: '#cccccc',
    cursor: 'pointer',
  },
  gridList: {
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
  media: {
    height: 140,
  },
  button: {
    textTransform: 'none',
  },
}));

const ProductsItem = ({ onClick, selected, contentfulProduct }) => {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.card, selected && classes.selected)}
      variant="outlined"
    >
      <CardActionArea
        onClick={onClick}
        // component={LinkComponent}
        // to={`buy/${contentfulProduct.node.slug}`}
      >
        <CardMedia
          component="img"
          alt="Product"
          height="240"
          image={contentfulProduct.node.media[0].resolutions.src}
          title={contentfulProduct.node.title.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {contentfulProduct.node.title.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {
              contentfulProduct.node.shortOverview.content[0]
                .content[0].value
            }
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductsItem;
