const { Given, When, Then, } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const { BasePage } = require('../pageobjects/BasePage');
const { BlogPage } = require('../pageObjects/BlogPage');
const {GetStartedPage} = require('../pageobjects/getStartedPage');
const { MainPage } = require('../pageobjects/MainPage');
const pageGetStarted = new GetStartedPage();
const mainPage = new MainPage();
const basePage = new BasePage();
const blogPage = new BlogPage();

// this test suite testing the site webdriver.io for different functionality

    // test should to click on button named "Get Started", next to click the "API", will do scroll the page and to click the button "next step",
    // 'and should checking url changed and containing the word "protocols"'

Given(/^I navigate to "(.*)" page$/, async function (url) {
    const world = this;
    console.log('global context 1 --- ', world);
    world.newVariable = 'Pass to next step'
    console.log('global context 2 --- ', world);
    await browser.url(url)
});
When(/^I click on the button named "Get started"$/, async () => {
    await $(mainPage.findLocatorButtonGetSt).click();
});
When(/^I click the link "API"$/, async () => {
    await $(mainPage.findLocatorLinkApi).click();
});
When(/^I scrolling the page and to click the button "next step"$/, async () => {
    await basePage.toScrollPageAndClick($(pageGetStarted.findElemButtnExspect));
});
Then(/^I check url the page$/, async () => {
    await browser.pause(2000);
    await expect(await browser.getUrl()).to.be.equal('https://webdriver.io/docs/api/protocols');
});

// // ================================================================

// // test should to click on the button search,to inter the word "scroll" and to click first link

When(/^I click on the button named "search"$/, async () => {
   await $(mainPage.findLocatorBaseSearch).click();
});
Then(/^I inter the word "scroll" and click first link$/, async () => {
    await basePage.searching($(mainPage.findLocatorAfterClickSearch), $(mainPage.findLocatorFirstLink));
    await browser.pause(2000);
});

// // // =================================================================

// // test should to click on the button-link microsoft, and to check, the browser is on a specific page.

When(/^I scroll the page and click on the button-link named "microsoft"$/, async () => {
    await basePage.toScrollPageAndClick($(mainPage.findIconMicrosoft));
    await browser.pause(1000);
});
When(/^I open window into browser another url$/, async () => {
     await browser.newWindow('https://www.microsoft.com/ru-by');
});
Then(/^I check the browser is on the specific page$/, async () => {
    await browser.pause(3000);
    await expect(await browser.getUrl()).to.be.contains('microsoft');
});

// =====================================================================

// this test suite testing the site webdriver.io if elem is clicable and make screenshot
   
    // this test should detect if an element is clickable'

Given(/^I navigate to "(.*)" page$/, async function (url) {
    const world = this;
    console.log('global context 1 --- ', world);
    world.newVariable = 'Pass to next step'
    console.log('global context 2 --- ', world);
    await browser.url(url)
});
When(/^I click the link "Blog" and to scroll the page$/, async () => {
    await $(mainPage.findLocatorLinkBlog).click();
    await blogPage.toScrollPage($(blogPage.findLocatorCodeBlockLines));
});
When(/^I get element,check is clicable and bring the result to the console$/, async () => {
    const el = await $(blogPage.findLocatorCodeBlockLines);
    let clickable = await el.isClickable();
    console.log(clickable);
});
Then(/^I wait for element to be clickable$/, async () => {
    await browser.pause(3000);
    const el_TheSame = await $(blogPage.findLocatorCodeBlockLines);
    await browser.waitUntil(() => el_TheSame.isClickable());
});

// =================================================================================

// this test should return size for window and make screenshot

When(/^I get size for window$/, async () => {
    const windowSize = await browser.getWindowSize();
    console.log(windowSize);
});
When(/^I make screenshot$/, async () => {
    await browser.saveScreenshot('./screenshot.png');
});
Then(/^I click on the button "night mode" and switch to night mode$/, async () => {
    await $(mainPage.findLocatorSwitchMode).click();
});

   





