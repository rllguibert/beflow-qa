import { test, expect, devices, type Page} from '@playwright/test';

const { TodoPage } = require('../chatbot/util.spec');


test.describe("Tulum Perfilador Testing",() => {
  let todoPage;   

    test.beforeEach(async ({ page }) => {
      todoPage = new TodoPage(page);
      await todoPage.goto('https://tulum.opseeker.com/tulum/tulumsmartsurvey/index.html');
      
      });           



test('PerfiladorESP=1 test', async ({ page }) => {
  await page.getByText('Spanish/ Español').click();
  await page.getByText('¡Comencemos!').click();
  await page.getByText('Sí').click();
  await page.getByText('México').click();
  await page.locator('#input').click();
  await page.locator('#input').fill('1982');
  await page.getByTestId('submit_textInput').click();
  await page.getByText('Hombre').click();
  await page.getByText('Salir a comer y beber en restaurantes 🌮🍹').click();
  await page.getByText('Con la familia (pareja, hijos…)').click();
  await page.getByRole('button', { name: 'Responder' }).click();
  await page.getByText('¡Justo uno de esos 3!').click();
  await page.getByText('Un nuevo miembro en la familia 👶', { exact: true }).click();
  await page.getByRole('button', { name: 'Responder' }).click();
  await page.getByText('¡Por supuesto!').click();
  await page.getByText('Pasar las vacaciones').click();
  await page.getByRole('button', { name: 'Responder' }).click();
  await page.getByText('Leer política de protección de datos').click();
  await page.getByText('Acepto la política de protección de datos').click();
  await page.waitForTimeout(1000);
  await page.locator('#input').click();
  await page.locator('#input').fill('rosanallilart@beway.org');
  await page.waitForTimeout(1000);
  await page.locator('#input').press('Enter');
  await page.locator('#input').click();
  await page.locator('#input').fill('Rosana Guibert');
  await page.getByTestId('submit_textInput').click();
  await page.waitForTimeout(1000);
});



test('PerfiladorIngles= 2 Conditicion number Two', async ({ page }) => {
  await page.getByText('English/ Inglés').click();
  await page.getByText('Let´s go!').click();
  await page.getByText('No').click();
  await page.getByText('United States').click();
  await page.locator('#input').click();
  await page.locator('#input').fill('1981');
  await page.getByTestId('submit_textInput').click();
  await page.getByText('Woman').click();
  await page.getByText('Sports activities ⛳🚴🎾').click();
  await page.getByText('With friends').click();
  await page.getByRole('button', { name: 'Responder' }).click();
  await page.getByText('Something different').click();
  await page.locator('#input').click();
  await page.locator('#input').fill('skydiving');
  await page.getByTestId('submit_textInput').click();
  await page.getByText('Probably').click();
  await page.getByText('Live with the family').click();
  await page.getByText('Retire').click();
  await page.getByRole('button', { name: 'Responder' }).click();
  await page.getByText('Read data privacy policy').click();
  await page.waitForTimeout(1000);
  await page.getByText('I accept the data privacy policy').click();
  await page.locator('#input').click();
  await page.locator('#input').fill('rosanallilart@beway.org');
  await page.waitForTimeout(1000);
  await page.locator('#input').press('Enter');
  await page.locator('#input').click();
  await page.locator('#input').fill('Rosana Guibert');
  await page.getByTestId('submit_textInput').click();
  await page.waitForTimeout(1000);
});



test('PerfiladorES= 3 test', async ({ page }) => {
  await page.locator('div').filter({ hasText: /^Spanish\/ Español$/ }).nth(3).click();
  await page.getByText('¡Comencemos!').click();
  await page.getByText('Sí').click();
  await page.getByText('Canadá').click();
  await page.locator('#input').click();
  await page.locator('#input').fill('1980');
  await page.locator('#input').press('Enter');
  await page.getByText('Otra identificación').click();
  await page.getByText('Actividades en la naturaleza... 🐢🤿').click();
  await page.getByText('Con compañeros de trabajo').click();
  await page.getByRole('button', { name: 'Responder' }).click();
  await page.getByText('Nada a la vista').click();
  await page.getByText('Trabajar en remoto').click();
  await page.getByRole('button', { name: 'Responder' }).click();
  await page.getByText('Leer política de protección de datos').click();
  await page.getByText('Acepto la política de protección de datos').click();
  await page.waitForTimeout(1000);
  await page.locator('#input').click();
  await page.locator('#input').fill('rosanallilart@beway.org');
  await page.waitForTimeout(1000);
  await page.locator('#input').press('Enter');
  await page.locator('#input').click();
  await page.locator('#input').fill('Rosana Guibert');
  await page.getByTestId('submit_textInput').click();

  await page.waitForTimeout(1000);
});


test.only('PerfiladorIngles= 4 test', async ({ page }) => {
  await page.getByText('English/ Inglés').click();
  await page.getByText('Let´s go!').click();
  await page.getByText('No').click();
  await page.getByText('Latin America').click();
  await page.locator('#input').click();
  await page.locator('#input').fill('Cuba');
  await page.locator('#input').press('Enter');
  await page.locator('#input').click();
  await page.locator('#input').fill('1985');
  await page.locator('#input').press('Enter');
  await page.getByText('Men').click();
  await page.getByText('Time to myself and relax... 🏖️💆‍♂️').click();
  await page.getByText('With work colleagues').click();
  await page.locator('div').filter({ hasText: /^I prefer to be at home$/ }).nth(1).click();
  await page.getByRole('button', { name: 'Responder' }).click();
  await page.getByText('One of those 3!').click();
  await page.getByText('A new job 💻', { exact: true }).click();
  await page.getByRole('button', { name: 'Responder' }).click();
  await page.getByText('Maybe...').click();
  await page.getByText('Retire').click();
  await page.getByText('Invest').click();
  await page.getByRole('button', { name: 'Responder' }).click();
  await page.getByText('Read data privacy policy').click();
  await page.getByText('I accept the data privacy policy').click();
  await page.waitForTimeout(1000);
  await page.locator('#input').click();
  await page.locator('#input').fill('rosanallilart@beway.org');
  await page.waitForTimeout(1000);
  await page.locator('#input').press('Enter');
  await page.locator('#input').click();
  await page.locator('#input').fill('Rosana Guibert');
  await page.getByTestId('submit_textInput').click();
  await page.waitForTimeout(1000);
});



test('PerfiladorESP= 5 test', async ({ page }) => {
  await page.getByText('Spanish/ Español').click();
  await page.getByText('¡Comencemos!').click();
  await page.locator('div').filter({ hasText: /^Sí$/ }).nth(3).click();
  await page.getByText('Europa').click();
  await page.locator('#input').click();
  await page.locator('#input').fill('España');
  await page.locator('#input').press('Enter');
  await page.locator('#input').click();
  await page.locator('#input').fill('1990');
  await page.locator('#input').press('Enter');
  await page.getByText('Mujer').click();
  await page.getByText('Trabajar, estudiar o hacer networking 🖋️🤝').click();
  await page.getByText('Me gusta conocer gente nueva').click();
  await page.getByRole('button', { name: 'Responder' }).click();
  await page.getByText('Otro diferente').click();
  await page.locator('#input').click();
  await page.locator('#input').fill('piraguismo');
  await page.locator('#input').press('Enter');
  await page.getByText('¡Por supuesto!').click();
  await page.locator('div').filter({ hasText: /^Pasar las vacaciones$/ }).nth(1).click();
  await page.getByRole('button', { name: 'Responder' }).click();
  await page.getByText('Leer política de protección de datos').click();
  await page.getByText('Acepto la política de protección de datos').click();
  await page.waitForTimeout(1000);
   await page.locator('#input').click();
  await page.locator('#input').fill('rosanallilart@beway.org');
  await page.waitForTimeout(1000);
  await page.locator('#input').press('Enter');
  await page.locator('#input').click();
  await page.locator('#input').fill('Rosana Guibert');
  await page.getByTestId('submit_textInput').click();
});





})

