// Test was verified and passing (x1)

import { Builder, By, Capabilities, WebDriver } from "selenium-webdriver"

const chromedriver = require("chromedriver");

const driver: WebDriver = new Builder()
.withCapabilities(Capabilities.chrome())
.build();

describe("practicing css selectors", () => {
    beforeEach(async () => {
        await driver.get("https://www.amazon.com");
    });
    afterAll(async () => {
        await driver.quit
    });
const searchBar: By = By.id('twotabsearchtextbox');
const results: By = By.css('.s-main-slot');

test("searching for an item on amazon", async () => {
    // \n will press enter (to submit search) basically a shortcut to not have to find the id/etc + axction to click the submit button
    await driver.findElement(searchBar).sendKeys("baby yoda\n"); 
    let resultsText = await driver.findElement(results).getText();
        expect(resultsText).toContain("The Child");
});
})

