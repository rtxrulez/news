const parsePost = require('./parsePost')
const config = require('./config')
console.log('conf', config)


console.log('start')
parsePost(
    config.site.rt
);