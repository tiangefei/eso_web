import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { connect } from "react-redux"
import Img from "gatsby-image"
import get from "lodash/get"
import { Container, Row, Col } from "reactstrap"

const LibraryThumbnails = ({ mobile, related = false, recent = false }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulLibrary {
        nodes {
          slug
          title
          publishDate
          tags
          heroImage {
            fixed(width: 250) {
              ...GatsbyContentfulFixed
            }
            fluid(resizingBehavior: SCALE) {
              src
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  `)

  let { nodes } = data.allContentfulLibrary
  let posts = nodes

  if (related && related.tags) {
    posts = posts.filter(i => {
      let { tags } = i
      if (tags) {
        for (let i = 0; i < tags.length; i++) {
          for (let j = 0; j < related.tags.length; j++) {
            if (tags[i] === related.tags[j]) {
              return true
            }
          }
        }
        return false
      }
    })
  }

  let display = posts.slice(0, 6).map((i, idx) => {
    let border_bottom = idx < 3 ? true : false
    let border_right = true
    if (idx === 5 || idx === 2) {
      border_right = false
    }

    mobile ? (border_right = false) : (border_right = border_right)
    mobile ? (border_bottom = true) : (border_right = border_right)

    return (
      <Col
        xs="12"
        md="4"
        key={idx}
        className={
          idx + " thumbnail " + (border_bottom ? " bottom-border " : "")
        }
      >
        <div className="wrapper">
          <Link to={"/resources/library/" + i.slug}>
            <div
              className="container-image"
              style={{
                backgroundImage: `url(${i.heroImage.fluid.src})`,
              }}
            />
          </Link>
        </div>

        <div
          className={"text-container " + (border_right ? " right-border " : "")}
        >
          <Link to={"/resources/library/" + i.slug}>
            <div className="tag-container">
              {i.tags
                ? i.tags.slice(0, 1).map((i, idx) => {
                    return (
                      <div key={idx} className="tag body-small">
                        {i}
                      </div>
                    )
                  })
                : ""}
            </div>
          </Link>
          <Link to={"/resources/library/" + i.slug}>
            <span className="thumbnail-title">{i.title}</span>
          </Link>
        </div>
      </Col>
    )
  })
  return (
    <Container fluid id="libraryThumbnails">
      <Row>{display}</Row>
    </Container>
  )
}

export default connect(
  state => ({
    mobile: state.global.mobile,
  }),
  null
)(LibraryThumbnails)
