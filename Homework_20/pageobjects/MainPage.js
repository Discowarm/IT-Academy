const {BasePage} = require('./BasePage');
const { GetStartedPage } = require('./getStartedPage');

class MainPage extends BasePage {
    constructor(){
        super();
        this.findLocatorBaseSearch = '.DocSearch-Button';
        this.findLocatorFirstLink = '.DocSearch-Hit-title';
        this.findLocatorAfterClickSearch = '//*[@id="docsearch-input"]';
        this.findIconMicrosoft = ".//a[contains(@href, 'microsoft')]";
    }
    async searching(elem1,elem2){
        await elem1.setValue('scroll');
        await elem2.click();

    }
}
module.exports = {MainPage};