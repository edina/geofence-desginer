import Backbone from 'backbone';
import Mapper from '../map'

export class MapView extends Backbone.View {

    initialize () {
        this.$el = $("#content");
        this.render();
    }

    render () {
        this.$el.html('<div id="map"></div>');
        let mapper = new Mapper();
        mapper.init();
        return this;
    }

}