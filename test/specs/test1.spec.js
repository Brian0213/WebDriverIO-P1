
describe('Demo Tests', () =>{

    it('My First Test', async ()=>{

    browser.url('https://google.com/')
    browser.pause(2000)
    await $('[name="q"]').setValue("WebdriverIO");
    // await $('[name="btnK"]').click();
    browser.keys('Enter')

})

})