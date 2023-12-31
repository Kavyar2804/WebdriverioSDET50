import homepage from "../pageobjects/demopage.js"
import { expect } from "chai"

describe('Sample Testing javascript',()=>{
    it("Launch some website" , async()=>{

        await browser.url('https://webdriver.io/')
        await homepage.openurl()
        expect(await homepage.searchbtn.waitForClickable({timeout:2000})).to.be.true
        await homepage.performclick('webdriver')
       const title = await browser.getTitle()
        expect(title).to.be.equal('Webdriver · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO')
        await browser.pause(3000)
    })

})