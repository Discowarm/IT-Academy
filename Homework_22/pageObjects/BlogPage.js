const {BasePage} = require('./BasePage');

class BlogPage extends BasePage {
    constructor(){
        super();
        
        this.findLocatorCodeBlockLines = ".token-line"
    }

    async toScrollPage(elem){
        await elem.scrollIntoView();
    }
}

module.exports = {BlogPage};