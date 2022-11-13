// Used 2.6/codeAlong_addingByCSS.test.ts & 2.6/codeAlong_addingByxPath.test.s for reference
// Lecture "2.6 Automating Manual and Locators" https://ed.devmountain.com/materials/qapt9/lectures/qa-locators/

import {Builder, By, Capabilities, WebDriver} from "selenium-webdriver"

const chromedriver = require("chromedriver")

const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

describe("Filling in the blanks", () => {
    beforeEach(async () => {
        await driver.get('https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html')
    });
    afterAll(async () => {
        await driver.quit();
    })

    const hdrInput: By = By.xpath('//input[@name="hdrInput"]')
    const mkeInput: By = By.name('mkeInput') //using CSS locator to mix it up
    //I suspect there's a misspelling in the code for the ID below (showing "ori" instead of "oai" which is likely for "Originating Agency Identifier")
    const oaiInput: By = By.xpath('//input[@name="oriInput"]')
    const nameInput: By = By.xpath('//input[@name="namInput"]')
    const clrBtn: By = By.xpath('//input[@id="clearBtn"]')
    const submitBtn: By = By.xpath('//input[@id="saveBtn"]')
    const errorMsg: By = By.xpath('//input[@id="errorList"]')

    test("filling in the blanks for real", async () => { // I added the "async" (because of errors on the awaits below)
        await driver.findElement(hdrInput).sendKeys("Header test")
        await driver.findElement(mkeInput).sendKeys("MKE test")
        await driver.findElement(oaiInput).sendKeys("OAI test")
        await driver.findElement(nameInput).sendKeys("Name test")
        await driver.findElement(submitBtn).click()
        expect(errorMsg).toContain("Errors Received:")
        await driver.findElement(clrBtn).click()
        
    });
});