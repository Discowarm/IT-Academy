const { GetStartedPage } = require('./getStartedPage');
const { MainPage } = require('./mainPage');
const { BasePage } = require('./BasePage');
const { BlogPage } = require('./BlogPage');


class PageFactory {
    static 'Main Page' = new MainPage();
    static 'Get Started Page' = new GetStartedPage();
    static 'Base Page' = new BasePage();
    static 'Blog Page' = new BlogPage();

}

module.exports = { PageFactory };
