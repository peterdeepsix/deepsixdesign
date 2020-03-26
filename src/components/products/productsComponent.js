import React, { useRef } from 'react';

import Loadable from '@loadable/component';
import IndefiniteLoading from 'src/components/loading/indefiniteLoading';

import {
  SnapList,
  SnapItem,
  useVisibleElements,
  useScroll,
} from 'react-snaplist-carousel';

import { makeStyles } from '@material-ui/core/styles';
import { Container, Box } from '@material-ui/core';

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

const ProductsItem = Loadable(() => import('./ProductsItem'), {
  fallback: <IndefiniteLoading message="ProductsItem" />,
});

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(3),
  },
}));

const ProductsComponent = ({ data }) => {
  const classes = useStyles();

  const contentfulProducts = data.allContentfulProduct.edges;

  const snapList = useRef(null);

  const selected = useVisibleElements(
    { debounce: 10, ref: snapList },
    ([element]) => element,
  );

  const goTo = useScroll({ ref: snapList });

  return (
    <>
      {contentfulProducts && (
        <Container maxWidth="sm">
          <Box mx="auto" mt={2} mb={2}>
            <ProductsBreadCrumbs />
          </Box>
          <Box mt={1} mb={10}>
            <SnapList ref={snapList} direction="vertical">
              {contentfulProducts.map((contentfulProduct, index) => (
                <SnapItem key={index} snapAlign="center">
                  <ProductsItem
                    onClick={() => goTo(index)}
                    selected={selected === index}
                    contentfulProduct={contentfulProduct}
                  />
                </SnapItem>
              ))}
            </SnapList>
          </Box>
        </Container>
      )}
    </>
  );
};

export default ProductsComponent;
