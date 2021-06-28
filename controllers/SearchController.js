'use strict'

const Browser = require('./BrowserController')
const Url = require('./UrlController')
const Crawler = require('./CrawlerController')
const validator = require('validator');

class SearchController {

  async search(req, res){

    const { checkin, checkout } = req.body

    if (!await validator.isDate(checkin)) {
      return res
      .status(400)
      .send({
        message: 'checkin invalid date'
      })
    }

    if (!await validator.isDate(checkout)) {
      return res
      .status(400)
      .send({
        message: 'checkout invalid date'
      })
    }

    console.log()

    try {
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
        error: error,
        message: "An error ocurred, try again"
      })
    }
  }

}

module.exports = new SearchController()