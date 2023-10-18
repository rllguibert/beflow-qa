

import { test, expect, devices, type Page} from '@playwright/test';

const { TodoPage } = require('../chatbot/util.spec');


test.describe("AforeCoppel Conversation Testing",() => {
  let todoPage;   

    test.beforeEach(async ({ page }) => {
      todoPage = new TodoPage(page);

      // Cname de prod de Beleads
      await todoPage.goto('https://demoaforecoppel.opseeker.com/aforecoppel/Perfil_de_Ahorro/index.html');
      
      });  

 
const TODO_ITEMS = [
  'bubble-button-10',
  'bubble-button-11',
  'bubble-button-12',
  'bubble-button-13',
  'bubble-button-14',
  'bubble-button-15',
  'bubble-button-33',
  'bubble-button-34',
  'bubble-button-35',
  'bubble-button-248',
  'bubble-button-49',
  'bubble-button-50',
  'bubble-button-51',
  'bubble-button-52',
  'bubble-button-53',
  'bubble-button-67',
  'bubble-button-68',
  'bubble-button-69',
  'bubble-button-70',
  'bubble-button-81',
  'bubble-button-82',
  'bubble-button-83',
  'bubble-button-84',
  'bubble-button-85',
  'bubble-button-89',
  'bubble-button-90',
  'bubble-button-91',
  'bubble-button-188',
];
     
      
      


test('Intro test', async ({ page }) => {
  test('test', async ({ page }) => {
    await page.getByText('¡Comencemos!').click();
    await page.getByText('Listo, acepto. ¡Adelante!').click();
  });
  });



test('Soñador profile test', async ({ page }) => {
  await IntroFlow(page);
  await page.getByPlaceholder('Ejemplo: 1985').click();
  await page.getByPlaceholder('Ejemplo: 1985').fill('1982');
  await page.getByPlaceholder('Ejemplo: 1985').press('Enter');
  await page.getByTestId('bubble-button-10').getByText('Ocupado').click();
  await page.getByText('Después del 1 de julio de 1997').click();
  await page.getByText('Yo mismo').click();
  await page.getByTestId('bubble-button-43').getByRole('button', { name: 'Zoom image' }).click();
  await page.getByText('Menos de 1 mes').click();
  await page.getByTestId('bubble-button-170').getByRole('button', { name: 'Zoom image' }).click();
  await page.getByText('Sí, a corto plazo. Por ejemplo, un viaje en los próximos meses').click();
  await page.getByTestId('bubble-button-171').getByRole('button', { name: 'Zoom image' }).click();
  await page.getByText('Sí, ahorro dinero en efectivo o de manera informal').click();
  await page.getByText('Sí, ahorro personalmente para el retiro').click();
  await page.getByText('Regularmente').click();
  await page.getByText('Con Afore Coppel').click();
  await page.getByTestId('bubble-button-214').getByText('Sí').click();
  await page.getByTestId('bubble-button-172').getByRole('button', { name: 'Zoom image' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: '​¡Quiero probarlo ya!' }).click();// no funciona el link https://aforecoppel.com/simulador-de-pensiones
  const page1 = await page1Promise;


});



test('Visionario profile', async ({ page }) => {
  await IntroFlow(page);
  await page.getByPlaceholder('Ejemplo: 1985').click();
  await page.getByPlaceholder('Ejemplo: 1985').fill('1983');
  await page.getByPlaceholder('Ejemplo: 1985').press('Enter');
  await page.getByText('Desocupado').click();
  await page.getByText('Sí, después de 1997').click();
  await page.getByText('Mi pareja').click();
  await page.getByTestId('bubble-button-43').getByRole('button', { name: 'Zoom image' }).click();
  await page.getByText('Entre 1 y 3 meses').click();
  await page.getByTestId('bubble-button-170').getByRole('button', { name: 'Zoom image' }).click();
  await page.getByText('Sí, tanto a corto como a medio plazo. Por ejemplo, un nuevo vehículo en los próx').click();
  await page.getByTestId('bubble-button-171').getByRole('button', { name: 'Zoom image' }).click();
  await page.getByText('Sí, ahorro en una cuenta de ahorros').click();
  await page.getByText('No, solo lo que me retiene obligatoriamente mi empresa').click();
  await page.getByText('De otra forma').click();
  await page.locator('#inputrounded').click();
  await page.locator('#inputrounded').fill('Ucha');
  await page.locator('#inputrounded').press('Enter');
  await page.getByText('No, ¿Cómo lo hago?').click();
  await page.getByTestId('bubble-button-172').getByRole('button', { name: 'Zoom image' }).click();
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: '​¡Quiero probarlo ya!' }).click();
  const page2 = await page2Promise;
});




