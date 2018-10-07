import React from 'react'
import PropTypes from 'prop-types'
import { BusinessLocationTemplate } from '../../templates/business-location'

const BusinessLocationPreview = ({ entry, widgetFor }) => (
  <BusinessLocationTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    title={entry.getIn(['data', 'title'])}
  />
)

BusinessLocationPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BusinessLocationPreview
