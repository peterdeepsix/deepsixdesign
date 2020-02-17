import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CreditCard from '@material-ui/icons/CreditCard';
import Close from '@material-ui/icons/Close';
import {
  Root,
  Header,
  Content,
  Footer,
  InsetSidebar,
  InsetContainer,
  ConfigGenerator,
} from '@mui-treasury/layout';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import dailyShoppingTheme from 'src/components/cart/components/dailyShoppingTheme';
import StripeCheckout from 'src/components/cart/stripeCheckout';
import DailySummary from 'src/components/cart/components/DailySummary';
import Cart from './cart';

import StripeCheckOutSplit from 'src/components/cart/stripeCheckOutSplit';
import StripeProvider from './stripeProvider';

const useStyles = makeStyles(({ breakpoints }) => ({
  header: {
    backgroundColor: '#ffffff',
  },
  toolbar: {},
  sidebarBody: {
    padding: '24px 0 40px 24px',
  },
  sidebarPaper: {
    maxWidth: 400,
    padding: 16,
    background: 'none',
    boxShadow: 'none',
  },
  container: {
    minHeight: 0,
    display: 'flex',
  },
  content: {
    overflow: 'auto',
  },
  footer: {
    padding: '16px 0',
    border: 'unset',
    position: 'relative',
    '&:before': {
      content: '" "',
      position: 'absolute',
      width: '100%',
      height: 24,
      top: 0,
      left: 0,
      transform: 'translateY(-100%)',
      background:
        'linear-gradient(to top, #ffffff, rgba(255,255,255,0))',
    },
    [breakpoints.only('sm')]: {
      paddingRight: 64,
    },
    [breakpoints.up('md')]: {
      paddingBottom: 40,
    },
  },
  fab: {
    textTransform: 'none',
    position: 'fixed',
    bottom: 80,
    right: 32,
    zIndex: 1500,
    transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
    [breakpoints.up('sm')]: {
      bottom: 40,
    },
    [breakpoints.up('md')]: {
      transform: 'scale(0)',
    },
  },
  fabClose: {
    top: 8,
    right: 8,
    width: 48,
    height: 48,
  },
  button: {
    margin: 8,
  },
}));

const config = ConfigGenerator({ addOnsIncluded: true });
config.header.setPosition('relative');
config.setPrimarySidebarToInset();
config.primarySidebar.setAnchor('right');
config.primarySidebar.setWidth('33%');
config.primarySidebar.setInsetProps({
  position: 'absolute',
  drawerWidth: '88%',
  drawerAnchor: 'right',
});
config.secondarySidebar.setAnchor('left');

const HomeComponent = () => {
  const [open, setOpen] = React.useState(false);
  const styles = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <StripeProvider>
      <Box
        height={'100vh'}
        display={'flex'}
        flexDirection={'column'}
        overflow={'hidden'}
      >
        <Root theme={dailyShoppingTheme} config={config.get()}>
          {({ opened, setOpened }) => (
            <>
              <CssBaseline />
              {opened ? null : (
                <Button
                  variant="outlined"
                  size="large"
                  className={cx(
                    styles.fab,
                    opened && styles.fabClose,
                  )}
                  color={'primary'}
                  onClick={() => setOpened(!opened)}
                  startIcon={opened ? <Close /> : <CreditCard />}
                >
                  Checkout
                </Button>
              )}

              <Container className={styles.container}>
                <InsetContainer>
                  <Content className={styles.content}>
                    <Cart />
                  </Content>
                  <InsetSidebar>
                    <Box p={3}>
                      <StripeCheckOutSplit />
                    </Box>
                  </InsetSidebar>
                </InsetContainer>
              </Container>
              <Container>
                <Footer className={styles.footer}>
                  <DailySummary />
                </Footer>
              </Container>
            </>
          )}
        </Root>
      </Box>
    </StripeProvider>
  );
};

export default HomeComponent;
