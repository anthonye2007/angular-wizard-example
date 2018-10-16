import { browser, by, element } from 'protractor';

export class VehiclePage {
  navigateTo() {
    return browser.get('/#/vehicle');
  }

  getParagraphText() {
    return element(by.css('app-vehicle')).getText();
  }
}
