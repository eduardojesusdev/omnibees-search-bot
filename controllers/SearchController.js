'use strict'

const browser = require('./BrowserController')
const url = require('./UrlController')
const craw = require('./CrawlerController')

class SearchController {
  async search(req, res){

    try {
      const {checkin, checkout} = req.data()

      const launch = browser.goTo(url.)


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