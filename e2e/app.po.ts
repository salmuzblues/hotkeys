import { browser, by, element } from 'protractor';

export class HotkeysAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('HK-root h1')).getText();
  }
}
