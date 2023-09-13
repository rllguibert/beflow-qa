import { test, expect, type Page } from '@playwright/test';
const { TodoPage } = require('./util.spec');



test.describe("Search Functionablity",() => {
    let todoPage;
  
    test.beforeEach(async ({ page }) => {
      todoPage = new TodoPage(page);
      await todoPage.goto('https://dboteditor-qa.opseeker.com/');  
      await todoPage.loginCampaign(page);
      
    });     
  

test('Search Feautures test', async ({ page }) => {
    await page.getByText('rosana').click();
    await page.getByText('Workspaces').click();
    await page.getByRole('menuitem', { name: 'demo CaretRightFill' }).click();
    await page.getByRole('menuitem', { name: 'Load' }).getByText('Load').click();
    await page.getByText('rosana').click();
    await page.getByRole('menuitem', { name: 'Campaigns' }).click();
    await page.getByText('/qanewchanges').click();
    await page.getByText('/conversations').click();
    await page.getByText('/conversation.json').click();
    await page.getByRole('menuitem', { name: 'Search' }).click();
    await page.getByText('Id').click();
    await page.getByPlaceholder('Search').click();
    await page.getByPlaceholder('Search').fill('6');
    await page.getByRole('button', { name: 'Center' }).click();
    await page.locator('#root').getByText('Text').click();
    await page.getByPlaceholder('Search').click();
    await page.getByPlaceholder('Search').fill('voy');
    await page.getByRole('button', { name: 'Center' }).click();
    await page.getByRole('menuitem', { name: 'View' }).click();
    await page.getByRole('menuitem', { name: 'Custom fields' }).click();
    await page.getByPlaceholder('Search').click();
    await page.getByPlaceholder('Search').fill('tirando');
    await page.getByRole('button', { name: 'Center' }).click();

})

});