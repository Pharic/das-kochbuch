import { browser, by, element } from 'protractor';

export class RegisterPage {
  navigateTo() {
      return browser.get('/user/register');
  }
  getUsernameTextbox() {
    return element(by.name('username'));
   }
   getEmailTextbox() {
    return element(by.name('email'));
   }
   getNameTextbox() {
    return element(by.name('name'));
   }
   getLastenameTextbox() {
    return element(by.name('lastname'));
   }
   getPasswordTextbox() {
    return element(by.name('password'));
   }
  getConfirmPasswordTextbox() {
    return element(by.name('confirmPassword'));
   }
}
