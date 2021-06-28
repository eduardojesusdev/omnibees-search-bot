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

      return res
      .status(200)
      .send({
        url: url,
        rooms: scrap
      })

    } catch (error) {
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