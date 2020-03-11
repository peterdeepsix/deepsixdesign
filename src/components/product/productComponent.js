import React, { useContext, useState, useEffect } from 'react';
import { navigate } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Avatar from '@material-ui/core/Avatar';

import {
  CarouselProvider,
  Slider,
  Slide,
  ImageWithZoom,
  Dot,
  Image,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import { ProductsContext } from 'src/components/products/productsProvider';
import { CartContext } from 'src/components/cart/cartProvider';
import ProductBreadCrumbs from './productBreadCrumbs';

const useStyles = makeStyles(({ theme }) => ({
  img: {
    maxWidth: `100%`,
  },
  dot: {
    padding: 0,
    border: 0,
    width: 40,
  },
  slide: {
    borderRadius: 2,
    border: 0,
  },
  button: {
    color: '#fff',
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    overflow: 'hidden',
    // backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  gridListTile: {},
}));

const ProductComponent = ({ productId, data }) => {
  const { products } = useContext(ProductsContext);
  const { add, toggle } = useContext(CartContext);
  const classes = useStyles();
  const [product, setProduct] = useState(null);

  const contentfulProduct = data.contentfulProduct;
  console.log(contentfulProduct);
  useEffect(() => {
    if (products) {
      setProduct(products[productId]);
    }
  }, [products]);

  const handleClick = () => {
    add(contentfulProduct.stripeSku);
    toggle(true);
    navigate('/cart');
  };

  return (
    <>
      {contentfulProduct && (
        <Container maxWidth="sm">
          <Box mx="auto" mt={2} mb={2}>
            <ProductBreadCrumbs
              productName={contentfulProduct.title.title}
              productSlug={contentfulProduct.slug}
            />
          </Box>
          <Box mt={1}>
            <CarouselProvider
              visibleSlides={1}
              totalSlides={contentfulProduct.media.length}
              step={1}
              naturalSlideHeight={300}
              naturalSlideWidth={300}
              hasMasterSpinner
              lockOnWindowScroll
            >
              <Box>
                <Slider>
                  {contentfulProduct.media.map((mediaItem, index) => (
                    <Slide className={classes.slide} index={index}>
                      <ImageWithZoom src={mediaItem.fixed.src} />
                    </Slide>
                  ))}
                </Slider>
              </Box>

              <Box mt={2}>
                <div className={classes.root}>
                  <GridList
                    className={classes.gridList}
                    cols={contentfulProduct.media.length}
                    cellHeight={40}
                    spacing={16}
                  >
                    {contentfulProduct.media.map(
                      (mediaItem, index) => (
                        <GridListTile
                          className={classes.gridListTile}
                          key={index}
                        >
                          <Dot className={classes.dot} slide={index}>
                            <Avatar
                              variant="rounded"
                              alt="Media Fluid"
                              src={mediaItem.fluid.src}
                            />
                          </Dot>
                        </GridListTile>
                      ),
                    )}
                  </GridList>
                </div>
              </Box>
            </CarouselProvider>
          </Box>
          <Box mt={3}>
            <Typography variant="h4">
              {contentfulProduct.title.title}
            </Typography>
          </Box>
          <Box mt={1}>
            <Typography variant="h6">
              ${contentfulProduct.stripePrice}
            </Typography>
          </Box>
          <Box mt={3}>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={handleClick}
            >
              Add To Cart
            </Button>
          </Box>
          <Box mt={3}>
            <Typography variant="body1">
              {
                contentfulProduct.description.content[0].content[0]
                  .value
              }
            </Typography>
          </Box>
          <Box mt={3}>
            <Typography variant="body1">
              {contentfulProduct.overview.content[0].content[0].value}
            </Typography>
          </Box>
        </Container>
      )}
    </>
  );
};

export default ProductComponent;
