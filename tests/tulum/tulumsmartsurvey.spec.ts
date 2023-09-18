import { test, expect, devices, type Page} from '@playwright/test';

const { TodoPage } = require('../chatbot/util.spec');


test.describe("Tulum Smart Survey Testing",() => {
  let todoPage;   

    test.beforeEach(async ({ page }) => {
      todoPage = new TodoPage(page);
      await todoPage.goto('https://dbot-qa.opseeker.com/staging/tulum/tulumsmartsurvey/index.html');
      });           



test('PerfiladorESP=1 test', async ({ page }) => {
  const inputs = page.locator('#inputrounded');
  const spanishIntro = page.getByTestId('bubble-button-1');
  const responder = page.getByTestId('bubble-no-testid');
  const woman = page.getByTestId('bubble-button-31');
  await spanishIntro.click();
  await page.getByTestId('bubble-button-4').click();
  await page.getByTestId('bubble-button-6').click();
  await page.waitForTimeout(1000);
  await inputs.click();
  await inputs.fill('Vacaciones');
  await inputs.press('Enter');
  await page.getByTestId('bubble-button-10').click();
  await inputs.click();
  await inputs.fill('1982');
  await inputs.press('Enter');
  await woman.click();
  await page.getByTestId('bubble-button-34').click();
  await page.getByText('Con mi familia (pareja, hijos…)').click();
  await page.getByText('Con mis amigos').click();
  await responder.click();
  await page.getByTestId('bubble-button-180').click();
  await page.getByText('Un nuevo miembro en la familia 👶', { exact: true }).click();
  await page.getByText('Una nueva casa 🏠', { exact: true }).click();
  await responder.click();
  await page.getByTestId('bubble-button-66').click();
  await page.getByText('Pasar las vacaciones').click();
  await page.getByText('Vivir con mi familia').click();
  await responder.click();
  await page.getByTestId('bubble-button-270').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Descubrir próximas oportunidades en Tulum Country Club' }).click();
  const page1 = await page1Promise;
  await page.waitForTimeout(1000);
});



test('PerfiladorIngles= 2 Conditicion number Two', async ({ page }) => {
  const inputs = page.locator('#inputrounded');
  const englishIntro = page.getByTestId('bubble-button-2');
  const lestgo = page.getByTestId('bubble-button-83');
  const responder = page.getByTestId('bubble-no-testid');
  const man = page.getByTestId('bubble-button-30');
  await englishIntro.click();
  await lestgo.click();
  await page.getByTestId('bubble-button-86').click();
  await page.getByTestId('bubble-button-246').click();
  await page.getByTestId('bubble-button-90').click();
  await inputs.click();
  await inputs.fill('1985');
  await inputs.press('Enter');
  await page.getByTestId('bubble-button-110').click();
  await page.getByTestId('bubble-button-115').click();
  await page.locator('div').filter({ hasText: /^I prefer to be at home$/ }).first().click();
  await page.getByText('I prefer to be at home').click();
  await page.getByText('I like to meet new people').click();
  await responder.click();
  await page.getByText('Something different').click();
  await inputs.click();
  await inputs.fill('surfing');
  await inputs.press('Enter');
  await page.getByTestId('bubble-button-158').click();
  await page.getByText('I don´t know...').click();
  await page.getByText('Live with the family').click();
  await responder.click();
  await page.getByText('Of course! Contact me').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Read more' }).click();
  const page1 = await page1Promise;
  await page.waitForTimeout(1000);
  
});



test('PerfiladorES= 3 test', async ({ page }) => {
  const inputs = page.locator('#inputrounded');
  const spanishIntro = page.getByTestId('bubble-button-1');
  const responder = page.getByTestId('bubble-no-testid');
  const otra =  page.getByTestId('bubble-button-32');
  await spanishIntro.click();
  await page.getByTestId('bubble-button-4').click();
  await page.getByText('Sí').click();
  await inputs.click();
  await inputs.fill('vacaciones');
  await inputs.press('Enter');
  await page.getByText('México').click();
  await inputs.click();
  await inputs.fill('1983');
  await inputs.press('Enter');
  await otra.click();
  await page.getByText('Actividades en la naturaleza... 🐢🤿').click();
  await page.getByText('Me gusta conocer gente nueva').click();
  await page.getByText('Prefiero estar tranquilo en casa solo').click();
  await page.getByText('Con mis amigos').click();
  await responder.click();
  await page.getByText('Nada a la vista').click();
  await page.getByText('Invertir').click();
  await page.getByText('Trabajar en remoto').click();
  await page.getByText('No se...').click();
  await responder.click();
  await page.getByTestId('bubble-button-254').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Saber más' }).click();
  const page1 = await page1Promise;
  await page.waitForTimeout(1000);
 
});


test('PerfiladorIngles= 4 test', async ({ page }) => {
  const inputs = page.locator('#inputrounded');
  const englishIntro = page.getByTestId('bubble-button-2');
  const lestgo = page.getByTestId('bubble-button-83');
  const responder = page.getByTestId('bubble-no-testid');
  const man = page.getByTestId('bubble-button-110');
  await englishIntro.click();
  await lestgo.click();
  await page.getByText('No').click();
  await page.getByText('Yes').click();
  await page.getByText('Latin America').click();
  await inputs.click();
  await inputs.fill('Cuba');
  await inputs.press('Enter');
  await inputs.click();
  await inputs.fill('1985');
  await inputs.press('Enter');
  await man.click();
  await page.getByText('Time to myself and relax... 🏖️💆‍♂️').click();
  await page.getByText('With my family (partner, children...)').click();
  await page.getByText('With my friends').click();
  await page.getByText('I prefer to be at home').click();
  await page.getByText('I like to meet new people').click();
  await responder.click();
  await page.getByText('One of those 3!').click();
  await page.locator('div').filter({ hasText: /^A new job 💻$/ }).nth(1).click();
  await responder.click();
  await page.getByText('At the moment I don\'t think so').click();
  await page.getByText('work remotely').click();
  await page.getByText('Invest').click();
  await page.getByText('I don´t know...').click();
  await responder.click();
  await page.getByText('I prefer to keep exploring on my own').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Discover upcoming opportunities at Tulum Country Club' }).click();
  const page1 = await page1Promise;
  await page.waitForTimeout(1000);

 
});



test('PerfiladorESP= 5 test', async ({ page }) => {
  const inputs = page.locator('#inputrounded');
  const spanishIntro = page.getByTestId('bubble-button-1');
  const responder = page.getByTestId('bubble-no-testid');
  const otra =  page.getByTestId('bubble-button-32');
  await spanishIntro.click();
  await page.getByText('¡Comencemos!').click();
  await page.getByText('No', { exact: true }).click();
  await page.locator('#selectionBox').getByText('No').click();
  await page.getByText('Europa').click();
  await inputs.click();
  await inputs.fill('España');
  await inputs.press('Enter');
  await inputs.click();
  await inputs.fill('1982');
  await inputs.press('Enter');
  await otra.click();
  await page.getByText('Trabajar, estudiar o hacer networking 🖋️🤝').click();
  await page.getByText('Con mi familia (pareja, hijos…)').click();
  await page.getByText('Prefiero estar tranquilo en casa solo').click();
  await page.locator('div').filter({ hasText: /^Con compañeros de trabajo$/ }).nth(1).click();
  await page.locator('div').filter({ hasText: /^Con mis amigos$/ }).nth(1).click();
  await page.getByText('Prefiero estar tranquilo en casa solo').click();
  await page.locator('div').filter({ hasText: /^Me gusta conocer gente nueva$/ }).nth(1).click();
  await responder.click();
  await page.getByText('Nada a la vista').click();
  await page.getByText('Trabajar en remoto').click();
  await page.getByText('No se...').click();
  await page.locator('div').filter({ hasText: /^Jubilarme$/ }).nth(1).click();
  await page.getByText('Vivir con mi familia').click();
  await page.locator('div').filter({ hasText: /^Pasar las vacaciones$/ }).nth(1).click();
  await page.locator('div').filter({ hasText: /^Invertir$/ }).nth(1).click();
  await responder.click();
  await page.locator('#conversationContainer').getByRole('button', { name: 'Zoom image' }).nth(1).click();
  await page.getByRole('button', { name: 'Unzoom image' }).click();
  await page.getByText('Prefiero seguir explorando por mi cuenta').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Descubrir próximas oportunidades en Tulum Country Club' }).click();
  const page1 = await page1Promise;
  await page.waitForTimeout(1000);

});





test.skip('Probar tagname pais:otro ES', async ({ page }) => {
  const inputs = page.locator('#inputrounded');
  const spanishIntro = page.getByTestId('bubble-button-1');
  await spanishIntro.click();
  await page.getByText('¡Comencemos!').click();
  await page.getByText('Sí').click();
  await inputs.click();
  await inputs.fill('vacas');
  await inputs.press('Enter');
  await page.getByText('Otro').click();
  await inputs.click();
  await inputs.fill('Cuba');
  await inputs.press('Enter');
});



test.skip('Probar tagname pais:otro EN', async ({ page }) => {
  const inputs = page.locator('#inputrounded');
  await page.getByText('English/ Inglés').click();
  await page.getByText('Let´s go!').click();
  await page.getByText('No').click();
  await page.getByText('Yes').click();
  await page.getByText('Other').click();
  await inputs.click();
  await inputs.fill('Camerun');
  await inputs.press('Enter');
});






})

