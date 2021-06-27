'use strict'
const cheerio = require('cheerio')

class CrawlerController {

  async craw(html){
    try {
      const scrap = cheerio.load(html)

      // [
      //   {
      //     "name": "Standard Room",
      //     "description": "Ideal for relaxing. The rooms...",
      //     "price": "R$ 715,00",
      //     "image": "https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?sz=250x166&imageID=189952.jpg",
      //     },
      //     {
      //       "name": "Master",
      //       "description": "There are 6 luxurious rooms...",
      //       "price": "R$ 1.115,30",
      //       "image": "https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?sz=250x166&imageID=192355.jpg"
      //   }
      // ]
      return scrap
    } catch (error) {
      return error
    }
  }
}

module.exports = new CrawlerController()