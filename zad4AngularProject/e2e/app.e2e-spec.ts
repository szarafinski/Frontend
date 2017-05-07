import { MealsProjectPage } from './app.po';

describe('meals-project App', () => {
  let page: MealsProjectPage;

  beforeEach(() => {
    page = new MealsProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
