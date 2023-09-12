import { Page, Locator, expect} from '@playwright/test';

export class TodoPage {
  private readonly inputWText: Locator;
  private readonly barraLeft: Locator;
  private readonly inputText: Locator;
  private readonly viewType: Locator;
  private readonly buttonDrop: Locator;
  private readonly optionImage: Locator;
  private readonly inputAltText: Locator;
  private readonly pasteUrl: Locator;
  private readonly optionGif: Locator;
  private readonly pasteGUrl: Locator;
  private readonly inputSearchG: Locator;
  private readonly inputLink: Locator;
  private readonly optionVideo: Locator;
  private readonly pasteVUrl: Locator;
  private readonly previewButton: Locator;
  private readonly closeButton: Locator;
  private readonly optionLink: Locator;
  private readonly linkLabel: Locator;
  private readonly linkUrl: Locator;
  private readonly optionTextButton: Locator;
  private readonly emailButton: Locator;
  private readonly ahpButton: Locator;
  private readonly linkertButton: Locator;
  private readonly multichoiceButton: Locator;
  private readonly notasButton: Locator;
  private readonly helpText: Locator;
  private readonly mensajeAviso: Locator;
  private readonly verificationText: Locator;
  private readonly numberButton: Locator;
  private readonly optionOne: Locator;
  private readonly optionTwo: Locator;
  private readonly optionThree: Locator;
  private readonly optionFour: Locator;
  private readonly optionFive: Locator;
  private readonly optionSix: Locator;
  private readonly optionMultichoice: Locator;
  private readonly addOptions: Locator;
 // private readonly inputs: Locator;


  constructor(public readonly page: Page) {
    //this.inputs = this.page.locator('#inputrounded');
    this.inputWText = this.page.getByPlaceholder('Write text here');
    this.barraLeft = this.page.getByTestId('sidebar');
    this.inputText = this.page.getByRole('option', { name: 'Text' });
    this.viewType = this.page.getByTestId('view-type-select');
    this.buttonDrop = this.page.getByTestId('view-type-select').locator('svg');
    this.optionImage = this.page.getByText('Image', { exact: true });
    this.inputAltText = this.page.getByPlaceholder('Alternative text');
    this.pasteUrl = this.page.getByPlaceholder('Paste image url here');
    this.optionGif = this.page.locator('#react-select-2-option-2');
    this.pasteGUrl = this.page.getByPlaceholder('Paste gif url here');
    this.inputSearchG = this.page.getByPlaceholder('Search in Gyphy');
    this.inputLink = this.page.getByRole('link', { name: 'Running Man Abandon Thread GIF by MOODMAN' });
    this.optionVideo = this.page.getByText('Youtube', { exact: true });
    this.pasteVUrl = this.page.getByPlaceholder('Video url');
    this.previewButton = this.page.getByRole('button', { name: 'ChatOption Preview' });
    this.closeButton = this.page.getByRole('button', { name: 'Close' });
    this.optionLink = this.page.getByText('Link', { exact: true });
    this.linkLabel = this.page.getByPlaceholder('Link label');
    this.linkUrl = this.page.getByPlaceholder('Link url');

    this.optionTextButton = this.page.locator('#react-select-2-option-4');
    this.helpText = this.page.getByPlaceholder('Placeholder');
    this.mensajeAviso = this.page.getByPlaceholder('Warning message');    
    this.emailButton = this.page.getByText('Email', { exact: true });
    this.verificationText = this.page.locator('div').filter({ hasText: /^Verification typeNoneENES$/ }).locator('svg');
    this.numberButton = this.page.getByText('Number', { exact: true });
    this.ahpButton = page.getByText('AHP', { exact: true });
    this.optionOne = page.locator('div').filter({ hasText: /^Option index: 0$/ }).getByPlaceholder('Option');
    this.optionTwo = page.locator('div').filter({ hasText: /^Option index: 1$/ }).getByPlaceholder('Option');
    this.optionThree = page.locator('div').filter({ hasText: /^Option index: 2$/ }).getByPlaceholder('Option');
    this.optionFour = page.locator('div').filter({ hasText: /^Option index: 3$/ }).getByPlaceholder('Option');
    this.optionFive = page.locator('div').filter({ hasText: /^Option index: 4$/ }).getByPlaceholder('Option');
    this.optionSix = page.locator('div').filter({ hasText: /^Option index: 5$/ }).getByPlaceholder('Option');
    this.optionMultichoice = page.getByText('Multiple choice', { exact: true });
    this.addOptions = page.getByRole('button', { name: '+ Add option' });
    this.linkertButton=  page.getByText('Likert', { exact: true });
    //this.notasButton: Locator;*/

  }

  async goto(text: string) {
    await this.page.goto(text);
  }

