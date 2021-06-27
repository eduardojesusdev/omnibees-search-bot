'use strict'


const UrlResolver = require('../services/UrlResolver')

class UrlController {

  async getUrl(checkin, checkout){
    try {
      const url = await UrlResolver.getParsedUrl(checkin, checkout)
      return url
    } catch (error) {
      return error.message
    }
  }
}

module.exports = new UrlController()
