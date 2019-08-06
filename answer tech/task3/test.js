const {Broswer, By, Key, actions, until} = require("selenium-webdriver");
const {suite} = require("selenium-webdriver/testing");
const assert = require('assert')
const PricePage = require('./pricepage.js');
//require("chromedriver");
require("geckodriver");

suite(function(env) {
    describe('Goes to summer dresses and changes price range', function() {
        let driver;
        let page;

        before(async function() {
            driver = await env.builder().build();
            page = new PricePage(driver);
            await page.open()
        });

        it('goes to summer dresses', async function(){
            await driver.manage().setTimeouts({implicit: 3000})
           await page.findSummerDresses();
           
        });  

        it('uses the slider', async function(){
            await driver.manage().setTimeouts({implicit: 3000})
                await page.useSlider();
                
        })
        it('looks at price range', async function(){
            await driver.manage().setTimeouts({implicit: 3000})
            let priceRange = await driver.findElement(page.locators.range).getText();
            assert(priceRange.includes('$16.00 - $29.92'))
            //page gets stuck loading items
        })
      
        after(async function(){
           driver.quit();
        });
    });
});