  async addText(text: string) {    
    await this.inputWText.fill(text);
    await expect(this.barraLeft).toBeTruthy();
    await expect(this.viewType).toBeTruthy();
    await expect(this.inputText).toBeTruthy();
  }
  async addImage(text: string) {
    await this.buttonDrop.click();
    await this.optionImage.click();
    await this.pasteUrl.click();
    await this.pasteUrl.fill('https://www.shutterstock.com/image-vector/man-vs-woman-runners-vector-260nw-639227380.jpg');
    await this.inputAltText.click();
    await this.inputAltText.fill(text);
  }


  async loadImageLocal(page: Page, text: string) {
    await this.buttonDrop.click();
    await this.optionImage.click();
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByText('browse').click();
    const fileChooser = await fileChooserPromise;
    await page.waitForTimeout(1000);
    await fileChooser.setFiles('tests/imageLocal.jpg');
    await this.inputAltText.click();
    await this.inputAltText.fill(text);
  }


  async addGif(text: string) {
    await this.buttonDrop.click();
       // Add Gif url  inside Box  
    await this.optionGif.click();
    await this.pasteGUrl.click();
    await this.pasteGUrl.fill('https://media1.giphy.com/media/THD7thMQZoOYoyZ3EK/200w.gif?cid=6c09b952cx4kwt83y4e1seucjbl1qy1kcnq8cxv84xcpe8wc&ep=v1_gifs_search&rid=200w.gif&ct=g');
    await this.inputAltText.click();
    await this.inputAltText.fill(text);
  }
  async addSearchGif() {
    await this.buttonDrop.click();
    await this.optionGif.click();
    await this.inputSearchG.click();
    await this.inputSearchG.fill('runner');
    await this.inputLink.click();
  }

  async addVideo(text: string) {
    await this.buttonDrop.click();
    await this.optionVideo.click();
    await this.pasteVUrl.click();
    await this.pasteVUrl.fill(text);
  }


  async addLink(text: string) {
    await this.buttonDrop.click();
    await this.optionLink.click();
    await this.linkLabel.click();
    await this.linkLabel.fill('marathon');
    await this.linkUrl.click();   
    await this.linkUrl.fill(text);
  }



  async addTextInput(page: Page) {
    await this.buttonDrop.click();
    await this.optionTextButton.click();
    await this.helpText.click();
    await this.helpText.fill('Escribe un texto');
    await this.mensajeAviso.click();
    await this.mensajeAviso.fill('Error!, escribe un texto');
    await this.previewButton.click();
    await this.helpText.click();
    await this.helpText.fill('Qa manager');
    await this.helpText.press('Enter'); 
    await page.waitForTimeout(10000);

  }



  async addEmail(page: Page) {
    await this.buttonDrop.click();
    await this.optionTextButton.click(); 
    await this.verificationText.click();
    await this.emailButton.click();   
    await this.helpText.click();
    await this.helpText.fill('Escribe tu correo electronico');
    await this.mensajeAviso.click();
    await this.mensajeAviso.fill('Error!, revisa el email');
    await this.previewButton.click();
    await this.helpText.click();
    await this.helpText.fill('tester@gmail.com'); 
    await this.helpText.press('Enter'); 
    await page.waitForTimeout(10000);
  }



  async addNumero(page: Page) {
    //Add  Text Input number option
    await this.buttonDrop.click();
    await this.optionTextButton.click(); 
    await this.verificationText.click();
    await this.numberButton.click();
    await this.helpText.fill('Escribe un numero');
    await this.mensajeAviso.click();
    await this.mensajeAviso.fill('Error!, no es un numero');
    await this.previewButton.click();
    await this.helpText.click();      
    await this.previewButton.click();  
    await this.helpText.click();
    await this.helpText.fill('8');
    await this.helpText.press('Enter');
    await page.waitForTimeout(10000);
  }



  async addAHP(page: Page) {
    await this.buttonDrop.click();
    await this.ahpButton.click();
    await page.getByPlaceholder('Option 1').click();
    await page.getByPlaceholder('Option 1').fill('One');
    await page.getByPlaceholder('Option 2').click();
    await page.getByPlaceholder('Option 2').fill('Two');
    await this.previewButton.click();
    await page.getByText('Son igualmente importantes').click();
    // probar de forma manual desplazamiento de la barra
    await page.waitForTimeout(10000);

    
  }



  async addLinkert(page: Page) {
    await page.getByRole('button', { name: 'Box and two buttons' }).click();    
    await page.getByPlaceholder('Write text here').fill('linkert');
    await page.locator('canvas').first().click({
      position: {
        x: 1497,
        y: 553
      }
    });
    await this.buttonDrop.click();
    await this.linkertButton.click();
    await this.previewButton.click();
    await page.locator('div > div:nth-child(4) > div > div').first().click();
  }



