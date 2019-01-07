import CMS from 'netlify-cms'

import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'

CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
