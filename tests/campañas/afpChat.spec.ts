import { test, expect, devices, type Page} from '@playwright/test';

const { TodoPage } = require('../chatbot/util.spec');


test.describe("AFP Perfilamiento Aprendiz Tests",() => {

  let todoPage;   


    test.beforeEach(async ({ page }) => {
      await page.goto('https://dbot-qa.opseeker.com/staging/AFP/Cuestionario/index.html');      
      todoPage = new TodoPage(page);
      });           



      test('Aprendiz test', async ({ page }) => {        
        const aprenProfile = await page.getByText('¡Eres aprendiz! Estas en un escenario de oportunidades, el primero es conocer al detalle el manejo que das a tu dinero e incluir nuevas prácticas, darás un giro de 180°. Recuerda incluir en tus acciones un plan para tu jubilación, tu Yo futuro te lo agradecerá. ');
        const btwo = page.getByTestId('bubble-button-2');
        const cl = page.getByTestId('bubble-button-133');
        const responder = page.getByTestId('bubble-no-testid');
        const gom = page.getByTestId('bubble-button-138');
        const morepesos = page.getByTestId('bubble-button-5');
        const go = page.getByTestId('bubble-button-128');
        const yes = page.getByTestId('bubble-button-143');
        const moreTell = page.getByTestId('bubble-button-147');
        const lostme = page.getByTestId('bubble-button-152');
        const more = page.getByTestId('bubble-button-12');
        const moreM = page.getByTestId('bubble-button-159');
        const entendido = page.getByTestId('bubble-button-164');
        const verdadero = page.getByTestId('bubble-button-16');
        const yesTell = page.getByTestId('bubble-button-174');
        const imageYes = page.getByTestId('bubble-button-208');
        const nose = page.getByTestId('bubble-button-57');
        const not = page.getByTestId('bubble-button-60'); 
        const nott = page.getByTestId('bubble-button-65'); 
        const funciona = page.getByTestId('bubble-button-241')
        const nottt = page.getByTestId('bubble-button-81');
        const meda = page.getByTestId('bubble-button-85');
        const yess = page.getByTestId('bubble-button-264');
        const aprendiz = page.getByTestId('bubble-button-273');
        const acepto = page.getByTestId('bubble-button-267');
        const email = page.getByTestId('bubble-no-testid');
        
        await sacrifcioTest(page);
        await go.click();
        await btwo.click();
        await cl.click();
        await gom.click();
        await morepesos.click();
        await yes.click();
        await moreTell.click();
        await lostme.click();
        await more.click();
        await moreM.click();
        await entendido.click();
        await verdadero.click();
        await yesTell.click();
        await imageYes.click();
        await nose.click();
        await not.click();
        await page.getByText('No sé cómo hacerlo').click();
        await responder.click();
        await nott.click();
        await funciona.click();
        await nottt.click();
        await meda.click();
        await page.getByText('Flexibilidad para realizarlos (cuando y cuanto quiera)').click();
        await page.getByText('Libertad para disponer de los aportes realizados').click();
        await page.getByText('Que tenga un beneficio en impuestos').click();
        await responder.click();
        await page.getByText('Desconfianza en la AFP').click();
        await page.getByText('No tener el dinero').click();
        await page.getByText('No contar con el apoyo de su familia').click();
        await page.waitForTimeout(100);
        await responder.click();
        await yess.click();
        await aprendiz.click();
        await acepto.click();
        await emailEnter(page);
        await expect(aprenProfile).toContainText(['¡Eres aprendiz!']);
        await page.waitForTimeout(500);
      
      });

    })




