// class to export = SpecPage
import { SpecPage } from "./SpecPage";
const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities } from "selenium-webdriver";

const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

const specPage = new SpecPage(driver)

describe("Can search querries in Google", () => {
    
    test ("able to search", async () => {
        await specPage.navigateToGoogle() 
        await specPage.doSearch("bear")
    }); 

    test ("Was redirected to the search results page", async () => {
        const isOnSearchPageTest = await specPage.isOnSearchPage()
        expect(isOnSearchPageTest).toBeTruthy()  
    });

    //After all should always be outside of the test(s) but inside describe
    afterAll(async () => {
        await driver.quit();
    });
    
});