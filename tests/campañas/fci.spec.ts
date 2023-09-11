import { test, expect, devices, type Page} from '@playwright/test';

const { TodoPage } = require('../chatbot/util.spec');


test.describe("FCI demo Testing",() => {
  let todoPage;   

    test.beforeEach(async ({ page }) => {
      todoPage = new TodoPage(page);
      await todoPage.goto('https://demofci.opseeker.com/FCI/ChatbotCajaDeIngenieros/index.html');
      });        



test('Gestión de diaria Test', async ({ page }) => {
    const cl = page.getByTestId('bubble-button-3');
    const yesMGood = page.getByTestId('bubble-button-7');
    const ahorroOne = page.getByTestId('bubble-button-30');
    const yesPro = page.getByTestId('bubble-button-35');
    const yesMore = page.getByTestId('bubble-button-39');
    const cuestaIG = page.getByTestId('bubble-button-44');
    const gestionD = page.getByTestId('bubble-button-77');
    await page.getByText('¡Claro!').click();
    await page.getByText('Sí, muy buena.').click();
    await page.getByText('Ahorro al menos el 30%.').click();
    await page.getByText('Sí, tengo productos contratados.').click();
    await page.getByText('Sí, mucho.').click();
    await page.getByText('Me cuesta gestionar mis ingresos y mis gastos cotidianos.').click();
    await page.getByText('Ir al apartado de gestión de diaria.').click();
  });


  test('Emergencias', async ({ page }) => {
    const cl = page.getByTestId('bubble-button-3');
    const yesMGood = page.getByTestId('bubble-button-7');
    const ahorroOne = page.getByTestId('bubble-button-30');
    const yesPro = page.getByTestId('bubble-button-35');
    const yesMore = page.getByTestId('bubble-button-39');
    const cuestaIG = page.getByTestId('bubble-button-44');
    const gestionD = page.getByTestId('bubble-button-77');
    
    await page.getByText('¿Qué es la salud financiera?').click();
    await page.getByText('Entendido. Ayúdame a mejorar mi salud financiera.').click();
    await page.getByText('Sí, es buena.').click();
    await page.getByText('Ahorro al menos el 10%.').click();
    await page.getByText('He tenido productos contratados, pero ya no.').click();
    await page.getByTestId('bubble-button-40').locator('div').click();
    await page.getByText('Las emergencias económicas me ponen en apuros.').click();
    await page.getByText('Ir al apartado de gestión de emergencias.').click();
  });



test('Metas financieras', async ({ page }) => {
    await page.getByText('¿Qué son las ciencias del comportamiento?').click();
    await page.getByText('¡Vale! Ayúdame a aplicar las ciencias del comportamiento para mejorar mi salud f').click();
    await page.getByText('Es mejorable.').click();
    await page.getByText('Ahorro menos del 10%.').click();
    await page.getByText('Nunca he tenido productos contratados.').click();
    await page.getByText('Sí, lo suficiente.').click();
    await page.getByText('¿Cómo puedo alcanzar mis metas financieras?').click();
    await page.getByText('Ir al apartado de metas financieras.').click();
  });



test('CC y SF', async ({ page }) => {
    await page.getByText('¿Qué es la salud financiera?').click();
    await page.getByText('Me gustaría saber más sobre el concepto de salud financiera.').click();
    await page.getByText('Ir al apartado de ciencias del comportamiento y salud financiera.').click();
  });



test('Deuda inteligente', async ({ page }) => {
    await page.getByText('¡Claro!').click();
    await page.getByText('No, no tengo formación financiera.').click();
    await page.getByText('No ahorro nada.').click();
    await page.getByText('Sí, tengo productos contratados.').click();
    await page.getByText('No, en absoluto.').click();
    await page.getByText('Tengo problemas con las deudas.').click();
    await page.getByText('Ir al apartado de deuda inteligente.').click();
  });


test('Inversión', async ({ page }) => {
    await page.getByText('¿Qué son las ciencias del comportamiento?').click();
    await page.getByText('¿Qué es la salud financiera?').click();
    await page.getByText('Entendido. Ayúdame a mejorar mi salud financiera.').click();
    await page.getByTestId('bubble-button-9').locator('div').click();
    await page.getByText('Ahorro menos del 10%.').click();
    await page.getByText('Nunca he tenido productos contratados.').click();
    await page.getByText('No, en absoluto.').click();
    await page.getByText('Necesito ayuda para invertir').click();
    await page.getByText('Ir al apartado de inversión.').click();
  });

})