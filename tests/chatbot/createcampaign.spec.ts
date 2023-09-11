import { test, expect } from '@playwright/test';
const { TodoPage } = require('./util.spec');

test.describe("Chatbot Testing",() => {
  let todoPage;
  test.use({ viewport: { width: 1980, height: 1200 } });


  test.beforeEach(async ({ page }) => {
    todoPage = new TodoPage(page);
    await todoPage.goto();
    await todoPage.loginCampaign(page);    
  });



  test.skip('login & Create Campaings', async ({ page }) => {  
    await page.getByText('rosana').click();
    await page.getByRole('menuitem', { name: 'Campaigns' }).click();
    await page.getByRole('button', { name: 'FormAdd Create new campaign' }).click();
    await page.getByPlaceholder('Campaign name').click();
    await page.getByPlaceholder('Campaign name').fill('playwrightTest');
    await page.getByRole('button',{ name: 'FormAdd Create' }).click();
    await page.getByRole('button', { name: 'CloudUpload Upload changes' }).click();
    await page.getByText('rosana').click();
    await page.getByRole('menuitem', { name: 'Sign out' }).click();
    await page.getByRole('button', { name: 'Login Sign in' }).click();
  });
            

});