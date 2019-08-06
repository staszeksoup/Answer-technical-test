

const {Browser, By, Key, actions, until, move} = require("selenium-webdriver");
const url = 'http://automationpractice.com/index.php';
const fs = require("fs");

class MapPage {
    constructor(driver) {
        this.driver = driver;
        this.locators = {
            ourstores: By.linkText('Our stores'),
            googlebtn: By.css('#map > div:nth-child(2) > table > tr > td:nth-child(2) > button'),
            map: By.id('map'),
            zoomout: By.css('#map > div > div > div.gmnoprint.gm-bundled-control.gm-bundled-control-on-bottom > div:nth-child(1) > div > button:nth-child(3)')
           }
    }
    open() {
        this.driver.get(url);
    }

    async clickLink(){
        await this.driver.findElement(this.locators.ourstores)
            .click()     
                
    }
    async dismiss(){
        await this.driver.findElement(this.locators.googlebtn)
            .click()     
                
    }
    async scroll(){
        let scroller = await this.driver.findElement(this.locators.map);
        await this.driver.executeScript("arguments[0].scrollIntoView(false);", scroller)
    }

    async zoomout(){
        for(let i=0;i<2;i++){
        await this.driver.findElement(this.locators.zoomout).click()
        }
    }

    async screenshot(){

        await this.driver.wait(this.driver.takeScreenshot().then((image, err) => {
            fs.writeFile("westpalmbeach.png", image, "base64",
            err => console.error(err));
   
    })
        )}
    

   


  
};

module.exports = MapPage;