  async addMultichoice(page: Page) {
    await this.buttonDrop.click();
    await this.optionMultichoice.click();
    await this.optionOne.click();
    await this.optionOne.fill('One');
    await this.optionTwo.click();
    await this.optionTwo.fill('Two');    
    await this.addOptions.click();
    await this.optionThree.click();
    await this.optionThree.fill('Three');
    await this.addOptions.click();
    await this.optionFour.click();
    await this.optionFour.fill('Four');
    await this.addOptions.click();
    await this.optionFive.click();
    await this.optionFive.fill('Five');
    await this.addOptions.click();
    await this.optionSix.click();
    await this.optionSix.fill('Six');
    await this.previewButton.click();
    await page.getByText('One').click();
    await page.getByText('Two').click();
    await page.getByText('Six').click();
    await page.getByTestId('bubble-bubble-0').getByRole('textbox').click();
    await page.getByTestId('bubble-bubble-0').getByRole('textbox').fill('AAAAAAA');
    await page.getByTestId('bubble-no-testid').click();
    await page.close();
  }
  async checkPreviewButton(page: Page) {
    await this.previewButton.click();
    await page.waitForTimeout(10000);
    await expect(page.getByRole('banner')).toBeVisible();
    await this.closeButton.click();
    await page.waitForTimeout(10000);
}
  async cargaChatfromCampaign(page: Page) {
    await page.getByText('rosana').click();
    await page.getByText('Workspaces').click();
    await page.getByRole('menuitem', { name: 'demo CaretRightFill' }).click();
    await page.getByRole('menuitem', { name: 'Load' }).getByText('Load').click();
    await page.getByText('rosana').click();
    await page.getByRole('menuitem', { name: 'Campaigns' }).click();
    await page.getByText('/qae2etest').click();
    await page.getByText('/conversations').click();
    await page.getByText('/conversation.json').click();

  }
  async loginCampaign(page: Page) {
      await page.getByRole('button', { name: 'Login Sign in' }).click();
      await page.getByRole('textbox', { name: 'Username' }).click();
      await page.getByRole('textbox', { name: 'Username' }).fill('rosana');
      await page.getByRole('textbox', { name: 'Password' }).click();
      await page.getByRole('textbox', { name: 'Password' }).fill('samuel2013*/');
      await page.getByRole('button', { name: 'submit' }).click();

  }
  async variableCreate(page: Page) {
    await page.getByRole('menuitem', { name: 'Variables' }).click();
    await page.getByRole('button', { name: 'FormAdd Create new variable' }).click();

}



async introBancoppel(page: Page){
  await page.getByText('¡Qué comes que adivinas! 😎 Arranquemos 🏃‍♂️🏁').click();
    await page.getByText('¡Vamos!').click();
}



async Feedback_Seccion1_low(page: Page){ 
  const low = await page.getByText('¡Tus respuestas me indican que puedes tener una preferencia por gastar dinero en lugar de ahorrarlo! 😄💸 Recuerda que es importante encontrar un equilibrio entre disfrutar el presente y planificar para el futuro.');
  await this.introBancoppel(page);
  await page.getByText('(1) Totalmente de acuerdo. 🤑').click();
  await page.getByText('(3) Neutral, no tengo una preferencia clara. 😐').click();
  await page.getByText('(4) En desacuerdo en cierta medida. 💭🤷‍♂️').click();
  await expect(low).toContainText(['¡Tus respuestas me indican que puedes tener una preferencia por gastar dinero en lugar de ahorrarlo! 😄💸 Recuerda que es importante encontrar un equilibrio entre disfrutar el presente y planificar para el futuro.']);
  }

  

async Feedback_Seccion1_Medium(page: Page){ 
  const medium = await page.getByText('¡Tus respuestas me indican que vas por buen camino, demuestras tener algunas buenas actitudes financieras!');
  await this.introBancoppel(page);
  await page.getByText('(4) En desacuerdo en cierta medida. 💭').click();
  await page.getByText('(5) Totalmente en desacuerdo. 💰').click();
  await page.getByText('(3) Neutral, no tengo una preferencia clara. 😐💼').click();
  await expect(medium).toContainText(['¡Tus respuestas me indican que vas por buen camino, demuestras tener algunas buenas actitudes financieras!']);
  await page.pause();  
  

  }

async Feedback_Seccion1_High(page: Page){   
  const high = await page.getByText('¡Se ve que conoces bastante sobre finanzas sanas! 💰') 
  await this.introBancoppel(page);
  await page.getByText('(5) Totalmente en desacuerdo. 💰').click();
  await page.locator('#selectionBox').getByText('(5) Totalmente en desacuerdo. 💰').click();
  await page.getByText('(2) De acuerdo en cierta medida. 💭💼').click();
  await expect(high).toContainText(['¡Se ve que conoces bastante sobre finanzas sanas! 💰']);  
  await page.pause();  
}

async High_Financial_literacy_Profile(page: Page){  
  const highF = await page.getByText('¡Se ve que conoces bastante sobre finanzas sanas! 💰  ');  
  await this.introBancoppel(page);
await page.locator('#selectionBox div').filter({ hasText: 'No lo sé 🧐' }).nth(2).click();
await page.getByText('Al menos 1 mes pero menos de 3 meses 😐📅').click();
await page.getByText('Bueno... He llegado hasta aquí, ¿no? 🚶‍♂️').click();
await page.getByText('¡Podré comprar más que hoy! 😁💸💃').click();
await page.getByText('¡El costo de vida está bajando rápidamente! 💸📉🏃').click();
await page.getByText('¡Más de 102 pesos! 💵💵💵').click();
await page.getByText('Comprar una variedad de acciones y participaciones de diferente empresas. 🌍🤝').click();
await page.getByText('Jimena va a tardar entre 5 a 10 años para liquidar su deuda. 🤞📆💰').click();
await page.getByText('¡Claro que sí! Toda información me sirve.').click();
await expect(highF).toContainText(['¡Se ve que conoces bastante sobre finanzas sanas!💰']); 

}


async Medium_Financial_literacy_Profile(page: Page) {   
  const mediumF = await page.getByText('¡Tus respuestas me indican que vas por buen camino, demuestras tener algunas buenas actitudes financieras!');   
  await page.locator('#selectionBox div').filter({ hasText: 'No lo sé 🧐' }).nth(2).click();
  await page.getByText('Al menos 1 mes pero menos de 3 meses 😐📅').click();
  await page.getByText('Bueno... He llegado hasta aquí, ¿no? 🚶‍♂️').click();
  await page.getByText('¡Podré comprar más que hoy! 😁💸💃').click();
  await page.getByText('¡El costo de vida está bajando rápidamente! 💸📉🏃').click();
  await page.getByText('¡Más de 102 pesos! 💵💵💵').click();
  await page.getByText('Comprar una variedad de acciones y participaciones de diferente empresas. 🌍🤝').click();
  await page.getByText('Jimena va a tardar entre 5 a 10 años para liquidar su deuda. 🤞📆💰').click();
  await page.getByText('¡Claro que sí! Toda información me sirve.').click();
  await expect(mediumF).toContainText(['¡Tus respuestas me indican que vas por buen camino, demuestras tener algunas buenas actitudes financieras!']); 

  }




