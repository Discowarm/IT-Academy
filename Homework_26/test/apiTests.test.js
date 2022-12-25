const axios = require('axios');
const VacCovid = require('../testData/VacCovid.v1.json');
const BoundariesIoApi = require('../testData/boundariesIoApi.v1.json');
const Validator = require('jsonschema').Validator;
const validator = new Validator();
// const { sendHttpRequest } = require('../sendHttpRequest');

describe('api testing GET', function () {
  test('check status code', async () => {
    const response = await axios.get('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/covid-ovid-data/sixmonth/USA',{
      params: {
        interval: '5min',
        function: 'TIME_SERIES_INTRADAY',
        symbol: 'MSFT',
        datatype: 'json',
        output_size: 'compact'
      },
      headers: {
        'X-RapidAPI-Key': '07b1978e5dmsh84c12fbdee6636fp134d24jsn5cacd418d049',
        'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
      }
    })
    expect(response.status).toEqual(200);
  });

  test('check response body', async () => {
    const response = await axios.get('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/covid-ovid-data/sixmonth/USA',{
      params: {
        interval: '5min',
        function: 'TIME_SERIES_INTRADAY',
        symbol: 'MSFT',
        datatype: 'json',
        output_size: 'compact'
      },
      headers: {
        'X-RapidAPI-Key': '07b1978e5dmsh84c12fbdee6636fp134d24jsn5cacd418d049',
        'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
      }
    })
    
    const result = await validator.validate(response.data, VacCovid)
    expect(result.valid).toEqual(true)
  })
});



describe('api testing POST', function () {
  test('check status code boundaries-io', async () => {
    const response = await axios({
      method: 'POST',
      url: 'https://vanitysoft-boundaries-io-v1.p.rapidapi.com/reaperfire/rest/v1/public/boundary/zipcode/wkt',
      headers: {
        'content-type': 'text/plain',
        'X-RapidAPI-Key': '07b1978e5dmsh84c12fbdee6636fp134d24jsn5cacd418d049',
        'X-RapidAPI-Host': 'vanitysoft-boundaries-io-v1.p.rapidapi.com'
      },
      data: {
        "content": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        "response_type": "html",
        "request_type": "html",
        "fixation": "1",
        "saccade": "10"
      }
    })
    expect(response.status).toEqual(200);
});

  test('check response body boundaries-io', async () => {
    const response = await axios({
      method: 'POST',
      url: 'https://vanitysoft-boundaries-io-v1.p.rapidapi.com/reaperfire/rest/v1/public/boundary/zipcode/wkt',
      headers: {
        'content-type': 'text/plain',
        'X-RapidAPI-Key': '07b1978e5dmsh84c12fbdee6636fp134d24jsn5cacd418d049',
        'X-RapidAPI-Host': 'vanitysoft-boundaries-io-v1.p.rapidapi.com'
      },
      data: {
        "content": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        "response_type": "html",
        "request_type": "html",
        "fixation": "1",
        "saccade": "10"
      }
    })
    const result = await validator.validate(response.data, BoundariesIoApi )
    expect(result.valid).toEqual(true)
  });
});







    






       