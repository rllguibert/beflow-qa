

import { test, expect, devices, type Page} from '@playwright/test';

const { TodoPage } = require('../chatbot/util.spec');


test.describe("BeLeads Conversation Testing",() => {
  let todoPage;   

    test.beforeEach(async ({ page }) => {
      todoPage = new TodoPage(page);

      // Cname de prod de Beleads
     // await todoPage.goto('https://beflow.opseeker.com/internal/beleads/index.html');

      await todoPage.goto('https://beflow.opseeker.com/staging/internal/beleads/index.html');
      
      
      });  
      
      


test('Flow test', async ({ page }) => {
    const responder = page.getByTestId('bubble-no-testid');
    await page.getByText('A ver si es tan bueno como dicen...').click();
    await page.getByText('Ya está. Acepto. Vamos al lío.').click();
    await page.getByTestId('bubble-button-17').getByText('Veamos...').click();
    await page.getByTestId('bubble-button-22').click();
    await page.getByText('Marketing / Comunicación / CX / UX...').click();
    await page.getByPlaceholder('Ejemplo: Head of Marketing EMEA, Customer Engagement and Loyalty').click();
    await page.getByPlaceholder('Ejemplo: Head of Marketing EMEA, Customer Engagement and Loyalty').fill('qa');
    await page.getByTestId('submit_textInput').click();
    await page.getByTestId('bubble-button-50').locator('div').click();
    await page.getByTestId('bubble-button-56').getByText('No').click();
    await page.getByText('Entre 0 y 50').click();
    await page.getByText('Formación en Ciencias del Comportamiento').click();
    await page.getByPlaceholder('Tu mail').click();
    await page.getByPlaceholder('Tu mail').fill('rosana@opseeker.com');
    await page.getByPlaceholder('Tu mail').press('Enter');
    await page.getByPlaceholder('Tu nombre').click();
    await page.getByPlaceholder('Tu nombre').fill('R');
    await page.getByTestId('submit_textInput').click();
    await page.getByText('¡Nada más!').click();
  });



test('Second Flow test', async ({ page }) => {
    await page.getByText('¡No veo el momento!').click();
    await page.getByTestId('bubble-button-139').click();
    await page.getByTestId('bubble-button-142').click();
    await page.waitForTimeout(30000);
    await page.getByTestId('bubble-button-145').getByText('¡Menos preámbulos y dale!').click();
    await page.getByText('Seguros').click();
    await page.getByText('Ventas').click();
    await page.getByPlaceholder('Ejemplo: Head of Marketing EMEA, Customer Engagement and Loyalty').click();
    await page.getByPlaceholder('Ejemplo: Head of Marketing EMEA, Customer Engagement and Loyalty').fill('qa');
    await page.getByTestId('submit_textInput').click();
    await page.getByTestId('bubble-button-51').getByText('No').click();
    await page.getByTestId('bubble-button-55').getByText('Sí').click();
    await page.getByText('Entre 50 y 300').click();
    await page.getByText('Me gustaría que nos ayudaseis a difundir internamente y escalar las Ciencias del Comportamiento').click();
    await page.getByPlaceholder('Tu mail').click();
    await page.getByPlaceholder('Tu mail').fill('rosana@opseeker.com');
    await page.getByPlaceholder('Tu mail').press('Enter');
    await page.getByPlaceholder('Tu nombre').click();
    await page.getByPlaceholder('Tu nombre').fill('R');
    await page.getByTestId('submit_textInput').click();
    await page.getByPlaceholder('Puedes escribir lo que quieras :)').click();
    await page.getByPlaceholder('Puedes escribir lo que quieras :)').fill('Grazie!');
    await page.getByTestId('submit_textInput').click();
  });



test('Three Flow test', async ({ page }) => {
    await page.getByText('A ver si es tan bueno como dicen...').click();
    await page.getByTestId('bubble-button-138').click();
    await page.getByTestId('bubble-button-17').getByText('Veamos...').click();
    await page.getByText('Retail').click();
    await page.getByText('RRHH').click();
    await page.getByPlaceholder('Ejemplo: Head of Marketing EMEA, Customer Engagement and Loyalty').click();
    await page.getByPlaceholder('Ejemplo: Head of Marketing EMEA, Customer Engagement and Loyalty').fill('qa');
    await page.getByTestId('submit_textInput').click();
    await page.getByTestId('bubble-button-52').locator('div').click();
    await page.getByTestId('bubble-button-57').getByText('No lo sé').click();
    await page.getByText('Entre 300 y 2.000').click();
    await page.getByText('Tengo algo de presupuesto y quiero comprobar el impacto de las Ciencias del Comportamiento').click();
    await page.getByText('¿Cómo?').click();
    await page.getByPlaceholder('Tu mail').click();
    await page.getByPlaceholder('Tu mail').fill('rosana@opseeker.com');
    await page.getByPlaceholder('Tu mail').press('Enter');
    await page.getByPlaceholder('Tu nombre').click();
    await page.getByPlaceholder('Tu nombre').fill('R');
    await page.getByTestId('submit_textInput').click();
    await page.getByText('¡Nada más!').click();
  });



test('Four Flow test', async ({ page }) => {
    await page.getByText('A ver si es tan bueno como dicen...').click();
    await page.getByTestId('bubble-button-138').click();
    await page.getByTestId('bubble-button-17').click();
    await page.getByText('Retail').click();
    await page.getByText('Data').click();
    await page.getByPlaceholder('Ejemplo: Head of Marketing EMEA, Customer Engagement and Loyalty').click();
    await page.getByPlaceholder('Ejemplo: Head of Marketing EMEA, Customer Engagement and Loyalty').fill('qa');
    await page.getByTestId('submit_textInput').click();
    await page.getByTestId('bubble-button-52').locator('div').click();
    await page.getByTestId('bubble-button-57').getByText('No lo sé').click();
    await page.getByText('Entre 2.000 y 10.000').click();
    await page.getByText('Queremos que nos ayudéis a implementar transversalmente las Ciencias del Comportamiento en toda la organización').click();
    await page.getByPlaceholder('Tu mail').click();
    await page.getByPlaceholder('Tu mail').fill('rosana@opseeker.com');
    await page.getByPlaceholder('Tu mail').press('Enter');
    await page.getByPlaceholder('Tu nombre').click();
    await page.getByPlaceholder('Tu nombre').fill('R');
    await page.getByTestId('submit_textInput').click();
    await page.getByText('¡Nada más!').click();
  });


  test('Five Flow test', async ({ page }) => {
    await page.getByText('A ver si es tan bueno como dicen...').click();
    await page.getByTestId('bubble-button-138').click();
    await page.waitForTimeout(30000);
    await page.getByTestId('bubble-button-17').click();
    await page.getByPlaceholder('Otro sector').click();
    await page.getByPlaceholder('Otro sector').fill('FrontEnd');
    await page.getByTestId('submit_textInput').click();
    await page.getByPlaceholder('Otro departamento').click();
    await page.getByPlaceholder('Otro departamento').fill('QA');
    await page.getByTestId('submit_textInput').click();
    await page.getByPlaceholder('Ejemplo: Head of Marketing EMEA, Customer Engagement and Loyalty').click();
    await page.getByPlaceholder('Ejemplo: Head of Marketing EMEA, Customer Engagement and Loyalty').fill('qa');
    await page.getByTestId('submit_textInput').click();
    await page.getByTestId('bubble-button-52').locator('div').click();
    await page.getByTestId('bubble-button-57').getByText('No lo sé').click();
    await page.getByText('Entre 0 y 50').click();
    await page.getByText('Formación en Ciencias del Comportamiento').click();
    await page.getByPlaceholder('Tu mail').click();
    await page.getByPlaceholder('Tu mail').fill('rosana@opseeker.com');
    await page.getByPlaceholder('Tu mail').press('Enter');
    await page.getByPlaceholder('Tu nombre').click();
    await page.getByPlaceholder('Tu nombre').fill('R');
    await page.getByTestId('submit_textInput').click();
    await page.getByText('¡Nada más!').click();
     });
 })
