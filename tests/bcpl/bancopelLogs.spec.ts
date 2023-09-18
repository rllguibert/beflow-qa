import { test, expect, devices, type Page} from '@playwright/test';

const { TodoPage } = require('../chatbot/util.spec');


test.describe("Bacoppel project Testing",() => {
  let todoPage;   

    test.beforeEach(async ({ page }) => {
      todoPage = new TodoPage(page);

      await todoPage.goto('https://bancoppel.opseeker.com/bancoppel/financiero/index.html?grupo=control');
      });           


    test('Tagsname:tagsvalue fin_mes_recursos', async ({ page }) => {
          const highFTrata = await page.getByText('Tus respuestas demuestran que tienes conocimientos, habilidades y actitudes fina');
          await page.waitForTimeout(20000);
          await page.getByText('¡Qué comes que adivinas! 😎 Arranquemos 🏃‍♂️🏁').click();
          await page.waitForTimeout(20000);
          await page.getByText('¡Vamos!').click();
          await page.getByText('(4) En desacuerdo en cierta medida. 💭').click();
          await page.getByText('(5) Totalmente en desacuerdo. 💰').click();
          await page.getByText('(1) Totalmente de acuerdo. 💰💼').click();
          await page.getByText('¡Por supuesto, sigamos adelante juntos! 💙').click();
          await page.getByText('(1) Muy de acuerdo. ¡Siempre pago a tiempo! 📆').click();
          await page.getByText('(2) De acuerdo en cierta medida. 💭').click();
          await page.getByText('(1) Totalmente de acuerdo.', { exact: true }).click();
          await page.getByText('No me detengo, ¡voy por más! 🏃‍♂️🏃‍♀️').click();
          await page.getByText('Sí, tengo un presupuesto al detalle. Cuido cada peso y me aseguro de cubrir nece').click();
          await page.waitForTimeout(20000);
          await page.getByText('Rara vez tengo dificultades, pero puedo manejarlas. 💳',{ exact: true }).click();
          await page.getByText('Utilicé mis recursos existentes. 💡🧰 ', { exact: true }).click();
          await page.waitForTimeout(30000);
          await page.getByText('Claro que sí.').click();
          await page.getByText('Me apreté el cinturón, gasté menos o, incluso, prescindí de algunos gastos.').click();
          //await page.getByText('Otro. 🤔').click();
     });


    test('Tagsname:tagsvalue fin_mes_ingresos', async ({ page }) => {
      await page.waitForTimeout(20000);
      await page.getByText('¡Qué comes que adivinas! 😎 Arranquemos 🏃‍♂️🏁').click();
      await page.waitForTimeout(20000);
      await page.getByText('¡Vamos!').click();
      await page.getByText('(4) En desacuerdo en cierta medida. 💭').click();
      await page.getByText('(5) Totalmente en desacuerdo. 💰').click();
      await page.getByText('(1) Totalmente de acuerdo. 💰💼').click();
      await page.getByText('¡Por supuesto, sigamos adelante juntos! 💙').click();
      await page.getByText('(1) Muy de acuerdo. ¡Siempre pago a tiempo! 📆').click();
      await page.getByText('(2) De acuerdo en cierta medida. 💭').click();
      await page.getByText('(1) Totalmente de acuerdo.', { exact: true }).click();
      await page.getByText('No me detengo, ¡voy por más! 🏃‍♂️🏃‍♀️').click();
      await page.getByText('Sí, tengo un presupuesto al detalle. Cuido cada peso y me aseguro de cubrir nece').click();
      await page.waitForTimeout(20000);
      await page.getByText('Rara vez tengo dificultades, pero puedo manejarlas. 💳',{ exact: true }).click();
      await page.getByText('Me las ingenié para generar ingresos adicionales. 💪🔨').click();
      await page.getByText('Claro que sí.').click();
      await page.getByText('Otro. 🤔').click();
 });


 test('Tagsname:tagsvalue prestado_comida_otro', async ({ page }) => {
  const highFTrata = await page.getByText('Tus respuestas demuestran que tienes conocimientos, habilidades y actitudes fina');
  await page.waitForTimeout(20000);
  await page.getByText('¡Qué comes que adivinas! 😎 Arranquemos 🏃‍♂️🏁').click();
  await page.waitForTimeout(20000);
  await page.getByText('¡Vamos!').click();
  await page.getByText('(4) En desacuerdo en cierta medida. 💭').click();
  await page.getByText('(5) Totalmente en desacuerdo. 💰').click();
  await page.getByText('(1) Totalmente de acuerdo. 💰💼').click();
  await page.getByText('¡Por supuesto, sigamos adelante juntos! 💙').click();
  await page.getByText('(1) Muy de acuerdo. ¡Siempre pago a tiempo! 📆').click();
  await page.getByText('(2) De acuerdo en cierta medida. 💭').click();
  await page.getByText('(1) Totalmente de acuerdo.', { exact: true }).click();
  await page.getByText('No me detengo, ¡voy por más! 🏃‍♂️🏃‍♀️').click();
  await page.getByText('Sí, tengo un presupuesto al detalle. Cuido cada peso y me aseguro de cubrir nece').click();
  await page.getByText('Rara vez tengo dificultades, pero puedo manejarlas. 💳',{ exact: true }).click();
  await page.waitForTimeout(30000);
  await page.getByText('Recurrí a contactos o recursos existentes para obtener crédito. 📞🙏').click();
  await page.getByText('Claro que sí.').click();
  await page.getByText('Pedí prestado comida o dinero a familiares o amigos.').click();
 
});


test('Tagsname:tagsvalue_prestado_anticipo', async ({ page }) => {
  await page.waitForTimeout(20000);
  await page.getByText('¡Qué comes que adivinas! 😎 Arranquemos 🏃‍♂️🏁').click();
  await page.waitForTimeout(20000);
  await page.getByText('¡Vamos!').click();
  await page.getByText('(4) En desacuerdo en cierta medida. 💭').click();
  await page.getByText('(5) Totalmente en desacuerdo. 💰').click();
  await page.getByText('(1) Totalmente de acuerdo. 💰💼').click();
  await page.getByText('¡Por supuesto, sigamos adelante juntos! 💙').click();
  await page.getByText('(1) Muy de acuerdo. ¡Siempre pago a tiempo! 📆').click();
  await page.getByText('(2) De acuerdo en cierta medida. 💭').click();
  await page.getByText('(1) Totalmente de acuerdo.', { exact: true }).click();
  await page.getByText('No me detengo, ¡voy por más! 🏃‍♂️🏃‍♀️').click();
  await page.getByText('Sí, tengo un presupuesto al detalle. Cuido cada peso y me aseguro de cubrir nece').click();
  await page.getByText('Rara vez tengo dificultades, pero puedo manejarlas. 💳',{ exact: true }).click();
  await page.waitForTimeout(20000);
  await page.getByText('Recurrí a contactos o recursos existentes para obtener crédito. 📞🙏', { exact: true }).click();
  await page.getByText('Claro que sí.').click();
  await page.waitForTimeout(20000);
  await page.getByText('Pedí prestado a mi empleador/Pedí un anticipo de sueldo.', { exact: true }).click();
});




test('Tagsname:tagsvalue_prestado_anticipo_otro', async ({ page }) => {
  await page.waitForTimeout(20000);
  await page.getByText('¡Qué comes que adivinas! 😎 Arranquemos 🏃‍♂️🏁').click();
  await page.waitForTimeout(20000);
  await page.getByText('¡Vamos!').click();
  await page.getByText('(4) En desacuerdo en cierta medida. 💭').click();
  await page.getByText('(5) Totalmente en desacuerdo. 💰').click();
  await page.getByText('(1) Totalmente de acuerdo. 💰💼').click();
  await page.getByText('¡Por supuesto, sigamos adelante juntos! 💙').click();
  await page.getByText('(1) Muy de acuerdo. ¡Siempre pago a tiempo! 📆').click();
  await page.getByText('(2) De acuerdo en cierta medida. 💭').click();
  await page.getByText('(1) Totalmente de acuerdo.', { exact: true }).click();
  await page.getByText('No me detengo, ¡voy por más! 🏃‍♂️🏃‍♀️').click();
  await page.getByText('Sí, tengo un presupuesto al detalle. Cuido cada peso y me aseguro de cubrir nece').click();
  await page.getByText('Rara vez tengo dificultades, pero puedo manejarlas. 💳',{ exact: true }).click();
  await page.waitForTimeout(20000);
  await page.getByText('Recurrí a contactos o recursos existentes para obtener crédito. 📞🙏', { exact: true }).click();
  await page.getByText('Claro que sí.').click();
  await page.getByText('Otro. 🤔').click();
});

test('Tagsname:tagsvalue pierde_ingresos', async ({ page }) => {
  await page.getByText('¡Qué comes que adivinas! 😎 Arranquemos 🏃‍♂️🏁').click();
  await page.getByText('¡Vamos!').click();
  await page.getByText('(4) En desacuerdo en cierta medida. 💭').click();
  await page.getByText('(5) Totalmente en desacuerdo. 💰').click();
  await page.getByText('(2) De acuerdo en cierta medida. 💭💼 ').click();
  await page.waitForTimeout(30000);
  await page.getByText('¡Por supuesto, sigamos adelante juntos! 💙').click();
  await page.getByText('(1) Muy de acuerdo. ¡Siempre pago a tiempo! 📆').click();
  await page.getByText('(1) Totalmente de acuerdo. 💰').click();
  await page.getByText('(3) Neutral, ni de acuerdo ni en desacuerdo. 😐').click();
  await page.waitForTimeout(30000);
  await page.getByText('No me detengo, ¡voy por más! 🏃‍♂️🏃‍♀️',{ exact: true }).click();
  await page.waitForTimeout(20000);
  await page.getByText('Sí, tengo un presupuesto al detalle. Cuido cada peso y me aseguro de cubrir nece').click();
  await page.waitForTimeout(20000);
  await page.getByText('Rara vez tengo dificultades, pero puedo manejarlas. 💳 ').click();
  await page.getByText('Me las ingenié para generar ingresos adicionales. 💪🔨').click();
  await page.getByText('Claro que sí.').click();
  await page.getByText('Trabajé horas extras, gané dinero extra.').click();
  await page.getByText('Seguir mi carrera ✨🏃‍♂️🏃‍♀️').click();
  await page.getByText('Nada de confianza. 😬').click();
  await page.getByText('Menos de 1 semana ⏰').click();
  //await page.getByText('No lo sé 🤔🏠💸 ').click();
  await page.close();
})



test('Tagsname:tagsvalue motivacion', async ({ page }) => {
  await page.waitForTimeout(20000);
  await page.getByText('¡Qué comes que adivinas! 😎 Arranquemos 🏃‍♂️🏁').click();
  await page.waitForTimeout(20000);
  await page.getByText('¡Vamos!').click();
  await page.getByText('(4) En desacuerdo en cierta medida. 💭').click();
  await page.getByText('(5) Totalmente en desacuerdo. 💰').click();
  await page.getByText('(1) Totalmente de acuerdo. 💰💼').click();
  await page.getByText('¡Por supuesto, sigamos adelante juntos! 💙').click();
  await page.getByText('(1) Muy de acuerdo. ¡Siempre pago a tiempo! 📆').click();
  await page.getByText('(2) De acuerdo en cierta medida. 💭').click();
  await page.getByText('(1) Totalmente de acuerdo.', { exact: true }).click();
  await page.getByText('No me detengo, ¡voy por más! 🏃‍♂️🏃‍♀️').click();
  await page.getByText('Sí, tengo un presupuesto al detalle. Cuido cada peso y me aseguro de cubrir nece').click();
  await page.getByText('No he tenido dificultades. 💰').click();
  await page.getByText('Seguir mi carrera ✨🏃‍♂️🏃‍♀️').click();
  await page.getByText('Con algo de confianza. 🙂🔓').click();
  await page.getByText('Más de 6 meses 😎').click();
  await page.getByText('Bueno... He llegado hasta aquí, ¿no? 🚶‍♂️').click();
  await page.getByText('¡Podré comprar más que hoy! 😁💸💃').click();
  await page.getByText('¡Podré comprar exactamente lo mismo que hoy! 😉💵🔄', { exact: true }).click();
  await page.getByText('¡Exactamente 102 pesos! 💰💰').click();
  await page.getByText('No lo sé. 🧐').click();
  await page.getByText('¡En menos de 5 años, Jimena habrá liquidado su deuda! ⚡🎉💸').click();
  await page.getByText('¡Claro que sí! Toda información me sirve.').click();
  await page.getByText('¡Sin duda!').click();
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
  await page.locator('html').click();
  await page.getByText('No, vamos a la siguiente pregunta.').click();
  await page.getByText('Sí.').click();
  await page.getByText('No sé.').click();
  await page.getByText('Sí.', { exact: true }).click();
})



   
test('Tagsname:tagsvalue intencionp24_2', async ({ page }) => {
      await page.getByText('¡Qué comes que adivinas! 😎 Arranquemos 🏃‍♂️🏁').click();
      await page.getByText('¡Vamos!').click();
      await page.getByText('(4) En desacuerdo en cierta medida. 💭').click();
      await page.getByText('(5) Totalmente en desacuerdo. 💰').click();
      await page.getByText('(3) Neutral, no tengo una preferencia clara. 😐💼').click();
      await page.getByText('¡Tus respuestas me indican que vas por buen camino, demuestras tener algunas bue').click();
      await page.getByText('¡Por supuesto, sigamos adelante juntos! 💙').click();
      await page.getByText('(1) Muy de acuerdo. ¡Siempre pago a tiempo! 📆').click();
      await page.getByText('(1) Totalmente de acuerdo. 💰').click();
      await page.getByText('(1) Totalmente de acuerdo.', { exact: true }).click();
      await page.getByText('No me detengo, ¡voy por más! 🏃‍♂️🏃‍♀️').click();
      await page.getByText('Sí, tengo un presupuesto al detalle. Cuido cada peso y me aseguro de cubrir nece').click();
      await page.getByText('De vez en cuando es un problema. 💼').click();
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
      await page.locator('.sc-fsQiph').click();
      await page.getByText('¡En menos de 5 años, Jimena habrá liquidado su deuda! ⚡🎉💸').click();
      await page.getByText('¡Claro que sí! Toda información me sirve.').click();
      await page.locator('#conversationContainer').getByText('¡Tus respuestas me indican que vas por buen camino, demuestras tener algunas bue').click();
      await page.getByText('¡Sin duda!').click();
      await page.getByText('¡Sí, vamos! 👍').click();
      await page.getByText('¡Obvio! Eso no se pregunta.').click();
      await page.getByText('Puedo hacer el pago mínimo, el pago total, o realizar pagos que se sitúen entre ').click();
      await page.getByText('(2) Con cierto nivel de estrés. 😬').click();
      await page.getByText('📉 Porque pienso que afectaría negativamente mi calificación crediticia.').click();
      await page.getByText('Sí, no sabía que tenía una opción para estos casos.').click();
      await page.getByText('Es un préstamo que utiliza la línea de crédito de mi tarjeta.').click();
      await page.getByText('Sí, ¡por supuesto!').click();
      await page.getByText('¡Sí, ya lo sabía!').click();
      await page.getByText('¡Sin miedo al éxito!').click();
      await page.locator('#selectionBox').getByText('Sí.').click();
      await page.getByText('No sé.').click();
      //intencionp24_si
      await page.getByText('Sí.', { exact: true }).click();
  })



   
test.only('Tagsname:tagsvalue interes_uso_3_meses', async ({ page }) => {
  await page.waitForTimeout(20000);
  await page.getByText('¡Qué comes que adivinas! 😎 Arranquemos 🏃‍♂️🏁').click();
  await page.waitForTimeout(20000);
  await page.getByText('¡Vamos!').click();
  await page.getByText('(4) En desacuerdo en cierta medida. 💭').click();
  await page.getByText('(5) Totalmente en desacuerdo. 💰').click();
  await page.getByText('(1) Totalmente de acuerdo. 💰💼').click();
  await page.getByText('¡Por supuesto, sigamos adelante juntos! 💙').click();
  await page.getByText('(1) Muy de acuerdo. ¡Siempre pago a tiempo! 📆').click();
  await page.getByText('(2) De acuerdo en cierta medida. 💭').click();
  await page.getByText('(1) Totalmente de acuerdo.', { exact: true }).click();
  await page.getByText('No me detengo, ¡voy por más! 🏃‍♂️🏃‍♀️').click();
  await page.getByText('Sí, tengo un presupuesto al detalle. Cuido cada peso y me aseguro de cubrir nece').click();
  await page.getByText('No he tenido dificultades. 💰').click();
  await page.getByText('Seguir mi carrera ✨🏃‍♂️🏃‍♀️').click();
  await page.getByText('Con algo de confianza. 🙂🔓').click();
  await page.getByText('Más de 6 meses 😎').click();
  await page.getByText('Bueno... He llegado hasta aquí, ¿no? 🚶‍♂️').click();
  await page.getByText('¡Podré comprar más que hoy! 😁💸💃').click();
  await page.getByText('¡Podré comprar exactamente lo mismo que hoy! 😉💵🔄', { exact: true }).click();
  await page.getByText('¡Exactamente 102 pesos! 💰💰').click();
  await page.getByText('No lo sé. 🧐').click();
  await page.getByText('¡En menos de 5 años, Jimena habrá liquidado su deuda! ⚡🎉💸').click();
  await page.getByText('¡Claro que sí! Toda información me sirve.').click();
  await page.getByText('¡Sin duda!').click();
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
  await page.locator('html').click();
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
  await page.getByText('(1) Tengo mucha incertidumbre.').click();
  await page.getByText('Aprender sobre mi Tarjeta de crédito 💳').click();
  await page.getByText('Pago entre el mínimo y el total').click();
  await page.getByText('Pago Total', { exact: true }).click();
  await page.getByText('Pago Mínimo', { exact: true }).click();
  await page.locator('#selectionBox').getByRole('button', { name: 'Zoom image' }).first().click();
  await page.getByText('Aprender sobre mi Disposición de Efectivo 💰').click();
  await page.getByText('¿En qué situaciones podría utilizarla?').click();
  await page.locator('div').filter({ hasText: /^¿Cuáles son los costos asociados a ella\?$/ }).nth(2).click();
  await page.getByText('¿Cuál es el monto al que puedo acceder?').click();
  await page.getByText('¿Cómo puedo acceder a ella?').click();
  await page.locator('.sc-fsQiph').click();  
  await page.waitForTimeout(30000);
  await page.getByText('😕 En desacuerdo en cierta medida.').click();
  //interes_uso_3_meses
  await page.getByText('😄 Me interesa mucho. ').click();                   
  //await page.getByText('😊 Me interesa en cierta medida. ').click();
  //await page.getByText('😞 No me interesa para nada.').click();
  await page.getByText('😞 Muy mala').click();
  })

}) 