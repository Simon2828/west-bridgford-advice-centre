import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image';

const Map = () => {
  const { staticMap } = useStaticQuery(graphql`
  query StaticMapQuery {
    staticMap {
        childFile {
            childImageSharp {
                fluid {
                    # or fixed
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
}
    `
  )
  return (
    <div>
      <Img fluid={staticMap.childFile.childImageSharp.fluid}>
      </Img>
    </div>
  )

}
export default Map