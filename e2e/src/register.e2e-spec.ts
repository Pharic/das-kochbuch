import { RegisterPage } from './register.po';
const uuidv1 = require('uuid/v1');
const uuid1 = uuidv1();

describe('Login tests', () => {
  let page: RegisterPage;

  beforeEach(() => {
      page = new RegisterPage();
      page.navigateTo();
  });
  it('Login form should be valid', () => {
    page.getUsernameTextbox().sendKeys(uuid1);
    page.getEmailTextbox().sendKeys('e2etest@test.de');
    page.getNameTextbox().sendKeys('e2e');
    page.getLastenameTextbox().sendKeys('test');
    page.getPasswordTextbox().sendKeys('e2etest');
    page.getConfirmPasswordTextbox().sendKeys('e2etest');
/*     let form = page.getForm().getAttribute('class');
    expect(form).toContain('ng-valid'); */
   });
});
