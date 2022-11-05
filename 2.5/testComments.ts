import {
    Builder,
    By,
    Capabilities,
    until,
    WebDriver,
    WebElement,
    Key,
} from "selenium-webdriver";

// Single linge comment
const bernice: By = By.name("employee1");
const marnie: By = By.name("employee2");
const phillip: By = By.name("employee3");

// /<!-- test --> 
// Does not work since we are not on HTML, see testHtmlComment file for working example
const nameDisplay: By = By.id("employeeTitle");
const nameInput: By = By.name("nameEntry");
const phoneInput: By = By.name("phoneEntry");
const titleInput: By = By.name("titleEntry"); 

/* TS Block comment
const saveButton: By = By.id("saveBtn");
const cancelButton: By = By.name("cancel"); */

// Hover over comment (need to hover over "errorCard" in this case)
/** If you hover over, this will look clear and very cool */
const errorCard: By = By.css(".errorCard");


// More at https://ed.devmountain.com/materials/qapt9/lectures/qa-git-cont/ 