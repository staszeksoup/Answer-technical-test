const {Browser, By, Key, actions, until} = require("selenium-webdriver");
const {suite} = require("selenium-webdriver/testing");
const assert = require('assert')
const cartPage = require('./pages.js');
require("chromedriver");
require("geckodriver");

suite(function(env) {
    describe('Adds to cart, removes from cart', function() {
        let driver;
        let page;

        before(async function() {
            driver = await env.builder().build();
            page = new cartPage(driver);
            await page.open()
        });

        it('clicks first dress', async function(){
            await driver.manage().setTimeouts({implicit:5000});
            await page.clickLink();
            await page.addToCart();
           
        });  

        it('waits for product to go to cart', async function(){
           
            await driver.manage().setTimeouts({implicit:5000});
            await page.continueShopping();
        });
       
        it('looks in cart', async function(){
            await driver.manage().setTimeouts({implicit:50000});
            await page.clickCart();
        });

        it('removes product from cart', async function(){
            await driver.manage().setTimeouts({implicit:10000});
            await page.remove();
        });

        it('checks cart is empty', async function(){
            await driver.manage().setTimeouts({implicit:10000});
            let text = await driver.findElement(page.locators.alert)
            .getText();
            console.log(text);
            assert(text.includes("Your shopping cart is empty."));
        });


        after(async function(){
            driver.quit();
        });
    });
});
