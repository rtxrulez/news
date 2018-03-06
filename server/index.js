const parsePost = require('./parsePost')
const config = require('./config')
console.log('conf', config)


console.log('start')
parsePost(
    'https://russian.rt.com/russia/article/486671-sud-dalspecstroi-kosmodrom-vostochnyi',
    config.site.rt
);