// Homework 2.6.2 Part 1 (POM)
// Part 2 (test file) at ./2.6.2.employeeManagerTest.test

import { Builder, By, Capabilities, until, WebDriver, WebElement} from "selenium-webdriver"
const chromedriver = require("chromedriver")

export class EmployeePage { // Exported to be accessed in the test file
    driver: WebDriver;
    url: string = "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html";
    byHeader: By = By.xpath('//div[@class="titleBar"]');
    // Added the below variables as part of homework
    byAddEmployee: By = By.xpath('//li[@name="addEmployee"]')
    // This one I'm not totally sure what to do because it changes every time an employee gets added
    byNewEmployee: By = By.xpath('//li[last() - 1]')
    byNameInput: By = By.xpath('//input[@name="nameEntry"]')
    byPhoneImput: By = By.xpath('//input[@name="phoneEntry"]')
    byTitleImput: By = By.xpath('//input[@name="titleEntry"]')
    bySaveBtn: By = By.id('saveBtn')
    constructor(myDriver: WebDriver) {
      this.driver = myDriver
    } 

    // Methods below
    async navigate() {
        // Using "this" when inside the class and referring to properties or methods
      await this.driver.get(this.url)
    }

    getEmployeeLiBy(employeeParameter: EmployeeInfo) {
        const dynamicLocator = `//li[text()= "${employeeParameter.name}"]`
        console.log(`dynamicLocator=${dynamicLocator}`)
        return By.xpath(dynamicLocator)
    }

    async doesEmployeeExist(employeeParameter: EmployeeInfo) {
        const foundEmployeeFields = await this.driver.findElements(this.getEmployeeLiBy(employeeParameter))
        const result = foundEmployeeFields.length > 0
        console.log(`result=${result} foundEmployeeFields.length=${foundEmployeeFields.length} JSON=${JSON.stringify(foundEmployeeFields)}`)
        return result
    }

    async fillInNewEmployee(employeeParameter: EmployeeInfo) {
        await this.driver.wait(until.elementLocated(this.byHeader))
        await this.driver.findElement(this.byAddEmployee).click()
        await this.driver.findElement(this.byNewEmployee).click()
        await this.driver.findElement(this.byNameInput).click()
        await this.driver.findElement(this.byNameInput).clear()
        await this.driver.findElement(this.byNameInput).sendKeys(employeeParameter.name)
        await this.driver.findElement(this.byPhoneImput).click()
        await this.driver.findElement(this.byPhoneImput).clear()
        await this.driver.findElement(this.byPhoneImput).sendKeys(employeeParameter.phone)
        await this.driver.findElement(this.byTitleImput).click()
        await this.driver.findElement(this.byTitleImput).clear()
        await this.driver.findElement(this.byTitleImput).sendKeys(employeeParameter.title)
        await this.driver.findElement(this.bySaveBtn).click()
        //await this.driver.sleep(500)
    }
}

export class EmployeeInfo {
    name: string;
    phone: number;
    title: string;
  
    constructor(nameParameter: string, phoneParameter: number, titleParameter: string){
      this.name = nameParameter;
      this.phone = phoneParameter;
      this.title = titleParameter;
    }
  }