import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from "gatsby";
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

import {
  Container,
  Row,
  Col
} from "reactstrap";

export const LegalPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <main>
      <section className="section section-legal bg-beige py-5">
        <Container>
          <Row>
            <Col lg={{ size: 10, offset: 1 }}>
              <h1 className="text-center mb-5">{title}</h1>
              <PageContent className="content" content={content} />
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  )
}

LegalPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const LegalPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <LegalPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

LegalPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default LegalPage

export const LegalPageQuery = graphql`
  query LegalPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
