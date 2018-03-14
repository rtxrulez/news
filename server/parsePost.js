const unirest = require('unirest');
const cheerio = require('cheerio')

function parsePost(elements) {
    const url = elements.url
    const titleClass = elements.title
    const imgClass = elements.img
    const textClass = elements.text
    const viewsClass = elements.views

    unirest.get(url).end(function (response) {
        const body = response.body
        const $ = cheerio.load(body)

        const domain = url.match(/\/\/(.*?)\//)[1]
        const title = $(titleClass).text().trim()
        let img = $(imgClass).attr('src')
        // img = img.indexOf('http') >= 0 ? img : `http://${domain}${img}`;
        const text = $(textClass).text().trim()
        const views = $(viewsClass).text().trim()

        const post = {
            title: title,
            img: img,
            text: text,
            views: views
        }

        console.log('post', post)
        return post;

    })
}


module.exports = parsePost;