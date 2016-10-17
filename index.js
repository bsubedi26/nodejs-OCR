const Tesseract = require('tesseract.js')
const fs = require('fs');

// server if needed
const app = require('express')()

// main function
function recognize(img) {
    // Tesseract module for converting image to text
    Tesseract.recognize(img)
      .progress(message => console.log(message))
        .catch(err => console.error(err))
          .then(result => { 
            console.log(result.text)
                ImagetoText(result.text)
            })
            .finally(resultOrError => {
                console.log(resultOrError)
            })
}

// Save result to a text file
function ImagetoText(result) {
    fs.appendFile('result.txt', result, 'utf8', (err) => {
        if (err) throw err;
        console.log('The text was appended to the result.txt file!');
        process.exit()
    })
}

// call main func by passing image path as argument
recognize('./image1.png')