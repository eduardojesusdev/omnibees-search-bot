'use strict'

const BrowserService = require('../services/BrowserService')


class BrowserController {

  async getContentOfUrl(url){
    try {
      const browser = await BrowserService.getBrowser()
      const page = await browser.newPage()
      await page.goto(url)
      const html = await page.content();
      return html
    } catch (error) {
      return error
    }
  }
}

module.exports = new BrowserController()