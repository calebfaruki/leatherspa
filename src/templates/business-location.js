import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

import {
  Container
} from 'reactstrap'

export const BusinessLocationTemplate = ({
  content,
  contentComponent,
  description,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <Container>
        <h1>
          {title}
        </h1>
        <p>{description}</p>
        <PostContent content={content} />
      </Container>
    </section>
  )
}

BusinessLocationTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
}

const BusinessLocation = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BusinessLocationTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={<Helmet title={`${post.frontmatter.title} | Business Location`} />}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

BusinessLocation.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BusinessLocation

export const pageQuery = graphql`
  query BusinessLocationByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`
