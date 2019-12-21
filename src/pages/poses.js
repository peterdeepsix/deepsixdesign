import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Loadable from "@loadable/component"
const LoadablePredictPoses = Loadable(() =>
    import("../components/predictPoses")
)

const Poses = () => (
    <Layout>
        <SEO title="Poses" />
        <LoadablePredictPoses />
    </Layout>
)

export default Poses
