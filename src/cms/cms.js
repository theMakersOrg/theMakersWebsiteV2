import CMS from 'netlify-cms'

import BlogPostPreview from './preview-templates/BlogPostPreview'
import LandingPagePreview from './preview-templates/LandingPagePreview'

CMS.registerPreviewTemplate('landingts', LandingPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
