const apiKey = process.env.REACT_APP_GOOGLE_API_KEY; // Insert API key here.


// Get Places info
const Places = {
  search(term) {
    return fetch(`https://cors.bridged.cc/https://maps.googleapis.com/maps/api/place/textsearch/json?query=${term}&location=37.7590826,-122.4457663&radius=12000&type=restaurant&key=${apiKey}`)
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => {
        if (jsonResponse.results) {
          // map results
          // will be used as state in Lunch component
          return jsonResponse.results.map(business => ({
            id: business.place_id,
            imageSrc: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${business.photos[0].photo_reference}&key=${apiKey}` ,
            name: business.name,
            rating: business.rating,
            reviewCount: business.user_ratings_total,
            priceLevel: business.price_level,
            lunchLocation: business.geometry.location
          }));
        }
      });
    }
};

export default Places;
