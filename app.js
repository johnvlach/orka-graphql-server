const { orka } = require('@workablehr/orka');
orka({
  appName: '',
  typescript: false,
  honeyBadger: {
    developmentEnvironments: ['development', 'test']
  },
  routesPath: './config/routes',
  diamorphosis: {
    configFolder: './'
  },
}).start();