'use strict'

const browser = require('./BrowserController')
const Url = require('./UrlController')
const craw = require('./CrawlerController')

class SearchController {
  async search(req, res){

    try {
      const {checkin, checkout} = await req.body


      const url = await Url.getUrl(checkin, checkout)

      const html = await browser.getContentOfUrl(url)

      console.log(html)

      const scrap = craw.getData(html)


      return res
      .status(400)
      .send()

      


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