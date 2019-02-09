module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'theMakers.org - Smart Community, shared resources', // Navigation and Site Title
  titleAlt: 'theMakers', // Title for JSONLD
  description:
    'TheMakers.org is a Not-For-Profit Maker Space Located in Cairns, QLD, that strives to give the community access to cutting edge technology, resources and know-how.',
  headline: 'Makerspace, hackerspace, your space', // Headline for schema.org JSONLD
  url: 'https://themakers.org', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  logo: '/img/og-image1.png', // Used for SEO
  ogLanguage: 'en_US', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/favicon-32x32.png', // Used for manifest favicon generation
  shortName: 'theMakers', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Kurt Schoenhoff', // Author for schemaORGJSONLD
  themeColor: '#21abe3',
  backgroundColor: '#ed1c24',

  facebook: 'themakers.org' // Facebook Site Name
}
