import { browser, by, element } from 'protractor';

export class WeatherPwaPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('wa-root h1')).getText();
  }
}
