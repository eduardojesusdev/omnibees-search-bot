'use strict'

const BrowserService = require('../services/BrowserService')


class BrowserController {

  async goTo(url){
    try {
      const browser = BrowserService.getBrowser()
      browser.goTo(UrlResolver.getParsedUrl(process.env.CRAW_BASE_URL))
      return browser
    } catch (error) {
      return error
    }
  }
}

module.exports = new BrowserController()