'use strict'


const UrlResolver = require('../services/UrlResolver')

class UrlController {

  async getUrl(){
    try {
      const url = await UrlResolver.getParsedUrl()
      return url
    } catch (error) {
      return error
    }
  }
}

module.exports = new UrlController()
