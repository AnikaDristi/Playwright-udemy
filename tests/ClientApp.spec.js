const {test, expect} = require('@playwright/test'); 

test('browser test', async ({ page }) => 
{

    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    console.log(await page.title());

    await page.locator('#userEmail').fill("abcd561@gmail.com");
    await page.locator('#userPassword').fill("Le@rning1");
    await page.locator("[value='Login']").click();
    //await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();
     const titles = await page.locator('.card-body b').allTextContents();
     console.log(titles);
})