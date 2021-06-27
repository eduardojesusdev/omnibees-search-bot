'use strict'

const parseUrl = require('parse-url')

class UrlResolver {
  async getParsedUrl(url){
    try {
      const url = await parseUrl(process.env.CRAW_BASE_URL)
      return url
    } catch (error) {
      return error
    }
  }
}

module.exports = new UrlResolver()