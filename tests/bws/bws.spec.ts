

import { test, expect, devices, type Page} from '@playwright/test';

const { TodoPage } = require('../chatbot/util.spec');


test.describe("BWS Conversation Testing",() => {
  let todoPage;   

    test.beforeEach(async ({ page }) => {
      todoPage = new TodoPage(page);

      // Cname de prod de Oncampus
      await todoPage.goto('https://beflow.opseeker.com/the-behavioral-way-summit-mexico/the-behavioral-way-summit/index.html');
      
      });       

      test(' BWS test', async ({ page }) => {
        await page.getByTestId('bubble-button-3').getByRole('button', { name: 'Zoom image' }).click();
        await page.getByText('Me aburrí un poco, pero bueno...').click();
        await page.getByText('Ay, me vas a hacer preguntas?').click();
        await page.getByTestId('bubble-button-20').locator('div').click();
        await page.getByText('Vi el evento en streaming').click();
        await page.locator('div:nth-child(3) > .likert-option-icon').click();
        await page.getByText('No demasiado interesantes. Hay temas más relevantes en Behavioral Science').click();
        await page.getByText('Cómo aplicar BeSci en una organización').click();
        await page.locator('#inputrounded').click();
        await page.locator('#inputrounded').fill('Qa manager');
        await page.locator('#inputrounded').press('Enter');
        await page.getByText('Prefiero el evento presencial').click();
        await page.getByText('¡Claro que si!').click();
        await page.getByTestId('bubble-button-90').getByText('Acepto').click();
        await page.getByTestId('bubble-button-86').getByText('Acepto').click();
        await page.locator('#inputrounded').click();
        await page.locator('#inputrounded').fill('Rosana');
        await page.locator('#inputrounded').press('Enter');
        await page.locator('#inputrounded').click();
        await page.locator('#inputrounded').fill('Guibert');
        await page.locator('#inputrounded').press('Enter');
        await page.locator('#inputrounded').click();
        await page.locator('#inputrounded').fill('rosanallilart@beway.org');
        await page.locator('#inputrounded').press('Enter');
      });



test('Flow test', async ({ page }) => {
    await page.getByTestId('bubble-button-3').getByRole('button', { name: 'Zoom image' }).click();
    await page.getByText('Mejor hubiera sido ver la tele').click();
    await page.getByText('Ay, me vas a hacer preguntas?').click();
    await page.getByText('¡Vamos que nos vamos!').click();
    await page.getByText('Estuve en el Museo Casa de la Bola').click();
    await page.getByText('Hubiera podido ser mejor').click();
    await page.locator('div:nth-child(4) > .likert-option-icon > div').click();
    await page.getByText('Bastante interesantes.').click();
    await page.getByText('Los casos de éxitos de las empresas').click();
    await page.getByTestId('bubble-button-43').getByRole('button', { name: 'Zoom image' }).click();
    await page.getByText('No, no tuve oportunidad').click();
  });



test('Not accept privacy', async ({ page }) => {
    await page.getByTestId('bubble-button-3').getByRole('button', { name: 'Zoom image' }).click();
    await page.getByText('Mejor hubiera sido ver la tele').click();
    await page.getByText('Ay, me vas a hacer preguntas?').click();
    await page.getByText('¡Vamos que nos vamos!').click();
    await page.getByText('Estuve en el Museo Casa de la Bola').click();
    await page.getByText('No me gustó para nada').click();
    await page.locator('div:nth-child(5) > .likert-option-icon > div').click();
    await page.getByText('Muy interesantes. Aprendí más de lo esperado.').click();
    await page.getByText('Cómo llevar a cabo experimentos').click();
    await page.getByTestId('bubble-button-43').getByRole('button', { name: 'Zoom image' }).click();
    await page.getByText('Sí, durante el café o el almuerzo').click();
    await page.locator('#inputrounded').click();
    await page.locator('#inputrounded').fill('BWS');
    await page.locator('#inputrounded').press('Enter');
    await page.getByText('Prefiero el evento online').click();
    await page.getByText('Prefiero quedar anónim@').click();
  });

});