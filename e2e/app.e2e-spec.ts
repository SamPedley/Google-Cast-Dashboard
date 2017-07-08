import { GoogleCastDashboardPage } from './app.po';

describe('google-cast-dashboard App', () => {
  let page: GoogleCastDashboardPage;

  beforeEach(() => {
    page = new GoogleCastDashboardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
