import { HomePage } from './home.po';

describe('protractor-tutorial - Public page', () => {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
  });

  it('when user browses to our app he should see the default “public” screen', () => {
    page.navigateTo();
    expect(page.logOut()).toEqual('Abmelden');
  });
});
