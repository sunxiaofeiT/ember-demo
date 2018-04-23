import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('activity');
  this.route('devices');
  this.route('people');
  this.route('about');
});

export default Router;
