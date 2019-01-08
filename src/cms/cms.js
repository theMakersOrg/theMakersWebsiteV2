import CMS from 'netlify-cms'

import BlogPostPreview from './preview-templates/BlogPostPreview'
import LandingPagePreview from './preview-templates/LandingPagePreview'

CMS.registerPreviewTemplate('landing', LandingPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
