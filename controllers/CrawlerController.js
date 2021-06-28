'use strict'
const cheerio = require('cheerio')

class CrawlerController {

  async getData(html){
    try {
      const $ = cheerio.load(html, { decodeEntities: true });

      let data = []

      $('#hotels_grid > div').each(function () {

        $(this).each(function () {
          let html = cheerio.load($(this).html())
          if(html(this).hasClass('d-none')) return

          let info_room = {
            name: html('div.desciption.position-relative > span > p').text().trim().replace(/\n/g,'').replace(/(<([^>]+)>)/gi, '').replace(/\s+|&nbsp;/g," "),
            image: html('img.image-step2').attr('src'),
            max_persons: html('span.plural').first().text().trim().replace(/\n/g,'').replace(/(<([^>]+)>)/gi, '').replace(/\s+|&nbsp;/g," ").replace('x',''),
            description: html('p.description.hotel-description').text().trim().replace(/\n/g,'').replace(/(<([^>]+)>)/gi, '').replace(/\s+|&nbsp;/g," ").replace(' (ver mais)',''),
            price_for: html('p.price-for').first().text().trim().replace(/\n/g,'').replace(/(<([^>]+)>)/gi, '').replace(/\s+|&nbsp;/g," "),
            price: html('p.price-total').first().text().trim().replace(/\n/g,'').replace(/(<([^>]+)>)/gi, '').replace(/\s+|&nbsp;/g," ")
          }
          data.push(info_room)
        })
      })

      return data
    } catch (error) {
      return error
    }
  }
}

module.exports = new CrawlerController()