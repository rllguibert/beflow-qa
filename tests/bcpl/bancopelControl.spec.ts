import { test, expect, devices, type Page} from '@playwright/test';

const { TodoPage } = require('../chatbot/util.spec');


test.describe("Bacoppel project Testing",() => {
  let todoPage;   

    test.beforeEach(async ({ page }) => {
      todoPage = new TodoPage(page);
      await todoPage.goto('https://bancoppel.opseeker.com/bancoppel/financiero/index.html?grupo=control');
      
      });           

    test('Test_Low_Financial', async ({ page }) => {  
      const lowFTrata = await page.getByText('¡Tus respuestas me indican que puedes tener una preferencia por gastar dinero en lugar de ahorrarlo! 😄💸 Recuerda que es importante encontrar un equilibrio entre disfrutar el presente y planificar para el futuro.');
      const lowFinancial = await page.getByText('¡Tus respuestas me indican que tienes una oportunidad para aprender sobre cómo manejar tu dinero de manera más eficiente 📚!');
      const lowFinalFlow = await page.getByText('¡Eres un Deportista Financiero en Formación! 🏃‍♂️📚💰');
      await page.getByText('¡Qué comes que adivinas! 😎 Arranquemos 🏃‍♂️🏁').click();
      await page.waitForTimeout(20000);
      await page.getByText('¡Vamos!').click();
      await page.getByText('(1) Totalmente de acuerdo. 🤑 ').click();
      await page.getByText('(2) De acuerdo en cierta medida. 😅').click();
      await page.getByText('(3) Neutral, no tengo una preferencia clara. 😐💼 ').click();
      //feedback_ seccion_uno_low
      await expect(lowFTrata).toContainText(['¡Tus respuestas me indican que puedes tener una preferencia por gastar dinero en lugar de ahorrarlo! 😄💸 Recuerda que es importante encontrar un equilibrio entre disfrutar el presente y planificar para el futuro.']); 
      await page.getByText('¡Por supuesto, sigamos adelante juntos! 💙').click();
      //+1    
      await page.getByText('(1) Muy de acuerdo. ¡Siempre pago a tiempo! 📆').click();
      //+1
      await page.getByText('(2) De acuerdo en cierta medida. 💭').click();
      await page.getByText('(3) Neutral, ni de acuerdo ni en desacuerdo. 😐 ', { exact: true }).click();
      await page.waitForTimeout(30000);
      await page.getByText('No me detengo, ¡voy por más! 🏃‍♂️🏃‍♀️').click();
      //+1
      await page.getByText('Sí, tengo un presupuesto al detalle. Cuido cada peso y me aseguro de cubrir nece').click();
      //+1
      await page.getByText('Rara vez tengo dificultades, pero puedo manejarlas. 💳 ').click();
      await page.getByText('Me las ingenié para generar ingresos adicionales. 💪🔨').click();
      await page.locator('#selectionBox div').filter({ hasText: 'Claro que sí.' }).nth(2).click();
      await page.getByText('Trabajé horas extras, gané dinero extra.').click();
      await page.getByText('Seguir mi carrera ✨🏃‍♂️🏃‍♀️').click();
      await page.getByText('Nada de confianza. 😬').click();
      await page.getByText('Al menos una semana, pero menos de 1 mes 😬📆').click();
      await page.getByText('Bueno... He llegado hasta aquí, ¿no? 🚶‍♂️').click();
      await page.getByText('¡Podré comprar más que hoy! 😁💸💃').click();
      await page.getByText('¡Podré comprar exactamente lo mismo que hoy! 😉💵🔄').click();
      await page.getByText('No lo sé. 🧐').click();
      await page.getByText('Comprar acciones de una sola empresa. 🏢💰').click();
      await page.getByText('¡En menos de 5 años, Jimena habrá liquidado su deuda! ⚡🎉💸').click();
      await page.getByText('¡Claro que sí! Toda información me sirve.').click();
      await expect(lowFinancial).toContainText(['¡Tus respuestas me indican que tienes una oportunidad para aprender sobre cómo manejar tu dinero de manera más eficiente 📚!']);
      // BoxProcesor 472
      await page.getByText('¡Sin duda!').click();
      await page.getByText('¡Sí, vamos! 👍').click();
      await page.getByText('¡Obvio! Eso no se pregunta.').click();
      await page.getByText('Puedo hacer el pago mínimo, el pago total, o realizar pagos que se sitúen entre el mínimo y el total.', { exact: true }).click();
      await page.waitForTimeout(30000);
      await page.getByText('(2) Con cierto nivel de estrés. 😬').click();
      await page.getByText('📉 Porque pienso que afectaría negativamente mi calificación crediticia.').click();
      await page.getByText('Sí, no sabía que tenía una opción para estos casos.').click();

      //Perfil:Conoce Disposicion de Efectivo= true
      await page.getByText('Es un préstamo que utiliza la línea de crédito de mi tarjeta.').click();
      await page.getByText('Sí, ¡por supuesto!').click();
      await page.getByText('¡Sí, ya lo sabía!').click();
      await page.getByText('¡Sin miedo al éxito!').click();
      await page.getByText('Sí.', { exact: true }).click();
      await page.locator('#selectionBox').getByText('Sí.').click();
      await page.getByText('Menos de 5%.').click();
      await page.getByText('¡Claro que sí!', { exact: true }).click();
      await page.getByText('No, aún no conozco.').click();
      await page.locator('#selectionBox > div > div > div:nth-child(5) > div > div').first().click();
      await page.locator('#selectionBox > div > div > div:nth-child(2) > div > div').first().click();
      await page.locator('div:nth-child(4) > div > div').first().click();
      await page.locator('div:nth-child(4) > div > div').first().click();
      await page.getByText('Periodos de gracia (meses libres de pago de cuotas).').click();
      await page.getByText('No te quiero dejar ir, señor Chatbot Financiero.').click();
      await page.getByText('Me siento seguro pidiendo un préstamo de otra fuente de financiamiento (ej. Pres').click();
      await page.getByText('Porque me permite acceder a préstamos pequeños. 💰').click();
      await page.getByText('Por su accesibilidad. 😊').click();
      await page.getByText('Por sus tasas de interés. 😄').click();
      await page.getByRole('textbox').click();
      await page.getByRole('textbox').fill('QAPerfilamientos');
      await page.getByRole('button', { name: 'Responder' }).click();
      await page.getByText('(3) Neutral.').click();
      await page.waitForTimeout(30000);
      await page.getByText('😐 Neutral, no tengo una preferencia clara.', { exact: true }).click();
      await page.getByText('😊 Me interesa en cierta medida.').click();      
      //Box processor-551
      await page.getByText('😊 Buena').click();
      await page.getByText('¡Para finalizar, hay algo genial para ti! Una ficha con tu perfil y consejos hec').click();
      const page1Promise = page.waitForEvent('popup');
      await page.getByRole('link', { name: 'Deportista Financiero en Formación' }).click();
      const page1 = await page1Promise;
      await expect(lowFinalFlow).toContainText(['¡Eres un Deportista Financiero en Formación! 🏃‍♂️📚💰']); 
      await page.close();
    });
     
        




     test('Test_Medium_Financial', async ({ page }) => {    
      const mediumF = await page.getByText('¡Tus respuestas me indican que vas por buen camino, demuestras tener algunas buenas actitudes financieras!');
      const mediumFinancial = await page.getByText('¡Tus respuestas me indican que vas por buen camino, demuestras tener algunas buenas actitudes financieras!');
      //const mediumFinalFlow = await page.getByText('¡Eres un Deportista Entusiasta de las Finanzas! 🌟🏃‍♂️💼');
      await page.getByText('¡Qué comes que adivinas! 😎 Arranquemos 🏃‍♂️🏁').click();
      await page.getByText('¡Vamos!').click();
      //+1
      await page.getByText('(4) En desacuerdo en cierta medida. 💭').click();
      //+1
      await page.getByText('(5) Totalmente en desacuerdo. 💰').click();
      await page.getByText('(3) Neutral, no tengo una preferencia clara. 😐💼').click();
      await page.waitForTimeout(30000);
      await expect(mediumF).toContainText(['¡Tus respuestas me indican que vas por buen camino, demuestras tener algunas buenas actitudes financieras!'])
      await page.getByText('¡Por supuesto, sigamos adelante juntos! 💙').click();
      //+1
      await page.getByText('(1) Muy de acuerdo. ¡Siempre pago a tiempo! 📆').click();
      //+1
      await page.getByText('(1) Totalmente de acuerdo. 💰').click();
      //+1
      await page.getByText('(1) Totalmente de acuerdo.', { exact: true }).click();

      await page.getByText('No me detengo, ¡voy por más! 🏃‍♂️🏃‍♀️').click();
      //+1
      await page.getByText('Sí, tengo un presupuesto al detalle. Cuido cada peso y me aseguro de cubrir nece').click();
      //+1
      await page.getByText('No he tenido dificultades. 💰 ').click();
      await page.getByText('Seguir mi carrera ✨🏃‍♂️🏃‍♀️').click();
      //+1
      await page.getByText('Con mucha confianza. 😎🔒 ').click();
      await page.getByText('Al menos una semana, pero menos de 1 mes 😬📆').click();
      await page.getByText('Bueno... He llegado hasta aquí, ¿no? 🚶‍♂️').click();
      await page.getByText('¡Podré comprar más que hoy! 😁💸💃').click();
      await page.getByText('¡Podré comprar exactamente lo mismo que hoy! 😉💵🔄').click();
      await page.getByText('No lo sé. 🧐').click();
      await page.getByText('Comprar acciones de una sola empresa. 🏢💰').click();
      await page.getByText('¡En menos de 5 años, Jimena habrá liquidado su deuda! ⚡🎉💸').click();
      await page.getByText('¡Claro que sí! Toda información me sirve.').click();
      await expect(mediumFinancial).toContainText(['¡Tus respuestas me indican que vas por buen camino, demuestras tener algunas buenas actitudes financieras!']);
      await page.getByText('¡Sin duda!').click();
      await page.getByText('¡Sí, vamos! 👍').click();
      await page.getByText('¡Obvio! Eso no se pregunta.').click();
      await page.getByText('Puedo realizar el pago mínimo y el pago total.').click();
      await page.getByText('No, no hace falta.').click();
      await page.getByText('(3) Normal. 😐').click();
      await page.getByText('Sí, no sabía que tenía una opción para estos casos.').click();
      await page.getByText('Es dinero extra en efectivo que me brinda mi Tarjeta de Crédito.').click();
      await page.getByText('¡Sí, por favor!').click();
      await page.getByText('Sí, ¡por supuesto!').click();
      await page.getByText('¡Sí, ya lo sabía!').click();
      await page.getByText('¡Sin miedo al éxito!').click();
      await page.getByText('Sí.', { exact: true }).click();
      await page.locator('#selectionBox').getByText('No sé.').click();
      await page.getByText('Por supuesto. No sabía que tenía un monto disponible.').click();
      await page.getByText('Menos de 5%.').click();
      await page.getByText('¡Claro que sí!', { exact: true }).click();
      await page.getByText('No, aún no conozco.').click();
      await page.locator('#selectionBox > div > div > div:nth-child(5) > div > div').first().click();
      await page.locator('#selectionBox > div > div > div:nth-child(2) > div > div').first().click();
      await page.locator('div:nth-child(4) > div > div').first().click();
      await page.locator('div:nth-child(4) > div > div').first().click();
      await page.getByText('Una tasa de interés accesible.').click();
      await page.getByText('No te quiero dejar ir, señor Chatbot Financiero.').click();
      await page.getByText('Ninguna de los anteriores.').click();
      await page.getByText('Porque me permite acceder a préstamos pequeños. 💰').click();
      await page.getByText('Por su accesibilidad. 😊').click();
      await page.getByText('Por sus tasas de interés. 😄').click();
      await page.getByRole('textbox').click();
      await page.getByRole('textbox').fill('QAPerfilamientos');
      await page.getByRole('button', { name: 'Responder' }).click();
      await page.getByText('(3) Neutral.').click();
      await page.waitForTimeout(30000);
     // await expect(mediumFinalFlow).toContainText(['¡Eres un Deportista Entusiasta de las Finanzas! 🌟🏃‍♂️💼']);
      await page.getByText('😄 Totalmente de acuerdo.').click();
      await page.getByText('😕 Mala').click();
     
      const page1Promise = page.waitForEvent('popup');
      await page.getByRole('link', { name: 'Deportista Entusiasta de las Finanzas' }).click();
      const page1 = await page1Promise;
      await page.close();
     
        });





        test('High_Financial_test', async ({ page }) => {
          const highF = await page.getByText('Se ve que conoces bastante sobre finanzas sanas! 💰');
          const highFinancial = await page.getByText('¡Se ve que conoces bastante sobre finanzas sanas! 💰');
          const highFinalFlow = await page.getByText('¡Eres un Campeón Financiero de Carreras! 🏆🏃‍💰');
          await page.getByText('¡Qué comes que adivinas! 😎 Arranquemos 🏃‍♂️🏁').click();
          await page.getByText('¡Vamos!').click();
          
          //+1
          await page.getByText('(4) En desacuerdo en cierta medida. 💭').click();
          //+1
          await page.getByText('(5) Totalmente en desacuerdo. 💰').click();
          //+1
          await page.getByText('(1) Totalmente de acuerdo. 💰💼 ').click();
          await expect(highF).toContainText(['Se ve que conoces bastante sobre finanzas sanas! 💰'])
          await page.getByText('¡Por supuesto, sigamos adelante juntos! 💙').click();
          //+1
          await page.getByText('(1) Muy de acuerdo. ¡Siempre pago a tiempo! 📆').click();
          await page.waitForTimeout(30000);
          //+1
          await page.getByText('(1) Totalmente de acuerdo. 💰', { exact: true }).click();
          //+1
          await page.getByText('(1) Totalmente de acuerdo.', { exact: true }).click();
          await page.getByText('No me detengo, ¡voy por más! 🏃‍♂️🏃‍♀️').click();
          //+1
          await page.getByText('Sí, tengo un presupuesto al detalle. Cuido cada peso y me aseguro de cubrir nece').click();
          //+1
          await page.getByText('No he tenido dificultades. 💰 ').click();
          await page.getByText('Seguir mi carrera ✨🏃‍♂️🏃‍♀️').click();
          //+1
          await page.getByText('Con mucha confianza. 😎🔒').click();
          //+1
          await page.getByText('Más de 6 meses 😎').click();
          await page.getByText('Bueno... He llegado hasta aquí, ¿no? 🚶‍♂️').click();
          await page.getByText('¡Podré comprar más que hoy! 😁💸💃').click();
          await page.getByText('¡Podré comprar exactamente lo mismo que hoy! 😉💵🔄', { exact: true }).click();
          await page.getByText('¡Exactamente 102 pesos! 💰💰').click();
          await page.getByText('No lo sé. 🧐').click();
          await page.getByText('¡En menos de 5 años, Jimena habrá liquidado su deuda! ⚡🎉💸').click();
          await page.getByText('¡Claro que sí! Toda información me sirve.').click();
          await page.getByText('¡Sin duda!').click();
          await expect(highFinancial).toContainText(['¡Se ve que conoces bastante sobre finanzas sanas! 💰']);
          await page.getByText('¡Sí, vamos! 👍').click();
          await page.getByText('¡Obvio! Eso no se pregunta.').click();
          await page.getByText('Puedo hacer el pago mínimo, el pago total, o realizar pagos que se sitúen entre ').click();
          await page.getByText('(1) En modo alerta máxima. 😰').click();
          await page.getByText('📈 Porque pienso que mi deuda aumentaría.').click();
          await page.getByText('Sí, no sabía que tenía una opción para estos casos.').click();
          await page.getByText('Es dinero extra en efectivo que me brinda mi Tarjeta de Crédito.').click();
          await page.getByText('¡Sí, por favor!').click();
          await page.getByText('Sí, ¡por supuesto!').click();
          await page.getByText('¡Sí, ya lo sabía!').click();
          await page.getByText('¡Sin miedo al éxito!').click();
          await page.getByText('No sé.').click();
          await page.getByText('No, vamos a la siguiente pregunta.').click();
          await page.getByText('Sí.').click();
          await page.getByText('Menos de 5%.').click();
          await page.getByText('¡Claro que sí!', { exact: true }).click();
          await page.locator('#selectionBox').getByText('Sí.').click();
          await page.locator('#selectionBox > div > div > div:nth-child(5) > div > div').first().click();
          await page.locator('div:nth-child(4) > div > div').first().click();
          await page.locator('#selectionBox > div > div > div:nth-child(2) > div > div').first().click();
          await page.locator('#selectionBox > div > div > div > div > div').first().click();
          await page.getByText('Periodos de gracia (meses libres de pago de cuotas).').click();
          await page.getByText('Me muero por conocer mis resultados.').click();
          await page.getByText('Me siento seguro pidiendo un préstamo de mis familiares o conocidos.').click();
          await page.getByText('Por su rapidez. ⏱️').click();
          await page.getByText('No lo sé 🤔').click();
          await page.getByRole('textbox').click();
          await page.getByRole('textbox').fill('qalogica');
          await page.getByText('Porque me permite acceder a préstamos pequeños. 💰').click();
          await page.getByText('Por su accesibilidad. 😊').click();
          await page.getByRole('button', { name: 'Responder' }).click();
          await page.getByText('(3) Neutral.').click();
          //'¡Eres un Campeón Financiero de Carreras! 🏆🏃‍💰']);
          await page.waitForTimeout(30000);
          await page.getByText('😄 Totalmente de acuerdo.', { exact: true }).click();
          await page.getByText('😐 Neutral').click();           
          const page1Promise = page.waitForEvent('popup');
          await page.getByRole('link', { name: 'Campeón Financiero de Carreras' }).click();
          const page1 = await page1Promise;
          //await expect(highFinalFlow).toContainText(['Tus respuestas demuestran que tienes conocimientos, habilidades y actitudes financieras excepcionales. Eres un líder indiscutible en el emocionante mundo de las finanzas y mereces el título de Campeón Financiero de Carreras. Tu experiencia y destreza en el manejo de las finanzas te han llevado a conquistar nuevas metas. 🏅💪']); 
            
        });




})