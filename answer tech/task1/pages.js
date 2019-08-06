

const {Browser, By, Key, actions, until, elementToBeClickable} = require("selenium-webdriver");
const url = 'http://automationpractice.com/index.php';


class CartPage {
    constructor(driver) {
        this.driver = driver;
        this.locators = {
            topDress: By.css('#homefeatured > li.ajax_block_product.col-xs-12.col-sm-4.col-md-3.first-in-line.first-item-of-tablet-line.first-item-of-mobile-line'),
            cartBtn: By.css('#add_to_cart > button > span'),
            continue: By.css('#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > span > span'),
            iconOk: By.xpath('//*[@id="layer_cart"]/div[1]/div[1]/h2'),
            shoppingCart: By.css('.shopping_cart'),
            viewCart: By.css('#header > div:nth-child(3) > div > div > div:nth-child(3) > div > a'),
            trash: By.css('#\\31 _1_0_0 > i'),
            alert: By.css('.alert'),
                   }
    }
    open() {
        this.driver.get(url);
    }

    async clickLink(){
        let link = await this.driver.findElement(this.locators.topDress)
            await link.click();
    }

    async addToCart(){
        await this.driver.findElement(this.locators.cartBtn)
            .click();
    }

    async continueShopping(){
        await this.driver.findElement(this.locators.continue)
            .click();
    }

    async clickCart(){
        await this.driver.findElement(this.locators.shoppingCart)
            .click();
        await this.driver.findElement(this.locators.viewCart)
            .click();
            

    }

    async remove(){
            await this.driver.findElement(this.locators.trash)
            .click();
    };

    async whatAlert(){
        await this.driver.findElement(this.locators.alert)
            .getText();
    };

 

  
};

module.exports = CartPage;