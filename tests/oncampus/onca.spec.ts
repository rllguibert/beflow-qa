

import { test, expect, devices, type Page} from '@playwright/test';

const { TodoPage } = require('../chatbot/util.spec');


test.describe("Oncampus Conversation Testing",() => {
  let todoPage;   

    test.beforeEach(async ({ page }) => {
      todoPage = new TodoPage(page);

      // Cname de prod de Oncampus
      //await todoPage.goto('https://on-campus.opseeker.com/oncampus-abroad/rotterdam-eaie-event-2023/index.html');
      
      await todoPage.goto('https://beflow.opseeker.com/staging/oncampus-abroad/rotterdam-eaie-event-2023/index.html');
      });       

      test('test', async ({ page }) => {
        await page.getByTestId('bubble-button-1').getByRole('button', { name: 'Zoom image' }).click();
        await page.getByText('Yes, of course').click();
        await page.getByText('Yes!').click();
        await page.locator('div:nth-child(2) > .likert-option-icon > div').click();
        await page.getByTestId('submit_textInput').click();
        await page.getByTestId('bubble-button-21').getByRole('button', { name: 'Zoom image' }).click();
        await page.getByTestId('bubble-button-31').getByRole('button', { name: 'Zoom image' }).click();
        await page.getByText('I accept').click();
        await page.getByPlaceholder('Type your e-mail, please').click();
        await page.getByPlaceholder('Type your e-mail, please').fill('rosanallilart@beway.org');
        await page.getByTestId('submit_textInput').click();
      });

});
