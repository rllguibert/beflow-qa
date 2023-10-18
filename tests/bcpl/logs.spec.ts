import { test, expect, devices, type Page} from '@playwright/test';

const { TodoPage } = require('../chatbot/util.spec');


test.describe("Bacoppel project Testing",() => {
  let todoPage;   

    test.beforeEach(async ({ page }) => {
      todoPage = new TodoPage(page);
      await todoPage.goto('https://bancoppel.opseeker.com/bancoppel/financiero/index.html?userId=d');
      
      });      

      test('Botones_94', async ({ page }) => {  
      await page.getByText('¡Qué comes que adivinas! 😎 Arranquemos 🏃‍♂️🏁').click();
      await page.waitForTimeout(20000);
      await page.getByText('¡Vamos!').click();
      await page.getByText('(1) Totalmente de acuerdo. 🤑 ').click();
      await page.getByText('(2) De acuerdo en cierta medida. 😅').click();
      await page.getByText('(3) Neutral, no tengo una preferencia clara. 😐💼 ').click(); 
      await page.getByText('¡Por supuesto, sigamos adelante juntos! 💙').click();
      await page.getByText('(1) Muy de acuerdo. ¡Siempre pago a tiempo! 📆').click();
      await page.getByText('(2) De acuerdo en cierta medida. 💭').click();
      await page.getByText('(3) Neutral, ni de acuerdo ni en desacuerdo. 😐 ', { exact: true }).click();
      await page.waitForTimeout(30000);
      await page.getByText('No me detengo, ¡voy por más! 🏃‍♂️🏃‍♀️').click();
      await page.getByText('Sí, tengo un presupuesto al detalle. Cuido cada peso y me aseguro de cubrir nece').click();
      await page.getByText('Rara vez tengo dificultades, pero puedo manejarlas. 💳 ').click();
      await page.getByText('Utilicé mis recursos existentes. 💡🧰 ').click();
      await page.locator('#selectionBox div').filter({ hasText: 'Claro que sí.' }).nth(2).click();
      //94
      await page.getByText('Me apreté el cinturón, gasté menos o, incluso, prescindí de algunos gastos. ').click();
        })      
      

      test('Botones_98', async ({ page }) => {  
        await page.getByText('¡Qué comes que adivinas! 😎 Arranquemos 🏃‍♂️🏁').click();
        await page.waitForTimeout(20000);
        await page.getByText('¡Vamos!').click();
        await page.getByText('(1) Totalmente de acuerdo. 🤑 ').click();
        await page.getByText('(2) De acuerdo en cierta medida. 😅').click();
        await page.getByText('(3) Neutral, no tengo una preferencia clara. 😐💼').click(); 
        await page.getByText('¡Por supuesto, sigamos adelante juntos! 💙').click();
        await page.getByText('(1) Muy de acuerdo. ¡Siempre pago a tiempo! 📆').click();
        await page.getByText('(2) De acuerdo en cierta medida. 💭').click();
        await page.getByText('(3) Neutral, ni de acuerdo ni en desacuerdo. 😐 ', { exact: true }).click();
        await page.waitForTimeout(30000);
        await page.getByText('No me detengo, ¡voy por más! 🏃‍♂️🏃‍♀️').click();
        await page.getByText('Sí, tengo un presupuesto al detalle. Cuido cada peso y me aseguro de cubrir nece').click();
        await page.getByText('Rara vez tengo dificultades, pero puedo manejarlas. 💳 ').click();
        await page.getByText('Utilicé mis recursos existentes. 💡🧰 ').click();
        await page.locator('#selectionBox div').filter({ hasText: 'Claro que sí.' }).nth(2).click();
        //98
        await page.getByText('Otro. 🤔').click();
          })      

        test('Botones_101', async ({ page }) => { 
            await page.getByText('¡Qué comes que adivinas! 😎 Arranquemos 🏃‍♂️🏁').click();
            await page.waitForTimeout(20000);
            await page.getByText('¡Vamos!').click();
            await page.getByText('(1) Totalmente de acuerdo. 🤑 ').click();
            await page.getByText('(2) De acuerdo en cierta medida. 😅').click();
            await page.getByText('(3) Neutral, no tengo una preferencia clara. 😐💼 ').click(); 
            await page.getByText('¡Por supuesto, sigamos adelante juntos! 💙').click();
            await page.getByText('(1) Muy de acuerdo. ¡Siempre pago a tiempo! 📆').click();
            await page.getByText('(2) De acuerdo en cierta medida. 💭').click();
            await page.getByText('(3) Neutral, ni de acuerdo ni en desacuerdo. 😐 ', { exact: true }).click();
            await page.waitForTimeout(30000);
            await page.getByText('No me detengo, ¡voy por más! 🏃‍♂️🏃‍♀️').click();
            await page.getByText('Sí, tengo un presupuesto al detalle. Cuido cada peso y me aseguro de cubrir nece').click();
            await page.getByText('Rara vez tengo dificultades, pero puedo manejarlas. 💳 ').click();
            await page.getByText('Me las ingenié para generar ingresos adicionales. 💪🔨').click();
            await page.locator('#selectionBox div').filter({ hasText: 'Claro que sí.' }).nth(2).click();
            //101
            await page.getByText('Empeñé algo que poseo.').click();
               
              
            })



        test('Botones_102', async ({ page }) => {  
          await page.getByText('¡Qué comes que adivinas! 😎 Arranquemos 🏃‍♂️🏁').click();
          await page.waitForTimeout(20000);
          await page.getByText('¡Vamos!').click();
          await page.getByText('(1) Totalmente de acuerdo. 🤑 ').click();
          await page.getByText('(2) De acuerdo en cierta medida. 😅').click();
          await page.getByText('(3) Neutral, no tengo una preferencia clara. 😐💼 ').click(); 
          await page.getByText('¡Por supuesto, sigamos adelante juntos! 💙').click();
          await page.getByText('(1) Muy de acuerdo. ¡Siempre pago a tiempo! 📆').click();
          await page.getByText('(2) De acuerdo en cierta medida. 💭').click();
          await page.getByText('(3) Neutral, ni de acuerdo ni en desacuerdo. 😐 ', { exact: true }).click();
          await page.waitForTimeout(30000);
          await page.getByText('No me detengo, ¡voy por más! 🏃‍♂️🏃‍♀️').click();
          await page.getByText('Sí, tengo un presupuesto al detalle. Cuido cada peso y me aseguro de cubrir nece').click();
          await page.getByText('Rara vez tengo dificultades, pero puedo manejarlas. 💳 ').click();
          await page.getByText('Me las ingenié para generar ingresos adicionales. 💪🔨').click();
          await page.locator('#selectionBox div').filter({ hasText: 'Claro que sí.' }).nth(2).click();        
            //102
            await page.getByText('Otro. 🤔').click();
              
            })




test('Botones_108', async ({ page }) => {  
    await page.getByText('¡Qué comes que adivinas! 😎 Arranquemos 🏃‍♂️🏁').click();
    await page.waitForTimeout(20000);
    await page.getByText('¡Vamos!').click();
    await page.getByText('(1) Totalmente de acuerdo. 🤑 ').click();
    await page.getByText('(2) De acuerdo en cierta medida. 😅').click();
    await page.getByText('(3) Neutral, no tengo una preferencia clara. 😐💼 ').click(); 
    await page.getByText('¡Por supuesto, sigamos adelante juntos! 💙').click();
    await page.getByText('(1) Muy de acuerdo. ¡Siempre pago a tiempo! 📆').click();
    await page.getByText('(2) De acuerdo en cierta medida. 💭').click();
    await page.getByText('(3) Neutral, ni de acuerdo ni en desacuerdo. 😐 ', { exact: true }).click();
    await page.waitForTimeout(30000);
    await page.getByText('No me detengo, ¡voy por más! 🏃‍♂️🏃‍♀️').click();
    await page.getByText('Sí, tengo un presupuesto al detalle. Cuido cada peso y me aseguro de cubrir nece').click();
    await page.getByText('Rara vez tengo dificultades, pero puedo manejarlas. 💳 ').click();     
    await page.getByText('Recurrí a contactos o recursos existentes para obtener crédito. 📞🙏').click();
    await page.locator('#selectionBox div').filter({ hasText: 'Claro que sí.' }).nth(2).click();    
    //108
    await page.getByText('Otro. 🤔').click();
    

})





test('Botones_111', async ({ page }) => { 
  await page.getByText('¡Qué comes que adivinas! 😎 Arranquemos 🏃‍♂️🏁').click();
  await page.waitForTimeout(20000);
  await page.getByText('¡Vamos!').click();
  await page.getByText('(1) Totalmente de acuerdo. 🤑 ').click();
  await page.getByText('(2) De acuerdo en cierta medida. 😅').click();
  await page.getByText('(3) Neutral, no tengo una preferencia clara. 😐💼 ').click(); 
  await page.getByText('¡Por supuesto, sigamos adelante juntos! 💙').click();
  await page.getByText('(1) Muy de acuerdo. ¡Siempre pago a tiempo! 📆').click();
  await page.getByText('(2) De acuerdo en cierta medida. 💭').click();
  await page.getByText('(3) Neutral, ni de acuerdo ni en desacuerdo. 😐 ', { exact: true }).click();
  await page.waitForTimeout(30000);
  await page.getByText('No me detengo, ¡voy por más! 🏃‍♂️🏃‍♀️').click();
  await page.getByText('Sí, tengo un presupuesto al detalle. Cuido cada peso y me aseguro de cubrir nece').click();
  await page.getByText('Rara vez tengo dificultades, pero puedo manejarlas. 💳 ').click();      
    await page.getByText('Opté por acceder a una nueva línea de crédito (por ejemplo, préstamos personales, de día de pago y otros).').click();
    await page.locator('#selectionBox div').filter({ hasText: 'Claro que sí.' }).nth(2).click();  
     //111
    await page.getByText('Opté por un préstamo de día de pago.').click();  

});




test('Botones_113', async ({ page }) => { 
  await page.getByText('¡Qué comes que adivinas! 😎 Arranquemos 🏃‍♂️🏁').click();
    await page.waitForTimeout(20000);
    await page.getByText('¡Vamos!').click();
    await page.getByText('(1) Totalmente de acuerdo. 🤑 ').click();
    await page.getByText('(2) De acuerdo en cierta medida. 😅').click();
    await page.getByText('(3) Neutral, no tengo una preferencia clara. 😐💼 ').click(); 
    await page.getByText('¡Por supuesto, sigamos adelante juntos! 💙').click();
    await page.getByText('(1) Muy de acuerdo. ¡Siempre pago a tiempo! 📆').click();
    await page.getByText('(2) De acuerdo en cierta medida. 💭').click();
    await page.getByText('(3) Neutral, ni de acuerdo ni en desacuerdo. 😐 ', { exact: true }).click();
    await page.waitForTimeout(30000);
    await page.getByText('No me detengo, ¡voy por más! 🏃‍♂️🏃‍♀️').click();
    await page.getByText('Sí, tengo un presupuesto al detalle. Cuido cada peso y me aseguro de cubrir nece').click();
    await page.getByText('Rara vez tengo dificultades, pero puedo manejarlas. 💳 ').click();          
    await page.getByText('Opté por acceder a una nueva línea de crédito (por ejemplo, préstamos personales, de día de pago y otros).').click();
    await page.locator('#selectionBox div').filter({ hasText: 'Claro que sí.' }).nth(2).click();
    //113
    await page.getByText('Otro. 🤔').click();

});



});