test.describe("Emprendedor Tests",() => {

  let todoPage;   

    test.beforeEach(async ({ page }) => {
      await page.goto('https://dbot-qa.opseeker.com/staging/AFP/Cuestionario/index.html');      
      todoPage = new TodoPage(page);
      await planearTest(page);
      });           

      test('Emprendedor test', async ({ page }) => {
        const imageExProfile =  await page.locator('#conversationContainer').getByRole('button', { name: 'Zoom image' })
        const emprendeProfile = await page.getByText('¡Eres emprendedor! Vas por  buen camino, sigue ampliando tus conocimientos sobre el manejo del dinero y evalúate periódicamente');       
        const responder = page.getByTestId('bubble-no-testid');        
        const noremedy = page.getByTestId('bubble-button-129');
        const btwo = page.getByTestId('bubble-button-2');
        const next = page.getByTestId('bubble-button-134');
        const moreTen = page.getByTestId('bubble-button-54');
        const morepesos = page.getByTestId('bubble-button-5');
        const pocoNec = page.getByTestId('bubble-button-86');
        const yes = page.getByTestId('bubble-button-143');
        const moreTell = page.getByTestId('bubble-button-147');
        const superCl = page.getByTestId('bubble-button-251');
        const less = page.getByTestId('bubble-button-11');
        const avanza = page.getByTestId('bubble-button-160');
        const verdadero = page.getByTestId('bubble-button-16');
        const yesTell = page.getByTestId('bubble-button-174');
        const imageYes = page.getByTestId('bubble-button-209');
        const nose = page.getByTestId('bubble-button-69');
        const not = page.getByTestId('bubble-button-60'); 
        const funciona = page.getByTestId('bubble-button-73')
        const nervioso = page.getByTestId('bubble-button-265');
        const yess = page.getByTestId('bubble-button-64');
        const yesss = page.getByTestId('bubble-button-80');
        const emprender = page.getByTestId('bubble-button-275');
        const acepto = page.getByTestId('bubble-button-267');
        //cono +1
        await noremedy.click();
        await btwo.click();
        await next.click();
        //cono +1
        await morepesos.click();
        //apren +1
        await yes.click();
        //apren +1
        await moreTell.click();
        await superCl.click();
        //cono +1
        await less.click();
        await avanza.click();
        await verdadero.click();
        //apren +1
        await yesTell.click();
        await imageYes.click(); 
        await moreTen.click();
        await not.click();
        await page.getByText('Pienso que, independientemente de mis aportes, la pensión que me den será sufici').click();
        await responder.click();
        await yess.click();
        await page.waitForTimeout(100);
        await nose.click();
        await funciona.click();
        await yesss.click();
        await page.waitForTimeout(1000);
        await pocoNec.click();
        await page.getByText('Que cada vez que realice un aporte voluntario, su empleador aporte la misma cantidad a su fondo', { exact: true }).click();
        await page.getByText('Tener descuentos adicionales a los del Club de Amigos y poder participar en sort').click();
        await page.getByText('Libertad para disponer de los aportes realizados').click();
        await responder.click();
        await page.getByText('Falta de interés por guardar dinero hasta su jubilación').click();
        await page.locator('div').filter({ hasText: /^No contar con el apoyo de su familia$/ }).nth(1).click();
        await page.locator('div').filter({ hasText: /^Desconfianza en la AFP$/ }).nth(1).click();
        await responder.click();
        await nervioso.click();
        await expect(imageExProfile).toBeVisible();
        await emprender.click();
        await acepto.click();
        await emailEnter(page);
        await expect(emprendeProfile).toContainText(['¡Eres emprendedor!']);
        await page.waitForTimeout(500);
      
        
      });

    })




test.describe("Experto Tests",() => {
  let todoPage;   
    test.beforeEach(async ({ page }) => {
      await page.goto('https://dbot-qa.opseeker.com/staging/AFP/Cuestionario/index.html');      
      todoPage = new TodoPage(page);
      await neutroTest(page);
      }); 
      test('Experto test', async ({ page }) => {
        const imageExProfile =  await page.locator('#conversationContainer').getByRole('button', { name: 'Zoom image' })
        const expeProfile = await page.getByText('¡Eres experto! Las finanzas requieren de aprendizaje continuo, continua aprendiendo sobre el manejo del dinero y evalúate periódicamente.');
        const responder = page.getByTestId('bubble-no-testid');        
        const entendido = page.getByTestId('bubble-button-164');
        const btwo = page.getByTestId('bubble-button-2');
        const go = page.getByTestId('bubble-button-128');
        const goTwo = page.getByTestId('bubble-button-138');
        const moreTen = page.getByTestId('bubble-button-5');
        const yes = page.getByTestId('bubble-button-143');
        const moreTell = page.getByTestId('bubble-button-147');
        const moreTelll = page.getByTestId('bubble-button-159');
        const superCl = page.getByTestId('bubble-button-251');
        const less = page.getByTestId('bubble-button-11');
        const falso = page.getByTestId('bubble-button-17');
        const imageYes = page.getByTestId('bubble-button-209');
        const not = page.getByTestId('bubble-button-60'); 
        const notT = page.getByTestId('bubble-button-65'); 
        const notTt = page.getByTestId('bubble-button-81'); 
        const funciona = page.getByTestId('bubble-button-242')
        const nervioso = page.getByTestId('bubble-button-265');
        const yess = page.getByTestId('bubble-button-174');
        const experto = page.getByTestId('bubble-button-274');
        const acepto = page.getByTestId('bubble-button-267');
        await go.click();
        await btwo.click();
        await page.getByText('¡Claro!').click();
        await goTwo.click();                
        await moreTen.click();        
        await yes.click();
        await moreTell.click();
        
        await superCl.click();
        
        await less.click();
        
        await moreTelll.click();
        await entendido.click();
        await falso.click();
        
        await yess.click();
        await imageYes.click();
        await page.getByText('Si, es entre el 5% y 10% de mi salario').click();
        await not.click();
        await page.getByText('Pienso que, independientemente de mis aportes, la pensión que me den será sufici').click();
        await responder.click();        
        await notT.click();
        await funciona.click();
        
        await notTt.click();
        await page.getByText('Necesario', { exact: true }).click();
        await page.getByText('Facilidad para realizarlos').click();
        await page.locator('div').filter({ hasText: /^Flexibilidad para realizarlos \(cuando y cuanto quiera\)$/ }).nth(1).click();
        await page.getByText('Tener descuentos adicionales a los del Club de Amigos y poder participar en sort').click();
        await responder.click();
        await page.getByText('Falta de interés por guardar dinero hasta su jubilación').click();
        await responder.click();
        await nervioso.click();
        //await page.pause();
        await experto.click();
        await acepto.click();
        await emailEnter(page);
        await expect(expeProfile).toContainText(['¡Eres experto!']);
        await page.waitForTimeout(500);
      });

    })

