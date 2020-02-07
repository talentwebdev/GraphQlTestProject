const {Navigation} = require('react-native-navigation');
//const {registerScreens} = require('./screens');
const {setDefaultOptions} = require('./commons/Options');
const Layouts = require('./screens/Layouts');

function registerScreens() {
  Navigation.registerComponent('Layouts', () => Layouts);
}

function start() {
  console.log('started');
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
