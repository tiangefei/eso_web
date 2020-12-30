import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import get from "lodash/get"
import { Container, Row, Col } from "reactstrap"

import Layout from "../../components/_global/layout"
import Image from "../../components/_global/image"
import SEO from "../../components/_global/seo"

import PreviewPill from "../../components/investorSolutions/previewPill"
import EmailPill from "../../components/investorSolutions/emailPill"

import SoftFooterCta from "../../components/_global/softFooterCta"
import softFooterBg from "../../images/investorSolutions/investorSolutionsFooterCta_2.png"
import arrow from "../../images/icons/arrow-bent.svg"

import LibraryFeatured from "../../components/resources/libraryFeatured"

import etf_illus from "../../images/investorSolutions/etf_illus.png"
import as_illus from "../../images/investorSolutions/as_illus.png"
import ind_illus from "../../images/investorSolutions/ind_illus.png"
import ins_illus from "../../images/investorSolutions/ins_illus.png"
import etf_icon from "../../images/about/etf_icon.png"

class ETFPage extends React.Component {
    render() {
        const library = get(this, "props.data.allContentfulLibrary.edges")
        const featured = library.filter(i => i.node.featured === true)
        const heroImage = get(this, "props.data.file.childImageSharp.fluid")

        return (
            <Layout navTheme="dark">
                <SEO title="Our Solutions" description="We’re here to help make the most of your financial future by getting ahead of it." />
                <div id="investorSolutions">
                    <div className="hero">
                        <Img className="hero-img" fluid={heroImage} />
                        <div className="overlay" />
                        <div className="hero-title">
                            <div className="d-flex">
                                <h1 className="section">Exchange Traded Funds</h1>
                                <img src={arrow} alt="" className="arrow" />
                            </div>
                            {/* <div className="my-5">
                                <h2>
                                    We’re here to help make the most of your financial future by
                                    getting ahead of it.
                </h2>
                            </div> */}
                        </div>
                    </div>
                    <Container fluid className="px-0">
                        <PreviewPill
                            title={"WUGI"}
                            text={
                                "Esoterica NextG Economy ETF"
                            }
                            bgColor={"#fdfc71"}
                            textColor={"#000"}
                            link={"/our-solutions/exchange-traded-funds/wugi"}
                            img={etf_illus}
                            mobileImgWidth="75%"
                            cta="Learn More"
                        />
                        <PreviewPill
                            title={"ETF2"}
                            text={
                                "ETF2 is comming soon"
                            }
                            bgColor={"#fffff"}
                            textColor={"#000"}
                            link={"/our-solutions/exchange-traded-funds/wugi"}
                            img={as_illus}
                            mobileImgWidth="40%"
                            cta="Learn More"
                        />
                        <PreviewPill
                            title={"ETF3"}
                            text={
                                "ETF3 is comming soon"
                            }
                            bgColor={"#fdfc71"}
                            textColor={"#000"}
                            link={"/our-solutions/exchange-traded-funds/wugi"}
                            img={ind_illus}
                            mobileImgWidth="40%"
                            cta="Learn More"
                        />
                    </Container>
                    {/* <LibraryFeatured primary posts={featured} /> */}
                </div>
            </Layout>
        )
    }
}

export default ETFPage

export const ETFPageQuery = graphql`
  query ETFPageQuery {
    allContentfulLibrary(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          featured
          description {
            description
          }
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
    file(relativePath: { eq: "investorSolutions/institutionalInvestorsHero.png" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
