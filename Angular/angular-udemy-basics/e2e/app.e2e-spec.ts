import { AngularUdemyBasicsPage } from './app.po';

describe('angular-udemy-basics App', () => {
  let page: AngularUdemyBasicsPage;

  beforeEach(() => {
    page = new AngularUdemyBasicsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
