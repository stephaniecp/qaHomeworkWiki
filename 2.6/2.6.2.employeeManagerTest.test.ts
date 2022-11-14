// Homework 2.6.2 Part 2 (test file)
// Part 1 (POM) at ./2.6.2employeeManagerPOM

import {Builder,By, Capabilities, until, WebDriver, } from "selenium-webdriver";
//Driver instance create here (outside test suite) to be accessed for all tests and not create multiple windows
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

import {EmployeePage, EmployeeInfo} from './2.6.2employeeManagerPOM'
const employeePage = new EmployeePage(driver) //Passing in the driver created above

describe("Employee Manger Test", () => {
    beforeEach(async () => {
        await employeePage.navigate();
    })
    afterAll(async () => {
        // await driver.quit()
    });

    test("adding an employee", async () => {
      const steph = new EmployeeInfo("Steph", 8679530900, "Almost QA Engineer")
      const bobbyMcGee = new EmployeeInfo("Boby McGee", 8679530900, "Not sure")

      await employeePage.fillInNewEmployee(steph)
      await employeePage.fillInNewEmployee(bobbyMcGee)

      expect(await employeePage.doesEmployeeExist(steph)).toBe(true)
      expect(await employeePage.doesEmployeeExist(bobbyMcGee)).toBe(true)
    });

});

// Used 2.6/codeAlong_pageObject.test.ts & 2.6/codeAlong_pageObject.ts for reference
// Lecture "2.6 Automating Manual and Locators" https://ed.devmountain.com/materials/qapt9/lectures/qa-locators/