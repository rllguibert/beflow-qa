import { test, expect } from '@playwright/test';
const { TodoPage } = require('./util.spec');

test.describe("Chatbot Testing",() => {
  let todoPage;
  test.use({ viewport: { width: 1980, height: 1200 } });


  test.beforeEach(async ({ page }) => {
    todoPage = new TodoPage(page);
    await todoPage.goto('https://dboteditor-qa.opseeker.com/'); 
    await todoPage.loginCampaign(page);    
  });



  test('login & Create Campaings', async ({ page }) => {  
    await page.getByText('rosana').click();
    await page.getByText('Workspaces').click();
    await page.getByRole('menuitem', { name: 'demo CaretRightFill' }).click();
    await page.getByRole('menuitem', { name: 'Load' }).getByText('Load').click();
    await page.getByText('rosana').click();
    await page.getByRole('menuitem', { name: 'Campaigns' }).click();
    await page.getByRole('button', { name: 'FormAdd Create new campaign' }).click();
    await page.getByPlaceholder('Campaign name').click();
    await page.getByPlaceholder('Campaign name').fill('boxButtonTest');
    await page.getByRole('button',{ name: 'FormAdd Create' }).click();
    await page.getByText('rosana').click();
    await page.getByRole('menuitem', { name: 'Sign out' }).click();
    await page.getByRole('button', { name: 'Login Sign in' }).click();
  });
            

});