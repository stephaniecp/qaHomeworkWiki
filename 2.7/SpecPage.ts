// This is part of Homework 2.7.1

import { WebDriver, By, until,  } from "selenium-webdriver";

export class SpecPage {
    driver: WebDriver;
    // section below from class 2.6 https://ed.devmountain.com/materials/qapt9/lectures/qa-locators/: mETHODS IN THE PAGEoBJECT 
    // Added "By", "until" on the import line
    // Removed unrelated items (addEmployee element + )
    url: string = 'https://www.google.com';
    // addEmployee: By = By.name('addEmployee') Method not necessary for this project
    findSearchField: By = By.name('q') 
    constructor(driver: WebDriver) {
        this.driver = driver
    }
    // Creating new method (takes parameter searchQuery)
    // This is an async function, which means I need "await" when calling it
    async doSearch (searchQuery: string) {
        await this.driver.findElement(this.findSearchField).sendKeys(`${searchQuery}\n`)
    }
    async navigateToGoogle() {
        await this.driver.get(this.url)
        // Chose "q" (search field) as cue that the page is loaded
        await this.driver.wait(until.elementLocated(this.findSearchField))
    }
    async sendKeys(elementBy: By, keys) {
        await this.driver.wait(until.elementLocated(this.findSearchField));
       
    }
    async isOnSearchPage(){
        // await allows getting the promise (result of ".getCurrentUrl"/string)
        const currentUrl:string = await this.driver.getCurrentUrl()
        const desiredUrl:string = "https://www.google.com/search"
        // Returns a boolean value
        return currentUrl.startsWith(desiredUrl) 
    }

}