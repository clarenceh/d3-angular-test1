import { D3AngularTest1Page } from './app.po';

describe('d3-angular-test1 App', () => {
  let page: D3AngularTest1Page;

  beforeEach(() => {
    page = new D3AngularTest1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
