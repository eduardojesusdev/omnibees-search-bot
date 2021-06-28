'use strict'

const BrowserService = require('../services/BrowserService')


class BrowserController {

  async getContentOfUrl(url){
    try {
      const browser = await BrowserService.getBrowser()
      const page = await browser.newPage()
      await page.goto(url)
      const html = await page.content();
      await BrowserService.closeBrowser(browser)

      return html
    } catch (error) {
      return error
    }
  }

  static closeBrowser(){
    BrowserService.closeBrowser()
  }
}

module.exports = new BrowserController()