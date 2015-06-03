import Backbone from 'backbone';
import {GeofenceDesigner} from './router';

$(() => {
    // *Finally, we kick things off by creating the **App**.*
    new GeofenceDesignerRouter();
    Backbone.history.start();
});