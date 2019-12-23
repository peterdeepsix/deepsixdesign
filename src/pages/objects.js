import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import Paper from '@material-ui/core/Paper';

import Loadable from "@loadable/component"

const LoadablePredictObjects = Loadable(() =>
    import("../components/predictObjects")
)

const Objects = () => (
    <Layout>
        <SEO title="Objects" />
            <Container maxWidth="md">
            <Box my={4}>
                <Typography
                    variant="h4"
                    component="h4"
                    gutterBottom
                    align="center"
                >
                    Infrimation Mahcine
                </Typography>
            </Box>
            <Box my={4}>
                <Paper>
                    <LoadablePredictObjects />
                </Paper>
            </Box>
        </Container>
    </Layout>
)

export default Objects
