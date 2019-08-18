const {Browser, By, Key, actions, until} = require("selenium-webdriver");
const {suite} = require("selenium-webdriver/testing");
const assert = require('assert')
const LoginPage = require('./accountpage.js');
require("chromedriver");

suite(function(env) {
    describe('Types and checks Keys', function() {
        let driver;
        let page;

        before(async function() {
            driver = await env.builder().build();
            page = new LoginPage(driver);
            await page.open()
        });

        it('clicks Key Presses on Menu', async function(){
            await page.clickLink()
        });  

        it('attempts invalid email', async function(){
            await page.logsin('dada', 'dada');
        });

        it('reads error message', async function(){
            let message = await driver.findElement(page.locators.alert)
                        .getText();
            assert(message.includes('error'))
            
        })
        it('logs in correctly', async function(){
            await page.logsin('joe@aol.com','password');
        })
        it('reads user name', async function(){
            let message = await driver.findElement(page.locators.username)
                        .getText();
            assert(message.includes('joe bloggs'))
            
        })



        after(async function(){
            driver.quit();
        });
    });
});
