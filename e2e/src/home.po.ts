import { browser, by, element } from 'protractor';

export class HomePage {
  navigateTo() {
    return browser.get('/home'); // we can navigate to '/' for get pblic page since this is the default route
  }

  logOut() {
    return element(by.css('a[href="/logout"]')).click();
  }
}
