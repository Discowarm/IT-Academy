const {Builder, By, Actions, Key, until} = require('selenium-webdriver');
const { expect } = require('chai');

    describe(`Selenium Webdriver, Homework_17`, function () {
        let driver;
    
        beforeEach(async() => {
            driver = await new Builder().forBrowser('chrome').build();
            await driver.manage().window().maximize({with:1920, height:1080});
        });
    
        afterEach(async() => {
            await driver.close();
        });
    
        after(async() => {
            await driver.quit();
        });
    
    it(`test should check the change of the main titles when ending between links in header`, async () => {
        await driver.get('https://chromedriver.chromium.org/home;');
        let title = await driver.getTitle();
        expect(title).to.equal("ChromeDriver - WebDriver for Chrome");
        const findElemChrome_Eextent = await driver.findElement(By.xpath("//*[@id='WDxLfe']/ul/li[3]/div[1]/div"));
        await driver.actions().click(findElemChrome_Eextent).perform();
        await driver.sleep(1000);
        title = await driver.getTitle();
        expect(title).to.equal('ChromeDriver - WebDriver for Chrome - Chrome Extensions');
    });
    
    it(`test after input the word 'driver' in the search box, the 1st link shall contain the word 'driver'`, async () => {
        await driver.get('https://chromedriver.chromium.org/home;');
        const buttonSearch = await driver.findElement(By.xpath('//*[@id="atIdViewHeader"]/div/div[2]/div[1]/div[2]/div'));
        await driver.actions().click(buttonSearch).perform();
        await driver.sleep(3000);
        await driver.actions().sendKeys('driver', Key.ENTER).perform();
        await driver.sleep(3000);
        const searchResultTitles = await driver.findElements(By.xpath('//*[@class="vH0yjd"]/a'));
        await driver.sleep(3000);
        expect(await searchResultTitles[0].getText()).to.contain('driver');
        await driver.sleep(3000);
    });

    it(`test should open the link 'More' and to select the "Mobile Emulation",and to change Url containing word 'mobile-emulation'`, async () => {
        await driver.get('https://chromedriver.chromium.org/home;');
        const findElemMore = await driver.findElement(By.xpath("//*[text()='Дополнительно']"));
        await driver.actions().move({origin: findElemMore}).perform();
        const dropDownElem = await driver.findElement(By.xpath('//li[@class="ijMPi"]//div[@class="I35ICb"]//a[text()="Mobile Emulation"]'));
        await driver.wait(until.elementIsVisible(dropDownElem));
        await dropDownElem.click();
        const getUrl = await driver.getCurrentUrl();
        expect(await getUrl).to.contain('mobile-emulation');
        await driver.sleep(2000);
     });
    })