const {BasePage} = require('./BasePage');

class GetStartedPage extends BasePage {
    constructor(){
        super();
        this.findElemButtnExspect = '.pagination-nav__link';
    }
}
module.exports = {GetStartedPage};
