import Backbone from 'backbone';
import {GeofenceRouter} from './router';

$(() => {
    // *Finally, we kick things off by creating the **App**.*
    new GeofenceRouter();
    Backbone.history.start();
});