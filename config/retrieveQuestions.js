var fetch = require('node-fetch');

module.exports = function(){
    fetch('http://localhost:8000/')
    .then(function(res) {
        return res.text();
    }).then(function(body) {
        console.log(body);
    });
 
// json
}