test.describe("Hedonista Tests",() => {
  let todoPage;  
    test.beforeEach(async ({ page }) => {
      await page.goto('https://dbot-qa.opseeker.com/staging/AFP/Cuestionario/index.html');      
      todoPage = new TodoPage(page);
      await sacrifcioTest(page);
      }); 
      test('Hedonista test', async ({ page }) => {
        const hedoProfile = await page.getByText('¡Eres hedonista! Tal vez no te habías dado cuenta que administrar tu dinero es i');
        const responder = page.getByTestId('bubble-no-testid');      
        const exactSame = page.getByTestId('bubble-button-10');
        const btwo = page.getByTestId('bubble-button-2');
        const go = page.getByTestId('bubble-button-128');
        const next = page.getByTestId('bubble-button-134');
        const nextQ = page.getByTestId('bubble-button-142');
        const moreTen = page.getByTestId('bubble-button-5');
        const yes = page.getByTestId('bubble-button-174');
        const imageYes = page.getByTestId('bubble-button-209');
        const moreTelll = page.getByTestId('bubble-button-159');
        const nadaN = page.getByTestId('bubble-button-84');
        const morePorcentage = page.getByTestId('bubble-button-54');
        const verdadero = page.getByTestId('bubble-button-16');
        const entendido = page.getByTestId('bubble-button-164');
        const justOne = page.getByTestId('bubble-button-67');
        const not = page.getByTestId('bubble-button-60'); 
        const notT = page.getByTestId('bubble-button-81'); 
        const funciona = page.getByTestId('bubble-button-73')
        const nervioso = page.getByTestId('bubble-button-265');
        const yess = page.getByTestId('bubble-button-64');
        const hedonista = page.getByTestId('bubble-button-276');
        const acepto = page.getByTestId('bubble-button-267');
        //Flow start here
        await go.click();
        await btwo.click();
        await next.click();        //cono +1
        await moreTen.click();        //apren +1
        
        await nextQ.click();        //apren +1
        
        await exactSame.click();
        await moreTelll.click();
        await entendido.click();
        await verdadero.click();
        await yes.click();        //apren +1
        await imageYes.click();
        await morePorcentage.click();
        await not.click();
        await page.getByText('No sé cómo hacerlo').click();
        await page.getByText('Tengo la intención de hacerlo, pero aún no lo he hecho').click();
        await page.locator('div').filter({ hasText: /^La jubilación está muy lejos$/ }).nth(1).click();
        await responder.click();
       
        await yess.click();        
        await justOne.click();        
        await funciona.click();
        await notT.click();
        //await page.pause();
        await nadaN.click();
        await page.getByText('Flexibilidad para realizarlos (cuando y cuanto quiera)').click();
        await responder.click();
        await page.getByText('No recibir información a tiempo de las ganancias de sus aportes').click();
        await responder.click();
        await nervioso.click();
        await page.waitForTimeout(1000);
        
        await hedonista.click();
        await acepto.click();
        await emailEnter(page);
        await expect(hedoProfile).toContainText(['¡Eres hedonista!']);
        await page.waitForTimeout(500);
        
      });

})


