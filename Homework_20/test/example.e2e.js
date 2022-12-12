const {Expect} = require('chai');
const {GetStartedPage} = require('../pageobjects/getStartedPage');
const { MainPage } = require('../pageobjects/MainPage');
const pageGetStarted = new GetStartedPage();
const mainPage = new MainPage();


describe('webdriverio, homework_20', async () => {
    it('test should to click on button named "Get Started",next to click the "API", will do scroll the page and to click the button next step "Expect"', async () => {
        await pageGetStarted.navigate('https://webdriver.io/');
        await $(pageGetStarted.findLocatorButtonGetSt).click();
        await $(pageGetStarted.findLocatorLinkApi).click();
        await browser.pause(2000);
        await pageGetStarted.toScrollPageAndClick($(pageGetStarted.findElemButtnExspect));
        await browser.pause(2000);
    });
    
    it('test should to click on the button search,to inter the word "scroll" and to click first link ', async () => {
        await pageGetStarted.navigate('https://webdriver.io/');
        await $(mainPage.findLocatorBaseSearch).click();
        await mainPage.searching($(mainPage.findLocatorAfterClickSearch), $(mainPage.findLocatorFirstLink));
        await browser.pause(2000);
    });

    it('test should to click on the button-link microsoft, and to check, the browser is on a specific page.', async () => {
        await pageGetStarted.navigate('https://webdriver.io/');
        await pageGetStarted.toScrollPageAndClick($(mainPage.findIconMicrosoft));
        await browser.pause(2000);
        await browser.newWindow('https://www.microsoft.com/ru-by');
        await expect(browser).toHaveUrl('https://www.microsoft.com/ru-by');
        await browser.pause(2000);

    });

});



