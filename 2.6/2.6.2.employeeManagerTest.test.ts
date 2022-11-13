// Used 2.6/codeAlong_pageObject.test.ts & 2.6/codeAlong_pageObject.ts for reference
// Lecture "2.6 Automating Manual and Locators" https://ed.devmountain.com/materials/qapt9/lectures/qa-locators/

import {Builder,By, Capabilities, until, WebDriver, } from "selenium-webdriver";
  const chromedriver = require("chromedriver");

  const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

  class EmployeePage {
      driver: WebDriver;
      url: string = "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html";
      header: By = By.xpath('//div[@class="titleBar"]');
      constructor(myDriver: WebDriver) {
        this.driver = myDriver
      } 
      async navigate() {
        await this.driver.get(this.url)
      }

        //FILL OUT LOCATORS CONSTRUCTOR AND METHODS IN ORDER TO PASS THE TEST
  }

    // Added the below variables as part of homework
    
    const  addEmployee: By = By.xpath('//li[@name="addEmployee"]')
    // This one I'm not totally sure what to do because it changes every time an employee gets added
    let  newEmployee: By = By.xpath('//li[@name="employee11"]')
    const  nameInput: By = By.xpath('//input[@name="nameEntry"]')
    const  phoneImput: By = By.xpath('//input[@name="phoneEntry"]')
    const titleImput: By = By.xpath('//XXX[@name="titleEntry"]')
    const employeePage = new EmployeePage(driver)

  describe("Employee Manger Test", () => {
      beforeEach(async () => {
          await employeePage.navigate();
      })
      afterAll(async () => {
          await driver.quit()
      });

      test("adding an employee", async () => {
          await driver.wait(until.elementLocated(employeepage.header))
          await driver.findElement(addEmployee).click()
          await driver.findElement(newEmployee).click()
          await driver.findElement(nameInput).click()
          await driver.findElement(nameInput).clear()
          await driver.findElement(nameInput).sendKeys("Name imput test")
          await driver.findElement(phoneImput).click()
          await driver.findElement(phoneImput).clear()
          await driver.findElement(phoneImput).sendKeys("Phone imput test")
          await driver.findElement(titleImput).click()
          await driver.findElement(titleImput).clear()
          await driver.findElement(titleImput).sendKeys("Title imput test")
      });

  });