module.exports = {
  siteUrl: 'https://himateja.com',
  generateRobotsTxt: true,
  exclude: ['/v-1', '/v-1/*', '/v1', '/v1/*', '/v2', '/v2-5', '/v2-5/*', '/v2b', '/v3', '/v3/*'],
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
}
