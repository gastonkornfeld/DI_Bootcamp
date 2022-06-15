const axios = require('axios').default;


const fetchTest = (url) => {
    axios.get(url)
    .then(function (response) {
    // handle success
        console.log(response.data)
        return response.data;
    });
}

module.exports = {
    'fetchTest': fetchTest
};




