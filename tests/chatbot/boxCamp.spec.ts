import { test, expect,  type Page  } from '@playwright/test';
const { TodoPage } = require('./util.spec');


test.describe("BOX Component Testing",() => {
  let todoPage;

    test.use({ viewport: { width: 1980, height: 1200 } });


  test.beforeEach(async ({ page }) => {
    todoPage = new TodoPage(page);
    await todoPage.goto('https://dboteditor-qa.opseeker.com/');
    await todoPage.loginCampaign(page);
    await todoPage.cargaChatfromCampaign(page);
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
     // Add image url  inside Box  
    await todoPage.addImage('Funciona');
    await todoPage.checkPreviewButton(page);
  });

  // Probar la imagen desde local cargando una campaña. 
  test('Images inside from local', async ({ page }) => {
    // Add image url  inside Box  
   await todoPage.loadImageLocal(page,'Funciona');
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


  
  test.skip('Should be displayed Groups panel if select many bubble at the same time', async ({ page }) => {
    const gruposNombre = page.getByPlaceholder('Name of the new group');
    const deSelectGrupos = page.getByRole('button', { name: 'Deselect all' });
    const selectAll = page.getByRole('button', { name: 'See all' });
    //const inputFill = page.getByPlaceholder('Write text here');
    await todoPage.loginCampaign(page);      
    await todoPage.cargaChatfromCampaign(page);   
    await page.locator('canvas').click({
      position: {
        x: 490,
        y: 313
      }
    });
    await page.locator('canvas').click({
      modifiers: ['Shift'],
      position: {
        x: 1179,
        y: 707
      }
    });
    await page.locator('canvas').click({
      modifiers: ['Shift'],
      position: {
        x: 412,
        y: 208
      }
    });

    await page.waitForTimeout(1000);        
    await gruposNombre.click();
    await gruposNombre.fill('GrupoPrueba');
    await page.getByRole('button', { name: 'FormCheckmark Create and add' }).click();
    await page.getByRole('menuitem', { name: 'Groups' }).click();
    await deSelectGrupos.click();
    await selectAll.click();
    await page.locator('canvas').click({
      position: {
        x: 378,
        y: 220
      }
    });
                      
            
        });

      });
