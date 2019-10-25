//asyncBreeds.js
const fs = require('fs');
const breedDetailsFromFile = function(breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {

    if (error) {
      console.log(error);
      callback(error);
    } else {
      console.log('Callback: I have the data!');
      callback(null, data);
    // ISSUE: Returning from inner callback function, not our main function.
    }
  });

// ISSUE: Attempting to return data out here will also not work.
// Currently not returning anything from here, so this function returns undefined.
};
breedDetailsFromFile('something', (something) => {
  console.log(something);
});

module.exports = breedDetailsFromFile;