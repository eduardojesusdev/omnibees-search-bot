'use strict'

const Browser = require('./BrowserController')
const Url = require('./UrlController')
const Crawler = require('./CrawlerController')

class SearchController {
  async search(req, res){

    try {
      const {checkin, checkout} = await req.body

      const url = await Url.getUrl(checkin, checkout)
      const html = await Browser.getContentOfUrl(url)
      const scrap = await Crawler.getData(html)

      // console.log(scrap)

      return res
      .status(400)
      .send()

    } catch (error) {
      browser.closeBrowser()
      res
      .status(400)
      .send({
        error: error.message,
        message: "An error ocurred, try again"
      })
    }


  }

}

module.exports = new SearchController()