import { AngularUdemyCourseProjectPage } from './app.po';

describe('angular-udemy-course-project App', () => {
  let page: AngularUdemyCourseProjectPage;

  beforeEach(() => {
    page = new AngularUdemyCourseProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
