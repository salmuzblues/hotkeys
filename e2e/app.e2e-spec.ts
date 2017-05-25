import { HotkeysAppPage } from './app.po';

describe('hotkeys-app App', () => {
  let page: HotkeysAppPage;

  beforeEach(() => {
    page = new HotkeysAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('HK works!');
  });
});
