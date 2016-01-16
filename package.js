Package.describe({
  name: 'phillyfan1138:quandl',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Get data from quandl',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/phillyfan1138/quandl',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.1');
    api.use(['http', 'livedata', 'meteor'], ['server']);
    api.use(['meteor-platform']);
    api.addFiles(['quandl.js', 'server/methods.js'], 'server');
    api.export(['quandl', 'Quandl']);
});
