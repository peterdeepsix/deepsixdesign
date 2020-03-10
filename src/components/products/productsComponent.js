import React, { useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Button from '@material-ui/core/Button';
import { ProductsContext } from './productsProvider';
import ProductThumbnail from './productThumbnail';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';

import LinkComponent from 'src/components/link/linkComponent';

const useStyles = makeStyles(theme => ({
  card: {
    marginBottom: theme.spacing(3),
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

const ProductsComponent = ({ data }) => {
  const { listProducts } = useContext(ProductsContext);
  const stripeProducts = listProducts();
  const contentfulProducts = data.allContentfulProduct.edges;

  const classes = useStyles();
  return (
    <>
      {contentfulProducts && (
        <Container maxWidth="sm">
          <Box mx="auto" my={5}>
            {contentfulProducts.map(contentfulProduct => (
              <Card className={classes.card} variant="outlined">
                <CardActionArea
                  component={LinkComponent}
                  to={`buy/${contentfulProduct.node.slug}`}
                >
                  <CardMedia
                    component="img"
                    alt="Product"
                    height="140"
                    image={
                      contentfulProduct.node.media[0].resolutions.src
                    }
                    title={contentfulProduct.node.title.title}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      {contentfulProduct.node.title.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {
                        contentfulProduct.node.shortOverview
                          .content[0].content[0].value
                      }
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Box>
        </Container>
      )}
    </>
  );
};

export default ProductsComponent;
