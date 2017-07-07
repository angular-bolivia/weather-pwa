import { WeatherPwaPage } from './app.po';

describe('weather-pwa App', () => {
  let page: WeatherPwaPage;

  beforeEach(() => {
    page = new WeatherPwaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to wa!!');
  });
});
