import { BoBPage } from './app.po';

describe('bo-b App', function() {
  let page: BoBPage;

  beforeEach(() => {
    page = new BoBPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