test('Previsor Profile', async ({ page }) => {
  await IntroFlow(page);
  await page.getByPlaceholder('Ejemplo: 1985').click();
  await page.getByPlaceholder('Ejemplo: 1985').fill('1981');
  await page.getByPlaceholder('Ejemplo: 1985').press('Enter');
  await page.getByText('Estudiante').click();
  await page.getByText('Nunca he cotizado').click();
  await page.getByText('Papá o mamá').click();
  await page.getByTestId('bubble-button-43').getByRole('button', { name: 'Zoom image' }).click();
  await page.getByText('Entre 3 y 6 meses').click();
  await page.getByTestId('bubble-button-170').getByRole('button', { name: 'Zoom image' }).click();
  await page.getByText('Sí, incluso a largo plazo. Por ejemplo, una nueva casa en los próximos 3 años en').click();
  await page.getByTestId('bubble-button-171').getByRole('button', { name: 'Zoom image' }).click();
  await page.getByTestId('bubble-button-83').locator('div').click();
  await page.getByText('¿De qué me hablas?').click();
  await page.getByText('Actualmente no ahorro para el retiro').click();
  await page.getByTestId('bubble-button-223').locator('div').click();
  await page.locator('#inputrounded').click();
  await page.locator('#inputrounded').fill('Sin trabajo');
  await page.locator('#inputrounded').press('Enter');
  await page.getByTestId('bubble-button-172').getByRole('button', { name: 'Zoom image' }).click();
  const page3Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: '​¡Quiero probarlo ya!' }).click();
  const page3 = await page3Promise;
});



test('Espiritu Libre', async ({ page }) => {
  await page.getByPlaceholder('Ejemplo: 1985').click();
  await page.getByPlaceholder('Ejemplo: 1985').fill('1990');
  await page.getByPlaceholder('Ejemplo: 1985').press('Enter');
  await page.getByText('Jubildado/ pensionado').click();
  await page.getByText('Antes del 1 de julio de 1997').click();
  await page.getByText('Yo mismo').click();
  await page.getByTestId('bubble-button-43').getByRole('button', { name: 'Zoom image' }).click();
  await page.getByText('No lo sé').click();
  await page.getByTestId('bubble-button-170').getByRole('button', { name: 'Zoom image' }).click();
  await page.getByText('Sí, a corto plazo. Por ejemplo, un viaje en los próximos meses').click();
  await page.getByTestId('bubble-button-171').getByRole('button', { name: 'Zoom image' }).click();
  await page.getByText('No he estado ahorrando').click();
  await page.getByText('Sí, ahorro personalmente para el retiro').click();
  await page.getByText('Solo en ocasiones muy puntuales').click();
  await page.getByText('Por mi cuenta').click();
  await page.getByTestId('bubble-button-110').locator('div').click();
  await page.getByTestId('bubble-button-274').getByRole('button', { name: 'Zoom image' }).click();
  const page6Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: '¡Doy mi primer paso hoy!' }).click();
  const page6 = await page6Promise;
});



test('log_test', async ({ page }) => {
  await IntroFlow(page);
  await page.getByPlaceholder('Ejemplo: 1985').click();
  await page.getByPlaceholder('Ejemplo: 1985').fill('1954');
  await page.getByPlaceholder('Ejemplo: 1985').press('Enter');
  await page.getByText('Labores del hogar').click();
  await page.getByText('Sí, antes de 1997').click();
  await page.getByText('Otra persona').click();
  await page.getByTestId('bubble-button-43').getByRole('button', { name: 'Zoom image' }).click();
  await page.getByText('Más de 6 meses').click();
  await page.getByTestId('bubble-button-170').getByRole('button', { name: 'Zoom image' }).click();
  await page.getByText('No me pongo objetivos de ahorro').click();
  await page.getByTestId('bubble-button-171').getByRole('button', { name: 'Zoom image' }).click();
  await page.getByText('Sí, pero ahorro o invierto de otra forma').click();
  await page.locator('#inputrounded').click();
  await page.locator('#inputrounded').fill('loteria');
  await page.locator('#inputrounded').press('Enter');
  await page.getByText('Actualmente no ahorro para el retiro').click();
  await page.getByTestId('bubble-button-224').getByText('No').click();
  await page.getByText('¡Claro!').click();
  await page.getByTestId('bubble-button-110').getByText('Sí').click();
  await page.getByTestId('bubble-button-274').getByRole('button', { name: 'Zoom image' }).click();
  const page5Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: '¡Quiero descubrirlo hoy!' }).click();
  const page5 = await page5Promise;
});











})

async function IntroFlow(page: Page) {
  // create a new todo locator
  await page.getByText('¡Comencemos!').click();
  await page.getByText('Espera, quiero leer la Política').click();
  await page.getByText('Acepto').click();
}

