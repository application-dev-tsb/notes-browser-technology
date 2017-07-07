import { browser, by, element } from 'protractor';

export class AngularUdemyBasicsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
