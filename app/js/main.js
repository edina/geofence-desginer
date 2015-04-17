import {render} from './widget'
import Mapper from './map'

console.log(1)
render(document.body);

let mapper = new Mapper();
mapper.init();