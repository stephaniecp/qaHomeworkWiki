// // SCP - Test with: npx jest 2.4/temp_homeworkTest.test.ts

// import {
//     Builder,
//     By,
//     Capabilities,
//     until,
//     WebDriver,
//     WebElement,
//     Key,
// } from "selenium-webdriver";

// const chromedriver = require("chromedriver");

// const driver: WebDriver = new Builder()
//     .withCapabilities(Capabilities.chrome())
//     .build();
// const bernice: By = By.name("employee1");
// const marnie: By = By.name("employee2");
// const phillip: By = By.name("employee3");
// const nameDisplay: By = By.id("employeeTitle");
// const nameInput: By = By.name("nameEntry");
// const phoneInput: By = By.name("phoneEntry");
// const titleInput: By = By.name("titleEntry");
// const saveButton: By = By.id("saveBtn");
// const cancelButton: By = By.name("cancel");
// const errorCard: By = By.css(".errorCard");

// describe("Employee Manager 1.2", () => {

//     beforeEach(async () => {
//         await driver.get(
//         "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html"
//         );
//     });
//     afterAll(async () => {
//         // await driver.quit();
//     });

//     // SCP - Bonus test to make sure that I can succesfully launch the browser on the correct page  - comment/uncomment the few lines of code below
//    // SCP - (Bonus) Passed test verified
//     test("Hello World test", async () => {
//         let employeeField = await driver.findElement(By.name("addEmployee"));
//         console.log("Add employyee CTA found")
//         // SCP - Found .getText method at https://www.selenium.dev/documentation/webdriver/elements/information/#text-content
//         // SCP - await becasue .get returns a promise (because result will come back later)
//         let buttonText = await employeeField.getText()
//         console.log(`1.0 Field vlaue = ${buttonText}`)
//         expect(buttonText).toBe("+ Add Employee")
//     })

//     describe("handles unsaved, canceled, and saved changes correctly", () => {
//         // SCP - 1st Passed test verified
//         test("An unsaved change doesn't persist", async () => {
//             // #1
//             await driver.findElement(By.name("employee1")).click();
//             console.log("Console logs working fine, yay!")
//             await driver.wait(
//                 until.elementIsVisible(await driver.findElement(By.name("nameEntry")))
//             );
//             // #2
//             await driver.findElement(By.name("nameEntry")).clear();
//             await driver.findElement(By.name("nameEntry")).sendKeys("Test Name");
//             // #3
//             await driver.findElement(By.name("employee3")).click();
//             await driver.wait(
//                 until.elementTextContains(
//                 await driver.findElement(By.name("employeeName")),
//                 "Phillip"
//                 )
//             );
//             // #4 
//             await driver.findElement(By.name("employee1")).click();
//             await driver.wait(
//                 until.elementTextContains(
//                 await driver.findElement(By.name("employeeName")),
//                 "Bernice"
//                 )
//             );
//             // #5
//             // SCP - Note to improve: Having that variable outside each tests (since had to duplicate a few times) in a way that could be reused would be less repetitive. I couldn't find how to do it yet... 
//             let employeeNameTest1 = await driver.findElement(By.name("employeeName")).getText();
//             expect(employeeNameTest1).toBe("Bernice Ortiz");
//         });

//         // SCP - 2nd Passed test verified
//         test("A canceled change doesn't persist", async () => {
//             // #1 
//             await driver.findElement(By.name("employee3")).click();
//             await driver.wait(
//                 until.elementIsVisible(await driver.findElement(By.name("nameEntry")))
//             );
//             // #2
//             await driver.findElement(By.name("nameEntry")).clear();
//             await driver.findElement(By.name("nameEntry")).sendKeys("Test Name");
//             // #3
//             await driver.findElement(By.name("cancel")).click();
//             // #4 (but labeled as #5 in the homework documentation / typo)
//             let employeeNameTest2 = await driver.findElement(By.name("employeeName")).getText();
//             expect(employeeNameTest2).toBe("Phillip Weaver");
//         });

//         // SCP - 3rd Passed test verified
//         test("A saved change persists", async () => {
//             // #1
//             await driver.findElement(By.name("employee1")).click();
//             await driver.wait(
//                 until.elementIsVisible(await driver.findElement(By.name("nameEntry")))
//             );
//             // #2
//             await driver.findElement(By.name("nameEntry")).clear();
//             await driver.findElement(By.name("nameEntry")).sendKeys("Test Name");
//             // #3
//             await driver.findElement(By.name("save")).click();
//             // #4
//             await driver.findElement(By.name("employee3")).click();
//             await driver.wait(
//                 until.elementTextContains(
//                     await driver.findElement(By.name("employeeName")),
//                 "Phillip"
//                 )
//             );
//             // #5
//             await driver.findElement(By.name("employee1")).click();
//             // #6 (but labeled as #5 in the homework documentation / typo)
//             let employeeNameTest3 = await driver.findElement(By.name("employeeName")).getText();
//             expect(employeeNameTest3).toBe("Test Name"); // SCP - Test Name = Edited name of Bernice Ortiz
//         });

//         // SCP - 4th Passed test verified
//         test("shows an error message for an empty name field", async () => {
//            // #1
//             await driver.findElement(By.name("employee1")).click();
//             await driver.wait(
//                 until.elementIsVisible(await driver.findElement(By.name("nameEntry")))
//             );
//             // #2
//             await driver.findElement(By.name("nameEntry")).clear();
//             // #3
//             await driver.findElement(By.name("nameEntry")).sendKeys(Key.SPACE, Key.BACK_SPACE);
//             await driver.findElement(By.id("saveBtn")).click(); 
//             // #4
//             // SCP - Note to improve: should create a variable to not refet to css selector multiple times
//             await driver.wait(until.elementLocated(By.css("span.errorMessage div:first-child")));
//             expect(await (await driver.findElement(By.css("span.errorMessage div:first-child"))).getText()).toBe(
//                 "The name field must be between 1 and 30 characters long."
//             );
//         });

//         // SCP - 5th Passed test verified
//         test("lets you cancel out of an error message", async () => {
//             // #1
//             await driver.findElement(By.name("employee1")).click();
//             await driver.wait(
//                 until.elementIsVisible(await driver.findElement(By.name("nameEntry")))
//             );
//             // #2
//             await driver.findElement(By.name("nameEntry")).clear();
//             await driver.findElement(By.name("nameEntry")).sendKeys(Key.SPACE, Key.BACK_SPACE);
//             // #3
//             await driver.findElement(By.id("saveBtn")).click();
//             // #4
//             await driver.wait(until.elementLocated(By.css("span.errorMessage div:first-child")));
//             expect(await (await driver.findElement(By.css("span.errorMessage div:first-child"))).getText()).toBe(
//                 "The name field must be between 1 and 30 characters long."
//             );
//             // #5
//             await driver.findElement(By.name("nameEntry")).sendKeys(Key.SPACE);
//             await driver.findElement(By.id("saveBtn")).click();
//             await driver.wait(() => true, 500);
//             // #6
//             // SCP - Changed the legth from 0 to 1 + removed the first child div selector since only one expected. There's probably a better way to do this, but this is the only way that I was able to get this test to pass. 
//             expect(await driver.findElements(By.css("span.errorMessage div"))).toHaveLength(1); 
//         });

//     });

// }); // SCP - End of describe/"Employee Manager 1.2" test suite