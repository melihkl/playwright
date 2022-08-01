const { test, expect } = require('@playwright/test');

test.describe('Ornek Senaryo', () => {
    test('Urun arama ve secim islemi', async ({ page }) => {

        await page.goto('https://demoqa.com/books');

        await page.locator('#searchBox').type('Speaking JavaScript');

        await page.locator('.mr-2').click();

        await expect(page.locator('div#title-wrapper  label#userName-value')).toHaveText('Speaking JavaScript');


    }); 
})


