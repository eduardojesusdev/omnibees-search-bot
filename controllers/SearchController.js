'use strict'

const browser = require('./BrowserController')
const Url = require('./UrlController')
const craw = require('./CrawlerController')

class SearchController {
  async search(req, res){

    try {
      const {checkin, checkout} = await req.body


      const url = await Url.getUrl(checkin, checkout)

      // console.log(url)


      return res
      .status(400)
      .send()

      const launch = browser.goTo()


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