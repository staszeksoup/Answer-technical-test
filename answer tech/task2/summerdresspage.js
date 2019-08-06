

const {Browser, By, Key, actions, until, moveToElement} = require("selenium-webdriver");
const url = 'http://automationpractice.com/index.php';
const {suite} = require("selenium-webdriver/testing");

class SummerPage {
    constructor(driver) {
        this.driver = driver;
        this.locators = {
            women: By.xpath('//*[@id="block_top_menu"]/ul/li[1]/a'),           
            search: By.css('#search_query_top'),
            searchbutton: By.css('#searchbox > button'),
            summer: By.css('#block_top_menu > ul > li:nth-child(2) > ul > li:nth-child(3)')
                   }
    }
    open() {
        this.driver.get(url);
    }

    async hoverWomen(){
      
        await this.driver.findElement(this.locators.women).click();
        
       
       


        /*
        kept on getting moveToElement is not a function
await this.driver
            .actions({bridge: true})
            .moveToElement(menu)
            .build()
            .perform();

        
    //    let dresses = await this.driver.findElement(this.summerdresses);
         await this.driver.executeScript("arguments[0].mouseOver();", menu)
await actions.mouseMove(menu);
        await actions.move(menu).perform()
      //      .moveToElement(dresses)
            .click()
       //     .build()
            .perform()
       
       //     await actions.moveToElement(menu)
         //       .build()
           //     .perform()
    */
        }

    async lookDresses(){
       await this.driver.findElement(this.locators.search)
            //.click()
            .sendKeys('summer dresses');
       await this.driver.findElement(this.locators.searchbutton).click()

    }

    
 

  
};

module.exports = SummerPage;