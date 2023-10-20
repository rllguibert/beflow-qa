import { test, expect,  type Page  } from '@playwright/test';
const { TodoPage } = require('./util.spec');


test.describe("BOX Component Testing",() => {
  let todoPage;

     test.beforeEach(async ({ page }) => {
    todoPage = new TodoPage(page);
    await todoPage.goto('https://dboteditor-qa.opseeker.com/');
    await page.getByRole('menuitem', { name: 'ChapterAdd' }).locator('svg').click();
   
    await page.getByRole('button', { name: 'Box' }).first().click();     
   
  });

  test('Text inside Box Component test', async ({ page }) => {
    // Add text inside Box
    await todoPage.addText('Hola Box Element');
    await todoPage.checkPreviewButton(page);  
    await page.waitForTimeout(10000);
  });

  test('Images inside Box Component test', async ({ page }) => {
    // Add text inside Box
     // Add image url  inside Box  
    await todoPage.addImage('Funciona');
    await todoPage.checkPreviewButton(page);
  });

  test('Gif url inside Box Component test', async ({ page }) => {
      // Add Gif url  inside Box  
    await todoPage.addGif('Funciona');
    await todoPage.checkPreviewButton(page);
  });


  test('Search in Gif inside Box Component test', async ({ page }) => {   
          // Add Gif searching input  inside Box  
    await todoPage.addSearchGif();
    await todoPage.checkPreviewButton(page);

  });

  test('Youtube inside Box Component test', async ({ page }) => {
   await todoPage.addVideo('https://youtu.be/l7gTMTr69N0');
   await page.getByRole('button', { name: 'ChatOption Preview' }).click();
   await page.waitForTimeout(10000);
   await page.getByTestId('bubble-bubble-0').click({force: true});
   await page.getByRole('button', { name: 'Close' }).click();
  });

  test('Link inside Box Component test', async ({ page }) => {  
    // Add Link inside Box  
    await todoPage.addLink('https://en.wikipedia.org/wiki/Marathon');
    await page.getByRole('button', { name: 'ChatOption Preview' }).click();
    const page3Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'marathon' }).click();
    const page3 = await page3Promise;
    await page3.waitForLoadState();
    await page3.bringToFront();
    await page3.close();
    await page.waitForTimeout(1000);
  });
// testear la funcionalidad copiar, pegar es compleja implementarla desde playwright  


  

      });
