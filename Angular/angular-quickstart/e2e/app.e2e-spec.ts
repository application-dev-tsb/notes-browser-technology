import { AngularQuickstartPage } from './app.po';

describe('angular-quickstart App', () => {
  let page: AngularQuickstartPage;

  beforeEach(() => {
    page = new AngularQuickstartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
