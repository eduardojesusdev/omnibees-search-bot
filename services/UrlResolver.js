'use strict'

const queryString = require('query-string')

class UrlResolver {
  async getParsedUrl(checkin, checkout){
    try {
      const urlParsed = await queryString.parseUrl(process.env.CRAW_BASE_URL,{
        parseFragmentIdentifier: true
      })

      const urlEncoded = await queryString.stringifyUrl({
        url: urlParsed.url,
        query: {
          CheckIn: checkin,
          CheckOut: checkout,
          Code: 'AMIGODODANIEL',
          NRooms: '1',
          _askSI: 'd34b1c89-78d2-45f3-81ac-4af2c3edb220',
          ad: '2',
          ag: '-',
          c: '2983',
          ch: '0',
          diff: 'false',
          group_code: '',
          lang: 'pt-BR',
          loyality_card: '',
          q: '5462',
          utm_source: 'asksuite'
        },
        fragmentIdentifier: 'show-more-hotel-button'
      });

      return urlEncoded

    } catch (error) {
      return error.message
    }
  }
}

module.exports = new UrlResolver()