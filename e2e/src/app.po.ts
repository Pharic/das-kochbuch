import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
export class LoginPage {
  navigateTo() {
      return browser.get('/user/login');
  }
  getEmailTextbox() {
    return element(by.name('username'));
   }
   getPasswordTextbox() {
    return element(by.name('password'));
   }
}

