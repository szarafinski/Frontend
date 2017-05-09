import { AngularHeroDemoPage } from './app.po';

describe('angular-hero-demo App', () => {
  let page: AngularHeroDemoPage;

  beforeEach(() => {
    page = new AngularHeroDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
