
import { test, expect, devices, type Page} from '@playwright/test';

const { TodoPage } = require('../chatbot/util.spec');


test.describe("Oncampus project Testing",() => {
  let todoPage;   

    test.beforeEach(async ({ page }) => {
      todoPage = new TodoPage(page);
      await todoPage.goto('https://main-staging.oncampusabroad.com/');

      // Cname de prod de Oncampus
      //await todoPage.goto('https://on-campus.opseeker.com/oncampus-abroad/rotterdam-eaie-event-2023/index.html');
      
      });        

test('Check responsiveness, menu', async ({ page }) => {
    await page.getByRole('link', { name: 'PRODUCTS' }).click();
    await page.getByText('FAQ').click();
    await page.getByText('CONTACT', { exact: true }).click();
    await page.locator('.sc-kgTSHT').first().click();
    await page.getByText('+').first().click();
    await page.getByText('+').nth(1).click();
    await page.getByText('+').nth(2).click();
    await page.getByText('+').nth(3).click();
    await page.getByText('+').nth(4).click();
    await page.getByRole('button', { name: 'Contratar' }).click();
    await page.getByRole('button', { name: 'Send us an email' }).click();
    await page.getByRole('button', { name: 'SUBMIT' }).click();
    await page.getByPlaceholder('Name').fill('Rosana');
    await page.getByPlaceholder('Email').click();
    await page.getByPlaceholder('Email').fill('rosanallilart@beway.org');
    await page.getByPlaceholder('Message').click();
    await page.getByPlaceholder('Message').fill('qa manager');
    await page.locator('#check_one').check();
    await page.locator('#check_one').uncheck();
    await page.locator('#check_one').check();
    await page.locator('#check_agreeNewsletter').check();
    await page.getByRole('button', { name: 'SUBMIT' }).click();
  });

});