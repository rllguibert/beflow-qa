import { test, expect,  type Page  } from '@playwright/test';
const { TodoPage } = require('./util.spec');

test.describe("Button Component Testing",() => {
  let todoPage;
  test.use({ viewport: { width: 1980, height: 1200 } });

  
  test.beforeEach(async ({ page }) => {
    todoPage = new TodoPage(page);
    await todoPage.goto('https://dboteditor-qa.opseeker.com/');  
    await page.getByRole('menuitem', { name: 'ChapterAdd' }).locator('svg').click();
    
  });

  test('Text inside Button Component', async ({ page }) => {  
    await page.getByRole('button', { name: 'Button' }).first().click();   
    // Add text inside Box
    await todoPage.addText('Hola Button Element');
    await page.waitForTimeout(10000);
    await todoPage.checkPreviewButton(page);  
    
  });

  test('Images inside Button Component', async ({ page}) => {
    await page.getByRole('button', { name: 'Button' }).first().click();   
      // Add image url  inside Box  
      await todoPage.addImage('Funciona');
      await page.waitForTimeout(10000);
      await todoPage.checkPreviewButton(page);
    });
  
  test('Gif url inside Button Component', async ({ page }) => {
    await page.getByRole('button', { name: 'Button' }).first().click();   
    // Add Gif url  inside Box  
      await todoPage.addGif('Funciona');
      await page.waitForTimeout(10000);
      await todoPage.checkPreviewButton(page);

});


test('Search in Gif inside Button Component', async ({ page }) => {   
  await page.getByRole('button', { name: 'Button' }).first().click();   
        // Add Gif searching input  inside Box  
  await todoPage.addSearchGif();
  await page.waitForTimeout(10000);
  await todoPage.checkPreviewButton(page);

});

test('Youtube inside Button Component test', async ({ page }) => {
  await page.getByRole('button', { name: 'Button' }).first().click();   
        // Add youtube url  inside Box  
 await todoPage.addVideo('https://youtu.be/l7gTMTr69N0');
 await page.waitForTimeout(10000);
 await todoPage.checkPreviewButton(page);

});


test('Text Input Clear Selection selected inside Button Component', async ({ page}) => {
  await page.getByRole('button', { name: 'Button' }).first().click();   
  //Add  Text Input clear selection option
  await todoPage.addTextInput(page);
});


test('Text Input email selected inside Button Component', async ({ page}) => {
  await page.getByRole('button', { name: 'Button' }).first().click();   
    //Add  Text Input email option
    await todoPage.addEmail(page);
  });


  test('Text Input Number selected inside Button Component', async ({ page}) => {
    await page.getByRole('button', { name: 'Button' }).first().click();   
    await todoPage.addNumero(page);
   
  })

  test('AHP selected inside Button Component', async ({ page}) => {
    await page.getByRole('button', { name: 'Button' }).first().click();   
     //Add  Text Input AHP option
     await todoPage.addAHP(page);

  });

  test(' MULTICHOICE selected inside Button Component ', async ({ page}) => {
         //Add  Text Input MULTICHPOICE option
         await page.getByRole('button', { name: 'Button' }).first().click();   
        await todoPage.addMultichoice(page);
  });

  



});


