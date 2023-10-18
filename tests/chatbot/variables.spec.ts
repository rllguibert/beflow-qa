import { test, expect, type Page } from '@playwright/test';
const { TodoPage } = require('./util.spec');

const TODO_VARIABLES = [
  'booleanatest',
  'vartexto',
  'numbervartest',
  'fecha',
  'timevariable', 
  'listvariable',
  'randomVar'
];
  

test.describe("Variable Create test",() => {
  let todoPage;

  test.beforeEach(async ({ page }) => {
    todoPage = new TodoPage(page);
    await todoPage.goto('https://dboteditor-qa.opseeker.com/');  
    await todoPage.variableCreate(page);
    
  });     

  test('Boolean variable', async ({ page }) => {
    const nombreVariable = page.getByPlaceholder('Nombre de la variable...');
    const borrarVariable = page.getByRole('button', { name: 'FormTrash' });
    const createButton = page.getByRole('button', { name: 'FormCheckmark Create' });
    const salirPanel = page.locator('a');
    
   // await page.getByRole('option', { name: 'True/False' }).click();
    await nombreVariable.click();
    await nombreVariable.fill(TODO_VARIABLES[0]);
    await createButton.click();
    await expect(page.getByRole('rowheader', { name: 'string' })).toBeTruthy();
    await expect(page.getByText(TODO_VARIABLES[0])).toBeTruthy();
    await borrarVariable.click();
    await salirPanel.press('Escape');

  });



test('List', async ({ page }) => {
  const nombreVariable = page.getByPlaceholder('Nombre de la variable...');
  const borrarVariable = page.getByRole('button', { name: 'FormTrash' });
  const selecttext = page.getByRole('button', { name: 'Open Drop; Selected: [object Object]' });
  const salirPanel = page.locator('a');
  await selecttext.click();
  await page.getByRole('option', { name: 'List' }).click();
  await nombreVariable.click();
  await createLista(page);
  await page.getByPlaceholder('Initial value').click();
  await page.getByPlaceholder('Initial value').fill(TODO_VARIABLES[5]);
  await page.getByRole('button', { name: 'FormCheckmark Create' }).click();
  await borrarVariable.click();
  await salirPanel.press('Escape');
});


test('Text variable', async ({ page }) => {
  const nombreVariable = page.getByPlaceholder('Nombre de la variable...');
  const borrarVariable = page.getByRole('button', { name: 'FormTrash' });
  const iniciarValor = page.getByPlaceholder('Initial value');
  const selecttext = page.getByRole('button', { name: 'Open Drop; Selected: [object Object]' });
  const salirPanel = page.locator('a');

  await selecttext.click();
  await page.getByRole('option', { name: 'Text' }).click();
  await nombreVariable.click();
  await nombreVariable.fill(TODO_VARIABLES[1]);
  await iniciarValor.click();
  await iniciarValor.fill('probar');
  await page.getByRole('button', { name: 'FormCheckmark Create' }).click();    
  await expect(page.getByText(TODO_VARIABLES[1])).toBeTruthy();
  await borrarVariable.click();
  await salirPanel.press('Escape');
  
});

 

  test('Number variable', async ({ page }) => {
    const nombreVariable = page.getByPlaceholder('Nombre de la variable...');
    const borrarVariable = page.getByRole('button', { name: 'FormTrash' });
    const iniciarValor = page.getByPlaceholder('Initial value');
    const salirPanel = page.locator('a');
    const selecttext = page.getByRole('button', { name: 'Open Drop; Selected: [object Object]' });
    await selecttext.click();
    await page.getByRole('option', { name: 'Number' }).click();
    await nombreVariable.click();
    await nombreVariable.fill(TODO_VARIABLES[2]);
    await iniciarValor.click();
    await iniciarValor.fill('2');
    await page.getByRole('button', { name: 'FormCheckmark Create' }).click();
    await expect(page.getByRole('rowheader', { name: '2' })).toHaveText('2');
    await borrarVariable.click();
    await salirPanel.press('Escape');
  });


  test('Date variable', async ({ page }) => {
    const nombreVariable = page.getByPlaceholder('Nombre de la variable...');
    const calendarMuestra = page.getByRole('button', { name: 'Calendar' });
    const borrarVariable = page.getByRole('button', { name: 'FormTrash' });
    const salirPanel = page.locator('a');
    const selecttext = page.getByRole('button', { name: 'Open Drop; Selected: [object Object]' });

    await selecttext.click();
    await page.getByRole('option', { name: 'Date' }).click();
    await nombreVariable.click();
    await nombreVariable.fill(TODO_VARIABLES[3]);
    await calendarMuestra.click();
    await expect(calendarMuestra).toBeVisible();
    await page.getByRole('button', { name: 'Thu Oct 05 2023' }).click();
    await page.getByRole('button', { name: 'FormCheckmark Create' }).click();
    await expect(page.getByText('Thursday, October 5, 2023')).toHaveText('Thursday, October 5, 2023');
    await borrarVariable.click();
    await salirPanel.press('Escape');
  });

  test('Time variable', async ({ page }) => {
    const nombreVariable = page.getByPlaceholder('Nombre de la variable...');    
    const borrarVariable = page.getByRole('button', { name: 'FormTrash' });
    const iniciarValor = page.getByPlaceholder('Initial value');
    const salirPanel = page.locator('a');
    const selecttext = page.getByRole('button', { name: 'Open Drop; Selected: [object Object]' });

    await selecttext.click();
    await page.getByRole('option', { name: 'Time' }).click();
    await nombreVariable.click();
    await nombreVariable.fill(TODO_VARIABLES[4]);
    await iniciarValor.click();
    await iniciarValor.fill('17:51');
    await page.getByRole('button', { name: 'FormCheckmark Create' }).click();
    await expect(page.getByText('17:51')).toHaveText('17:51');
    await borrarVariable.click();
    await salirPanel.press('Escape');
  });



test('Random Var', async ({ page }) => {
  const nombreVariable = page.getByPlaceholder('Nombre de la variable...');    
  const borrarVariable = page.getByRole('button', { name: 'FormTrash' });
  const iniciarValor = page.getByPlaceholder('Initial value');
  const salirPanel = page.locator('a');
  const selecttext = page.getByRole('button', { name: 'Open Drop; Selected: [object Object]' });


  await selecttext.click();
  await page.getByRole('option', { name: 'Random' }).click();
  await nombreVariable.click();
  await nombreVariable.fill(TODO_VARIABLES[6]);
  await page.getByRole('button', { name: 'FormCheckmark Create' }).click();
  await borrarVariable.click();
  await salirPanel.press('Escape');
});



})



async function createLista(page: Page) {
  // create a new todo locator
  const nombreVariable = page.getByPlaceholder('Nombre de la variable...');

  for (const item of TODO_VARIABLES) {
    await nombreVariable.fill(item);
    await nombreVariable.press('Enter');
  }
}