// To be repeated in every project (3 lines below)
import {Builder, By, Capabilities, until, WebDriver} from "selenium-webdriver"
const chromedriver = require("chromedriver")
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

import {emManager} from './codeAlong_examplePOM'
const employeePage = new emManager(driver)

class Inturns {
    name: string;
    phone: number;
    title: string;

    constructor(name: string, phone: number, title: string) {
        this.name = name;
        this.phone = phone;
        this.title = title;
    }
}

let new Inturns: Array <Inturns> = [
    new Inturns("Blossom", 1234567890, "PowerPuff Girl")
    new Inturns("Buttercup", 1234567890, "PowerPuff Girl")
    new Inturns("Bubbles", 1234567890, "PowerPuff Girl")
    new Inturns("Miss Sara Bellum", 7889788978, "Secretary")
]

let addEmp = async(newInturns) => {
    await employeePage.click(employeePage.addEmployee)
    await employeePage.click(employeePage.newEmployee)
    await driver.findElement(employeePage.nameField).clear()
    await employeePage.sendKeys(employeePage, Inturns.name)
}

let addEmp = async (newInturns) => {
    await employeePage.click(employeePage.addEmployee)
    await employeePage.click(employeePage.newEmployee)
    await employeePage.click(employeePage.nameField)
    await employeePage.setInput(employeePage.nameField, newInturns.name)
    await employeePage.click(employeePage.phoneField)
    await employeePage.setInput(employeePage.phoneField, newInturns.phone)
    await employeePage.click(employeePage.titleField)
    await employeePage.setInput(employeePage.titleField, newInturns.title)
    await employeePage.click(employeePage.saveBtn)
    // Will stop 3 seconds after each employee edited
    await employeePage.driver.sleep(3000)
}

describe("should add employees to employee manager", () => {
    test("can add employees using array", async () => {
        await employeePage.navigate()
        for(let i = 0; i < newInturns.length; i++){
            await addEmp(newInturns[i])
        }
        await employeePage.driver.quit()
    })
})