const functions = require("firebase-functions");
const { geocodeRequest } = require("./geocode");
const { placesRequest } = require("./places");
// const { payRequest } = require("./pay");
const url = require("url");
// const { locations: locationsMock } = require("../functions/geocode/geocode.mock");


const { Client } = require("@googlemaps/google-maps-services-js");
// const stripeClient = require("stripe")(functions.config().stripe.key);
const googleClient = new Client({});

exports.geocode = functions.https.onRequest((request, response) => {
  geocodeRequest(request, response, googleClient);
  // response.send("GEocode request");
  // const { city } = url.parse(request.url, true).query;
  //   const locationMock = locationsMock[city.toLowerCase()];
  //   return response.send(JSON.stringify(city));
    // response.json(locationMock);
  
});

exports.placesNearby = functions.https.onRequest((request, response) => {
  placesRequest(request, response, googleClient);
  // const { location } = url.parse(request.url, true).query;
  // response.json(location);
});

// exports.pay = functions.https.onRequest((request, response) => {
//   payRequest(request, response, stripeClient);
// });
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true });
  response.send("Helloe from meeeee");
});
