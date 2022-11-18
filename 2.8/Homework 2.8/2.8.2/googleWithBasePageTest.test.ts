// See class 2.8 example: https://github.com/MarohnHoward/qrpt9InClassExamples/blob/main/unit2.8/googleWBaseTest.test.ts

import {Google} from './googleWithBasePage'
const fs= require('fs') 
const google = new Google()

test('do a search', async () => {
    await google.navigate()
    await google.search('The Marvelous Mrs. Maisel')
   let text = await google.getResults()
// // Wasn't quite able to set the driver to sleep/pause. The test run time is borderline and fails half of the time. 
//    await google.driver.sleep(1000)
    expect(text).toContain('Mrs. Maisel')

    await fs.writeFile(`${__dirname}/test.txt`, text, (e) => {
        if (e) console.error(e)
        else console.log('Save Successful')
    })

    await fs.writeFile(`${__dirname}/googleScreenshot.png`, 
    await google.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('Save Successful')
    })
    
    await google.driver.quit()
});