
import { test, expect, type Page } from '@playwright/test';
const { TodoPage } = require('./util.spec');


test.describe("Button Component Testing",() => {
    let todoPage;
    test.use({ viewport: { width: 1980, height: 1200 } });
  
    
    test.beforeEach(async ({ page }) => {
      todoPage = new TodoPage(page);
      await todoPage.goto('https://dboteditor-qa.opseeker.com/');  
      await page.getByRole('img', { name: 'ChapterAdd' }).click();
      
    });

test('test', async ({ page }) => {
   
    await page.getByRole('button', { name: 'Box and two buttons' }).click();
    await page.getByPlaceholder('Write text here').fill('Hola likert');
    await page.locator('canvas').first().click({
      position: {
        x: 1163,
        y: 343
      }
    });
    await page.getByTestId('view-type-select').locator('svg').click();
    await page.getByText('Likert', { exact: true }).click();
    await page.getByRole('button', { name: 'ChatOption Preview' }).click();
    await page.locator('#selectionBox > div > div > div > div > div').first().click();
  })
});