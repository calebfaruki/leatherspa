import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import RepairCategoryPreview from './preview-templates/RepairCategoryPreview'
import BusinessLocationPreview from './preview-templates/BusinessLocationPreview'

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('repair-categories', RepairCategoryPreview)
CMS.registerPreviewTemplate('business-locations', BusinessLocationPreview)
