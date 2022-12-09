
class BasePage {
  
    async navigateSiteWebdriver (path) {
        return browser.url(path);
    }

    async toScrollPageAndClick(elem){
        await elem.scrollIntoView();
        await elem.click();
    }

    async searching(elem1,elem2){
        await elem1.setValue('scroll');
        await elem2.click();
    }
}

module.exports = {BasePage};