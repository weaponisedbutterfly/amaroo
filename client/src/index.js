var sampleData = require('./sample');
var BookingOptions = require('./booking/BookingOptions');

window.onload = function(){
  console.log('loaded app');
  var booking = new BookingOptions();

  booking.populateFlights(sampleData);
  booking.populateHotels(sampleData);

  var date = "28-03-2016";
  
  var matchingFlights = booking.matchingFlights(date);
  var matchingHotels = booking.matchingHotels("Canberra");

  // booking.displayFlights(booking.flights);
  // booking.displayHotels(booking.hotels);

  booking.displayFlights(matchingFlights);
  booking.displayHotels(matchingHotels);

  var button = document.getElementById('searchButton');

  button.onclick = function(){
    console.log("I was clicked and I liked it");
    var leaveFromInput = document.getElementById('leavingFrom');
    var goingToInput = document.getElementById('goingTo');
    var departureDate = document.getElementById('departureDate');

    // console.log(leaveFromInput.value);
    // console.log(goingToInput.value);
    // console.log(departureDate.value);

    var searchInputReturns = {
      homeCity: leavingFrom.value,
      destinationCity: goingToInput.value,
      outboundDate: departureDate.value
    }
    
    console.log(searchInputReturns);

  }

};