async function sacrifcioTest(page: Page) {
  const sacrificoProfile = await page.getByText('¡Ahorrar puede ser al sencillo y motivador! Aquí van los consejos: 1. Ten objeti');
  const intro = page.getByTestId('bubble-button-185');
  const sacrificio = page.getByTestId('bubble-button-48');
  const responder = page.getByTestId('bubble-no-testid');
  const todoGasto = page.getByTestId('bubble-button-31');
  const avcereto = page.getByTestId('bubble-button-36');
  const consejos = page.getByTestId('bubble-button-201');
  
  await intro.click();
  await page.waitForTimeout(20000);
   // sin data-testid
  await page.locator('#selectionBox > div > div > div > div > div').first().click();
  await page.locator('#selectionBox > div > div > div:nth-child(2) > div > div').first().click();
  await page.locator('#selectionBox > div > div > div:nth-child(3) > div > div').first().click();
  await sacrificio.click();
  await page.getByText('Ahorrando en efectivo en casa').click(); // sin data-testid
  await page.getByText('Depositando en una cuenta de ahorro de una institución financiera').click(); // sin data-testid
  await responder.click();
  await page.getByText('Tienes un plan mensual de seguimiento a tus ingresos y gastos').click(); 
  await page.getByText('Tienes un registro constante de tus gastos').click();
  await responder.click();
  await todoGasto.click();
  await avcereto.click();
  await consejos.click();
  await expect(sacrificoProfile).toContainText(['¡Ahorrar puede ser al sencillo y motivador! Aquí van los consejos: 1. Ten objeti']);
}




async function planearTest(page: Page) {
  const planearProfile = await page.locator('#conversationContainer div').filter({ hasText: 'Sentirte tranquilo, respaldado y seguro no tiene precio. Por ello aquí te damos ' }).nth(4);
  const intro = page.getByTestId('bubble-button-185');
  const planear = page.getByTestId('bubble-button-49');
  const responder = page.getByTestId('bubble-no-testid');
  const parteGasto = page.getByTestId('bubble-button-32');
  const proconst = page.getByTestId('bubble-button-37');
  const consejos = page.getByTestId('bubble-button-201');
  
  await intro.click();
  await page.locator('div:nth-child(4) > div > div').first().click(); // sin data-testid
  await page.locator('#selectionBox > div > div > div:nth-child(5) > div > div').first().click(); // sin data-testid
  await page.locator('#selectionBox > div > div > div > div > div').first().click();
  await planear.click();
  await page.getByText('Depositando en una cuenta de ahorro de una institución financiera').click();
  await page.getByText('Dando dinero a la familia para ahorrar en su nombre').click();
  await responder.click();
  await page.getByText('Separas el dinero para pagar las facturas del mes y el dinero de gastos del día ').click();
  await page.getByText('Tomas nota de las próximas facturas para asegurarte de pagarlas').click();
  await responder.click();
  await parteGasto.click();
  await proconst.click();
  await consejos.click();
  await expect(planearProfile).toContainText(['Sentirte tranquilo, respaldado y seguro no tiene precio. Por ello aquí te damos']);
  await page.waitForTimeout(500);
}




async function neutroTest(page: Page) {
  const neutroProfile = await page.getByText('¡Efectivamente! Ahorrar es guardar dinero, PERO con una ganancia. No te olvides ');
  const intro = page.getByTestId('bubble-button-185');
  const guardar = page.getByTestId('bubble-button-50');
  const responder = page.getByTestId('bubble-no-testid');
  const nose = page.getByTestId('bubble-button-33');
  const  nocredito = page.getByTestId('bubble-button-38');
  const consejos = page.getByTestId('bubble-button-201');
  
  await intro.click();
  await page.locator('div:nth-child(4) > div > div').first().click();
  await page.locator('#selectionBox > div > div > div:nth-child(5) > div > div').first().click(); // sin data-testid
  await page.locator('#selectionBox > div > div > div > div > div').first().click();
  await guardar.click();
  await page.getByText('Ahorrando en otra institución fuera del sistema financiero').click();
  await page.getByText('Dando dinero a la familia para ahorrar en su nombre').click();
  await responder.click();
  await page.getByText('Tienes un registro constante de tus gastos').click();
  await page.getByText('Separas el dinero para pagar las facturas del mes y el dinero de gastos del día ').click();
  await responder.click();
  await nose.click();
  await nocredito.click();
  await consejos.click();
  await expect(neutroProfile).toContainText(['¡Efectivamente! Ahorrar es guardar dinero, PERO con una ganancia. No te olvides']);
  await page.waitForTimeout(500);
}



async function emailEnter(page: Page) {
  const emailInput = page.getByPlaceholder('ejemplo: pedrogg@yahoo.com');
  const submit = page.getByTestId('submit_textInput');
  await emailInput.click();    
  await emailInput.fill('rosanallilart@beway.com');
  await submit.click();
}
