

import { test, expect, devices, type Page} from '@playwright/test';

const { TodoPage } = require('../chatbot/util.spec');


test.describe("Oncampus Conversation Testing",() => {
  let todoPage;   

    test.beforeEach(async ({ page }) => {
      todoPage = new TodoPage(page);

      // Cname de prod de Oncampus
      await todoPage.goto('https://on-campus.opseeker.com/oncampus-abroad/rotterdam-eaie-event-2023/index.html');
      
      });       


test('test', async ({ page }) => {
    await page.getByTestId('bubble-button-1').getByRole('button', { name: 'Zoom image' }).click();
    await page.getByText('Yes, of course').click();
    await page.getByText('Yes!').click();
    await page.getByText('1 Not important at all').click();
    await page.getByPlaceholder('Please type why would you recommend a travel insurance over another').click();
    await page.getByPlaceholder('Please type why would you recommend a travel insurance over another').fill('rhrthrthrthtrh');
    await page.getByPlaceholder('Please type why would you recommend a travel insurance over another').press('Enter');
    await page.getByTestId('bubble-button-21').getByRole('button', { name: 'Zoom image' }).click();
    await page.getByTestId('bubble-button-30').getByRole('button', { name: 'Zoom image' }).click();
    await page.getByTestId('bubble-button-32').locator('div').click();
    await page.getByPlaceholder('Type your e-mail, please').click();
    await page.getByPlaceholder('Type your e-mail, please').fill('rosanallilart@gmail.com');
    await page.getByPlaceholder('Type your e-mail, please').press('Enter');
  });