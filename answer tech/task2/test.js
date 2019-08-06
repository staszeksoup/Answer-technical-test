const {Broswer, By, Key, actions, until} = require("selenium-webdriver");
const {suite} = require("selenium-webdriver/testing");
const assert = require('assert')
const SummerPage = require('./summerdresspage.js');
require("chromedriver");
//require("geckodriver");

suite(function(env) {
    describe('Goes to women, chooses a summer dress', function() {
        let driver;
        let page;

        before(async function() {
            driver = await env.builder().build();
            page = new SummerPage(driver);
            await page.open()
        });

        it('moves to Women menu', async function(){
            await driver.manage().setTimeouts({implicit: 3000})
           await page.hoverWomen();
           
        });  
        it('searches summer dresses', async function(){
            await page.lookDresses();
        })


        after(async function(){
           driver.quit();
        });
    });
});
