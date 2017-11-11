import { AmLoggerPage } from './app.po';

describe('am-logger App', () => {
  let page: AmLoggerPage;

  beforeEach(() => {
    page = new AmLoggerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
