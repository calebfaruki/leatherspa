import React from 'react'
import PropTypes from 'prop-types'
import { RepairCategoryTemplate } from '../../templates/repair-category'

const RepairCategoryPreview = ({ entry, widgetFor }) => (
  <RepairCategoryTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    title={entry.getIn(['data', 'title'])}
  />
)

RepairCategoryPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default RepairCategoryPreview
