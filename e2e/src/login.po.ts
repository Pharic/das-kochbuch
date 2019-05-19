import { browser, by, element } from 'protractor';

export class LoginPage {
  private credentias = {
    username: 'test',
    password: 'test'
  };

  navigateTo() {
    return browser.get('/user/login');
  }

  fillCredentials(credentias: any = this.credentias) {
    element(by.css('[name="username"]')).sendKeys(credentias.username);
    element(by.css('[name="password"]')).sendKeys(credentias.password);
    element(by.css('.btn-primary')).click();
  }

  getErrorMessage() {
    return element(by.css('.alert-danger')).getText();
  }
}

/* import { browser, by, element } from 'protractor';

export class LoginPage {
  navigateTo() {
      return browser.get('/user/login');
  }
  getUsernameTextbox() {
    return element(by.name('username'));
   }
  getPasswordTextbox() {
    return element(by.name('password'));
   }
  getForm() {
    return element(by.name('id'));
  }
} */
