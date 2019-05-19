import { LoginPage } from './login.po';
import { HomePage } from './home.po';
describe('protractor-tutorial - Login page', () => {
  let page: LoginPage;
  let homePage: HomePage;

  const wrongCredentias = {
    username: 'wrongname',
    password: 'wrongpasswd'
  };

  beforeEach(() => {
    page = new LoginPage();
    homePage = new HomePage();
  });

  it('when user trying to login with wrong credentials he should stay on “login” page and see error notification', () => {
    page.navigateTo();
    page.fillCredentials(wrongCredentias);
    expect(page.getErrorMessage()).toEqual('Username or password is incorrect');
  });

  it('when login is successful — he should redirect to default “public” page', () => {
    page.navigateTo();
    page.fillCredentials();
    expect(homePage.logOut()).toEqual('Abmelden');
  });





/* import { LoginPage } from './login.po';

describe('Login tests', () => {
  let page: LoginPage;

  beforeEach(() => {
      page = new LoginPage();
      page.navigateTo();
  });
  it('Login form should be valid', () => {
    page.getUsernameTextbox().sendKeys('test');
    page.getPasswordTextbox().sendKeys('test');


    let form = page.getForm().getAttribute('class');
    expect(form).toContain('ng-valid');
   });
}); */
