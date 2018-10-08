import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from "gatsby";
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

import {
  Container,
  Jumbotron,
  Row,
  Col,
  Button
} from "reactstrap";

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <main>
      <section className="section section-introduction bg-beige z-15">
        <ul className="list-unstyled mb-0">
          <li>
            <Container className="text-center">
              <Row>
                <Col md="8" />
                <Col md="4">
                  <div className="jumbotron bg-transparent text-center text-white">
                    <h2>
                      New!
                      <br />
                      Expanded Service Coverage
                    </h2>
                    <p>
                      Hello Brooklyn and Queens! Now we pick-up and deliver
                      to parts of Brooklyn and Long Island City, Queens.
                    </p>
                    <Button color="primary">Learn More</Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </li>
        </ul>
      </section>
      <section className="section section-about bg-brown z-15">
        <Container>
          <Jumbotron className="bg-transparent text-center text-white">
            <h2 className="text-white text-uppercase">
              Story
            </h2>
            <p className="text-white">
              Leather Spa has been servicing the world’s most discerning clients seeking the finest repair and care needs for their
              leather accessories for more than 30 years. Centered in our rich European heritage, artisanal expertise, unparalleled
              attention to detail, and dedication to the finest materials available, Leather Spa provides the most superior repair
              experience. Our state-of-the-art repair facility, proudly headquartered in New York City, features the most advanced
              repair and care technology and our team of specialized artisans take pride in our exacting standards and unique level
              of craftsmanship. We transform the ordinary to extraordinary.
            </p>
          </Jumbotron>
        </Container>
      </section>
      <hr className="hr hr-brown z-14" />
      <section className="section py-5">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  {title}
                </h2>
                <PageContent className="content" content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
