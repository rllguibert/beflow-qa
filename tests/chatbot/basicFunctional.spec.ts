import { test, expect,  type Page  } from '@playwright/test';
const { TodoPage } = require('./util.spec');


test.describe("Beflow Editor Testing",() => {
  let todoPage;

    test.use({ viewport: { width: 1600, height: 900 } });

    test.beforeEach(async ({ page }) => {
      todoPage = new TodoPage(page);
      await todoPage.goto('https://dboteditor-qa.opseeker.com/');
     
    });     
    
      
  
test.describe("Menu Bar Testing",() => {
  test.only('A new blank file should be created->New File', async ({ page }) => {    
    const newFileButton =  page.getByRole('button', { name: 'Yes, create a new file' });
    const newtitle = page.getByTitle('New File').locator('div').nth(1);
    const banner = page.getByRole('banner');
    const newFileItem = page.getByRole('menuitem', { name: 'New file' });
    await todoPage.loginCampaign(page);
     // Open the conversation from capampaign
    await todoPage.cargaChatfromCampaign(page);
     // create a filemenu locator
     const fileMenu =  page.getByRole('menuitem', { name: 'File', exact: true });   
    await fileMenu.click();
    await expect(page.getByRole('menuitem', { name: 'File', exact: true })).toBeVisible();   
   //  Check New File menu.
    await fileMenu.click();
    await newFileItem.click();
    await expect(banner).toBeVisible();
    await expect(newtitle).toBeVisible();
    await expect(newFileButton).toBeVisible();
    await page.waitForTimeout(1000);
    await newFileButton.click();
  })

  test('Should be fill in the input and then save the conversation', async ({ page }) => { 
    // create a filemenu locator
    const fileMenu =  page.getByRole('menuitem', { name: 'File', exact: true });
    const saveMenu = page.getByRole('menuitem', { name: 'Save conversation' });
    const inputChat = page.getByText('Untitled');
    const inputChatTwo = page.getByPlaceholder('Untitled');
     //  Check fill name input conversation
    await inputChat.click({force: true});
    await inputChatTwo.fill('pruebatest');   
    await fileMenu.click();
      //  Check Save local conversation.    
    const downloadPromise = page.waitForEvent('download');
    await saveMenu.click(); 
    await expect(downloadPromise).toBeTruthy();  
    const download = await downloadPromise;
});
    

  test('Should be open File conversation from local', async ({ page }) => { 
       // create a filemenu locator
        const fileMenu =  page.getByRole('menuitem', { name: 'File', exact: true });       
        await fileMenu.click();       
       // Start waiting for file chooser before clicking. Note no await.
        const fileChooserPromise = page.waitForEvent('filechooser');
        await page.getByRole('menuitem', { name: 'Open conversation' }).click();
        const fileChooser = await fileChooserPromise;
        await page.waitForTimeout(1000);
        await fileChooser.setFiles('tests/MagiaTestChat.json');
        // Open the conversation from capampaign
        await todoPage.checkPreviewButton(page);

  });

});

                      
test.describe("Setting Panel",() => {                    
  test('Should be displayed version text, change language, background color and select debug mode', async ({ page }) => {
    const espanolCheck = page.getByRole('radiogroup').filter({ hasText: 'EnglishSpanish' }).locator('div').nth(4);
    const opseekerFondocheck = page.getByRole('radiogroup').filter({ hasText: 'OpseekerChat' }).locator('div').nth(1);
    const chatFondocheck = page.getByRole('radiogroup').filter({ hasText: 'OpseekerChat' }).locator('div').nth(4);
    const debugModeCheck = page.locator('label').filter({ hasText: 'Modo debug' }).locator('div').nth(1);
    const debugButton =  page.getByRole('button', { name: 'DocumentText Ver documento dbot' });
    const debugPanel = await page.locator('.StyledLayer__StyledContainer-sc-rmtehz-2 > div > div');
    const salirPanelSetting = page.locator('div').filter({ hasText: 'AjustesVersion: 2.57.3IdiomaInglésEspañolEsquema de colorOpseekerChatDebugModo d' }).nth(2);
    

    await todoPage.loginCampaign(page);
    await todoPage.cargaChatfromCampaign(page);                
    await page.getByRole('menuitem', { name: 'Settings' }).click();    
    await espanolCheck.click();
    expect(await espanolCheck.isChecked()).toBeTruthy();
    await opseekerFondocheck.click();
    expect(await opseekerFondocheck.isChecked()).toBeTruthy();
    await chatFondocheck.click();
    expect(await chatFondocheck.isChecked()).toBeTruthy();
    await debugModeCheck.click();
    expect(await debugModeCheck.isChecked()).toBeTruthy();
    await salirPanelSetting.press('Escape');
    await debugButton.click();
    await debugButton.press('Escape');
    expect(await debugPanel.isVisible());
  })

})

});
