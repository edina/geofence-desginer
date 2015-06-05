import Backbone from 'backbone';
import { MapView } from './views/Map';
import 'styles/app.css!';

export class GeofenceRouter extends Backbone.Router {

  constructor () {
    super();
    this.routes = {
      'geofence': 'geofence'
    };
    this._bindRoutes();
  }

  geofence () {
    console.log('Route#geofence');
    new MapView();
  }
}