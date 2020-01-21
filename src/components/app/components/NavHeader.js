import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import FirebaseObject from './firebaseObject';

const NavHeaderEx = ({ collapsed }) => (
  <>
    <div style={{ padding: collapsed ? 8 : 16, transition: '0.3s' }}>
      <Box my={1}>
        <Avatar
          style={{
            width: collapsed ? 48 : 60,
            height: collapsed ? 48 : 60,
            transition: '0.3s',
          }}
        />
      </Box>
      <div style={{ paddingBottom: 16 }} />
      <Typography variant="subtitle2" noWrap>
        Anonymous User
      </Typography>
      <FirebaseObject />
    </div>
    <Divider />
  </>
);

export default NavHeaderEx;
