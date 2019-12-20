/* eslint-disable import/prefer-default-export, react/prop-types */
import React from "react"
import TopLayout from "./plugins/gatsby-plugin-top-layout/TopLayout"

export const wrapRootElement = ({ element }) => {
  return <TopLayout>{element}</TopLayout>
}
