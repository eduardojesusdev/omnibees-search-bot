'use strict'
const cheerio = require('cheerio')

class CrawlerController {

  async getData(html){
    try {
      const $ = cheerio.load(html, { decodeEntities: false });

      let images, rooms = []

      $('body > div.bg-white.w-100 > section.section3.section-padding > div.container.contain-hotel.white-bg > div.modal.modal-more-images.fotorama-modal.show > div.modal-dialog.modal-lg.modal-dialog-centered.justify-content-center > div > div.custom_fotorama.custom_fotorama_mobile.text-center.fotorama.fotorama1624831916663 > div.fotorama__wrap.fotorama__wrap--css3.fotorama__wrap--fade.fotorama__wrap--toggle-arrows.fotorama__wrap--no-controls > div.fotorama__nav-wrap > div > div').each(function(i, elem) {
        $(this).each(function () {
          let html = cheerio.load($(this).html())
          let all_images = {
            url: html('div > img').attr('src')
          }
          images.push(all_images)
        })
      });


      $('#hotels_grid > div').each(function () {

        $(this).each(function () {
          let html = cheerio.load($(this).html())
          if(html(this).hasClass('d-none')){
            return
          }
          let info_room = {
            name: html('div.desciption.position-relative > span > p').text().trim().replace(/\n/g,'').replace(/(<([^>]+)>)/gi, '').replace(/\s+|&nbsp;/g," "),
            image: html('img.image-step2').attr('src'),
            max_persons: html('span.plural').first().text().trim().replace(/\n/g,'').replace(/(<([^>]+)>)/gi, '').replace(/\s+|&nbsp;/g," "),
            description: html('p.description.hotel-description').text().trim().replace(/\n/g,'').replace(/(<([^>]+)>)/gi, '').replace(/\s+|&nbsp;/g," ").replace(' (ver mais)',''),
            price_for: html('p.price-for').first().text().trim().replace(/\n/g,'').replace(/(<([^>]+)>)/gi, '').replace(/\s+|&nbsp;/g," "),
            price: html('p.price-total').first().text().trim().replace(/\n/g,'').replace(/(<([^>]+)>)/gi, '').replace(/\s+|&nbsp;/g," ")
          }
          rooms.push(info_room)
        })

      })
      console.log(images)

      return data
    } catch (error) {
      return error
    }
  }
}

module.exports = new CrawlerController()