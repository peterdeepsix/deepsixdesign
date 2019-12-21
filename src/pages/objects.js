import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Loadable from "@loadable/component"
const LoadablePredictObjects = Loadable(() =>
    import("../components/predictObjects")
)

const Objects = () => (
    <Layout>
        <SEO title="Objects" />
        <LoadablePredictObjects />
    </Layout>
)

export default Objects
