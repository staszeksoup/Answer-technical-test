const {Broswer, By, Key, actions, until} = require("selenium-webdriver");
const {suite} = require("selenium-webdriver/testing");
const assert = require('assert')
const MapPage = require('./mappage.js');
require("chromedriver");

suite(function(env) {
    describe('looks on the map', function() {
        let driver;
        let page;

        before(async function() {
            driver = await env.builder().build();
            page = new MapPage(driver);
            await page.open()
        });

        it('clicks Our stores on Menu', async function(){
            await page.clickLink()
        });  

        it('dismisses incorrect map popup', async function(){
            await page.dismiss();
        })
        it('scrolls to map', async function(){
            await page.scroll();
        })

        it('zooms out on the map', async function(){
            await page.zoomout();
        })

        it('takes screenshot', async function(){
            await page.screenshot()
        })



        after(async function(){
            driver.quit();
        });
    });
});
