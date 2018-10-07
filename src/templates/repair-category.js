import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

import {
  Container
} from 'reactstrap'

export const RepairCategoryTemplate = ({
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

RepairCategoryTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
}

const RepairCategory = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <RepairCategoryTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={<Helmet title={`${post.frontmatter.title} | Repair Category`} />}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

RepairCategory.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default RepairCategory

export const pageQuery = graphql`
  query RepairCategoryByID($id: String!) {
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
