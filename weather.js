const request = require('request');
var key = require('./wkey');

getWeather = (lat, lng, callback) => {

  request({
    url: `https://api.darksky.net/forecast/${key.WKEY}/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if(!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      callback('Unable to fetch weather');
    }
  })
}

module.exports = { getWeather };