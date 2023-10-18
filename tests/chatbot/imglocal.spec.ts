import { test, expect, type Page } from '@playwright/test';
const { TodoPage } = require('./util.spec');



test.describe("IMG from Local",() => {
    let todoPage;
  
   

  test.beforeEach(async ({ page }) => {
    todoPage = new TodoPage(page);
    await todoPage.goto('https://dboteditor-qa.opseeker.com/');
    await todoPage.loginCampaign(page);
    await todoPage.cargaChatfromCampaign(page);
    await page.getByRole('menuitem', { name: 'ChapterAdd' }).locator('svg').click();
     
  });

  // Probar la imagen desde local cargando una campaña. 
  test('Images inside BOX  from local', async ({ page }) => {
    // Add image url  inside Box  
    await page.getByRole('button', { name: 'Box' }).first().click();    
    await todoPage.loadImageLocal(page,'Funciona');
    await todoPage.checkPreviewButton(page);
 });


 // Probar la imagen desde local cargando una campaña. 
 test('Images inside BUTTON from local', async ({ page }) => {
  // Add image url  inside Button  
  await page.getByRole('button', { name: 'Button' }).first().click();    
  await todoPage.loadImageLocal(page,'Funciona');
  await todoPage.checkPreviewButton(page);
});

});