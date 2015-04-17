
export function render(container) {
    console.log('xxxxxx')
    var el = $('<div class="widget"><h1>Skata</h1></div>');
    $(el).click(function() {
        console.log('widget click');
    });
    $(container).append(el);
};