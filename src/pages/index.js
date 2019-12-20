import React from "react"

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Deep Six Design" />
    <Container maxWidth="sm">
    <Box my={4}>
      <Typography variant="h4" component="h4" gutterBottom align="center">Holy Frigsmas</Typography>
      <Typography variant="body2" color="textSecondary" align="center">Yip Yip, Yehaw!</Typography>
      </Box>
      <Box my={4}>
        <Image />
      </Box>
    </Container>
  </Layout>
)

export default IndexPage
