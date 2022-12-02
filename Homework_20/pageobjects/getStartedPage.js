const {BasePage} = require('./BasePage');

class GetStartedPage extends BasePage {
    constructor(){
        super();
        this.findElemButtnExspect = '.pagination-nav__link';
        this.findLocatorLinkApi = ".//*[text()='API']";
        this.findLocatorButtonGetSt = '.buttons_pzbO a[href="/docs/gettingstarted"]';
    }
    async toScrollPageAndClick(elem){
        await elem.scrollIntoView();
        await elem.click();
    }
   
}
module.exports = {GetStartedPage};
