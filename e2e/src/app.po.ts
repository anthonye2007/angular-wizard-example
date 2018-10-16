import { browser, by, element } from 'protractor';

export class AppPage {
  getVehicleText() {
    return element(by.css('app-vehicle')).getText();
  }
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
