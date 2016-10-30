import { AngularUnivercityPage } from './app.po';

describe('angular-univercity App', function() {
  let page: AngularUnivercityPage;

  beforeEach(() => {
    page = new AngularUnivercityPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
