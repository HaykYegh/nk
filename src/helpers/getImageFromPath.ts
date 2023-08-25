import { chromeUrl } from '../constants';
import { approachUrl } from '../constants';
import { aboutUrl } from '../constants';
import { desktopUrl } from '../constants';
import { webUrl } from '../constants';
import { homeUrl } from '../constants';

export const getImageFromPath = (path: string) => {
  switch (path) {
    case '/':
      return {
        url: homeUrl,
        text: 'SOFTWARE DEVELOPMENT AND INNOVATION',
      };
    case '/web-applications':
      return {
        url: webUrl,
        text: 'WEB APPLICATIONS DEVELOPMENT',
      };

    case '/chrome-extensions':
      return {
        url: chromeUrl,
        text: 'CHROME EXTENSIONS DEVELOPMENT',
      };

    case '/desktop-applications':
      return {
        url: desktopUrl,
        text: 'DESKTOP APPLICATIONS DEVELOPMENT',
      };

    case '/approach':
      return {
        url: approachUrl,
        text: 'STEPS TO YOUR PROJECT',
      };

    case '/about':
      return {
        url: aboutUrl,
        text: '',
      };
    default:
      return {
        url: '',
        text: '',
      };
  }
};
