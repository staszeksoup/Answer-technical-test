

const {Browser, By, Key, actions, until, move} = require("selenium-webdriver");
const url = 'http://automationpractice.com/index.php';


class PricePage {
    constructor(driver) {
        this.driver = driver;
        this.locators = {
            women: By.css('#block_top_menu > ul > li:nth-child(1) > a'),
            dresses: By.css('#subcategories > ul > li:nth-child(2) > div.subcategory-image > a > img'),
            summer: By.css('#subcategories > ul > li:nth-child(3) > div.subcategory-image > a > img'),
            slider: By.css('#layered_price_slider > a:nth-child(3)'),
            range: By.id('layered_price_range')
        }
    }
    open() {
        this.driver.get(url);
    }

    async findSummerDresses(){
        await this.driver.findElement(this.locators.women)
            .click()
        await this.driver.findElement(this.locators.dresses)
            .click();
        await this.driver.findElement(this.locators.summer)
            .click();
            
        
    }

    async useSlider(){
        const actions = this.driver.actions({bridge: true});
        let slider = await this.driver.findElement(this.locators.slider);
       // await slider.click();
       // await this.driver.executeScript("arguments[0].setAttribute('style', 'left: 90%;')",slider);
      //  await slider.click();
  //    action = this.driver.move.dragAndDropBy(slider, 30, 0).build();
    //    action.perform()
        //builder = new Actions(this.driver);
        //builder.clickAction(slider)
        for (let i = 1; i <= 13 ; i++) {
            slider.sendKeys(Key.ARROW_LEFT);
        }

    }

    async readRange(){
        let priceRange = await this.driver.findElement(this.locators.range).getText()
    }


  
};

module.exports = PricePage;