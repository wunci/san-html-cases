const data = require('./data.json');

module.exports = {
    info: {
        outputData: function (data) {
            return {
                title: data.title
            }
        }
    }
};