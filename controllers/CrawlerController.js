'use strict'
const cheerio = require('cheerio')

class CrawlerController {

  async getData(html){
    try {
      const $ = cheerio.load(html, { decodeEntities: false });

      let data = {
        images: '[]',
        rooms: '[]'
      }

      // //all images
      // $('body > div.bg-white.w-100 > section.section3.section-padding > div.container.contain-hotel.white-bg > div.modal.modal-more-images.fotorama-modal.show > div.modal-dialog.modal-lg.modal-dialog-centered.justify-content-center > div > div.custom_fotorama.custom_fotorama_mobile.text-center.fotorama.fotorama1624831916663 > div.fotorama__wrap.fotorama__wrap--css3.fotorama__wrap--fade.fotorama__wrap--toggle-arrows.fotorama__wrap--no-controls > div.fotorama__nav-wrap > div > div').each(function(i, elem) {
      //   // data.images = ;
      //   // console.log(elem)
      // });

      //all rooms
      $('#hotels_grid').each(function(i, elem) {
        rooms = {
          max_persons: $('span.plural').text(),
          image: $('div.flex-view-step2 > div.t-tip__next > div > img.image-step2').src(),
          name: $('div.flex-view-step2 > div.desciption.position-relative > span > p').text(),
          description: $('p.description.hotel-description').text(),
          price_for: $('p.price-for').text(),
          price: $('p.price-total').text()
        }
        console.log(rooms)
        // data.rooms = rooms
      });

      return scrap
    } catch (error) {
      return error
    }
  }
}

module.exports = new CrawlerController()