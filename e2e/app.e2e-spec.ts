import { ConverterTestPage } from './app.po';

describe('converter-test App', () => {
  let page: ConverterTestPage;

  beforeEach(() => {
    page = new ConverterTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
