const {BasePage} = require('./BasePage');
const { GetStartedPage } = require('./getStartedPage');

class MainPage extends BasePage {
    constructor(){
        super();
        this.findLocatorBaseSearch = '.DocSearch-Button';
        this.findLocatorFirstLink = '.DocSearch-Hit-title';
        this.findLocatorAfterClickSearch = '//*[@id="docsearch-input"]';
        this.findIconMicrosoft = ".//a[contains(@href, 'microsoft')]";
        this.findLocatorButtonGetSt = '.buttons_pzbO a[href="/docs/gettingstarted"]';
        this.findLocatorLinkApi = './/*[text()="API"]';
        this.findLocatorLinkBlog = './/a[contains(@href, "blog")]';
        this.findLocatorSwitchMode = '.lightToggleIcon_pyhR'
    }
}
module.exports = {MainPage};