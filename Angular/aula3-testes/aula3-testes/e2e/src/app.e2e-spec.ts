import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('deve ser 2 ao clicar 2x em +', () => {
    page.navigateTo();
    page.getIncrementButton().click();
    page.getIncrementButton().click();
    page.getIncrementButton().click();
    page.getIncrementButton().click();
    page.getIncrementButton().click();
    page.getIncrementButton().click();
    page.getIncrementButton().click();
    page.getIncrementButton().click();
    page.getIncrementButton().click();
    page.getIncrementButton().click();
    page.getIncrementButton().click();
    page.getIncrementButton().click();
    
    expect(page.getCounterText()).toBe('12');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
