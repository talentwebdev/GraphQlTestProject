import {Navigation} from 'react-native-navigation';
import {setDefaultOptions} from './commons/Options';

import Layouts from './screens/Layouts';

function registerScreens() {
  Navigation.registerComponent('Layouts', () => Layouts);
}

function start() {
  registerScreens();
  Navigation.events().registerAppLaunchedListener(async () => {
    setDefaultOptions();

    Navigation.setRoot({
      root: {
        bottomTabs: {
          children: [
            {
              stack: {
                children: [
                  {
                    component: {
                      name: 'Layouts',
                    },
                  },
                ],
                options: {
                  bottomTab: {
                    text: 'Layouts',
                    icon: require('../img/layouts.png'),
                    selectedIcon: require('../img/layouts_selected.png'),
                  },
                },
              },
            },
          ],
        },
      },
    });
  });
}

module.exports = {
  start,
};