  async Low_Financial_literacy_Profile(page: Page){   
  const lowF = await page.getByText('¡Tus respuestas me indican que tienes una oportunidad para aprender sobre cómo manejar tu dinero de manera más eficiente 📚!');
  await page.getByText('No lo sé 🧐').click();
  await page.getByText('Al menos 1 mes pero menos de 3 meses 😐📅').click();
  await page.getByText('Bueno... He llegado hasta aquí, ¿no? 🚶‍♂️').click();
  await page.getByText('¡Podré comprar más que hoy! 😁💸💃').click();
  await page.getByText('¡El costo de vida está bajando rápidamente! 💸📉🏃').click();
  await page.getByText('¡Más de 102 pesos! 💵💵💵').click();
  await page.getByText('Comprar una variedad de acciones y participaciones de diferente empresas. 🌍🤝').click();
  await page.getByText('Jimena va a tardar entre 5 a 10 años para liquidar su deuda. 🤞📆💰').click();
  await page.getByText('¡Claro que sí! Toda información me sirve.').click();
  await expect(lowF).toContainText(['¡Tus respuestas me indican que tienes una oportunidad para aprender sobre cómo manejar tu dinero de manera más eficiente 📚!']); 

  
  }    








/*test('Chat test Flow', async ({ page }) => {

  const arrayOfLocators = page.getByTestId('bubble');
  const elementsCount = await arrayOfLocators.count();
  //let texts = [];
  console.log(elementsCount);
  let index = 0 
  while (true){
     index++;
     await page.waitForTimeout(1000);
     await arrayOfLocators.nth(index).click({force: true, timeout: 500});     
     await page.waitForTimeout(1000);
  }


 for (var index=1; index in Range;index++) {
       await arrayOfLocators.nth(index).click({force: true});
  }*/
  

      
  /*  test('Web Scraping with Playwright', async ({ page }) => {

        await page.goto('https://tulum.opseeker.com/tulum/tulumsmartsurvey/index.html'); 


        const { chromium } = require('playwright');

        
        const browser = await chromium.launch({headless: true}); 
        const context = await browser.newContext({ userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' +
                ' AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36', }); 

        // Do something on the website 
        // ... 
        const pageTitle = await page.title(); 
        console.log(pageTitle);
        await browser.close(); 
       
      await scrappinTulum();
    })
    });
  
async function scrappinTulum ()  {
    
    // Navigate to a website 
   
}*/

}