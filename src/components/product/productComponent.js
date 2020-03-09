import React, { useContext, useState, useEffect } from 'react';
import { navigate } from 'gatsby';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonFirst,
  ButtonLast,
  ButtonNext,
  ImageWithZoom,
  DotGroup,
  Image,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import { ProductsContext } from 'src/components/products/productsProvider';
import { CartContext } from 'src/components/cart/cartProvider';

const useStyles = makeStyles({
  img: {
    maxWidth: `100%`,
  },
});

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
          <Box>
            <CarouselProvider
              totalSlides={contentfulProduct.media.length}
              naturalSlideWidth={400}
              naturalSlideHeight={500}
              hasMasterSpinner
              infinite
              lockOnWindowScroll
            >
              <Slider>
                {contentfulProduct.media.map((mediaItem, index) => (
                  <Slide index={index}>
                    <ImageWithZoom src={mediaItem.fixed.src} />
                  </Slide>
                ))}
              </Slider>
              <ButtonGroup
                color="primary"
                aria-label="outlined primary button group"
              >
                <ButtonFirst>
                  <Button>First</Button>
                </ButtonFirst>
                <ButtonBack>
                  <Button>Back</Button>
                </ButtonBack>
                <ButtonNext>
                  <Button>Next</Button>
                </ButtonNext>
                <ButtonLast>
                  <Button>Last</Button>
                </ButtonLast>
              </ButtonGroup>
              <DotGroup dotNumbers />
            </CarouselProvider>
          </Box>

          <br />
          <Box>
            <Typography variant="h4">
              {contentfulProduct.title.title}
            </Typography>
            <br />
            <Typography variant="subtitle1">
              ${contentfulProduct.stripePrice}
            </Typography>
          </Box>
          <br />
          <Box>
            <Button
              variant="contained"
              onClick={handleClick}
              color="inherit"
            >
              Add To Cart
            </Button>
          </Box>
          <br />
          <Box>
            <Typography variant="h6">
              {
                contentfulProduct.description.content[0].content[0]
                  .value
              }
            </Typography>
          </Box>
          <br />
          <Box>
            <Typography variant="h6">
              {contentfulProduct.overview.content[0].content[0].value}
            </Typography>
          </Box>
          <br />
        </Container>
      )}
    </>
  );
};

export default ProductComponent;
