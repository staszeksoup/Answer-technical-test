

const {Browser, By, Key, actions, until, move} = require("selenium-webdriver");
const url = 'http://automationpractice.com/index.php';


class LoginPage {
    constructor(driver) {
        this.driver = driver;
        this.locators = {
            signin: By.css('.header_user_info'),
            email: By.css('#email'),
            pass: By.id('passwd'),
            signbtn: By.id('SubmitLogin'),
            alert: By.css('#center_column > div.alert.alert-danger'),
            username: By.css('#header > div.nav > div > div > nav > div:nth-child(1) > a > span')
        }
    }
    open() {
        this.driver.get(url);
    }

    async clickLink(){
        await this.driver.findElement(this.locators.signin)
            .click()     
                
    }

    async logsin(user, password){
            await this.driver.findElement(this.locators.email)
                .clear();
            await this.driver.findElement(this.locators.email)
                .sendKeys(user);
            await this.driver.findElement(this.locators.pass)
                .clear();
            await this.driver.findElement(this.locators.pass)
                .sendKeys(password)
            await this.driver.findElement(this.locators.signbtn)
                .click();

    };

    async errormessage(){
        await this.driver.findElement(this.locators.alert)
                .getText()
    }

    

   


  
};

module.exports = LoginPage;