var gallery = {
    b: {
        a: [0,0,0],
        b: 0,
        c: [20,330,640],
        d: 0
    },
    load: function(a) {
        var c = $("#gallery"),d = a.pop(),e = new Image(),g = this;
        e.onload = function() {
            var f = $("<a></a>")
                    .attr('href','/images/gallery/' + d + '.jpg')
                    .attr('rel','lightbox[gallery]')
                    .css('top',g.b.a[g.b.b]+'px')
                    .css('left',g.b.c[g.b.b]+'px')
                    .append(e);
            g.b.a[g.b.b] += this.height+10;
            if (g.b.d < g.b.a[g.b.b]) {
                g.b.d = g.b.a[g.b.b]+10
                c.css('height',g.b.d+'px');
            }
            g.b.b++;
            if (g.b.b == 3) g.b.b = 0;
            c.append(f);
            if (a.length > 0) g.load(a);
        };
        e.src = "/images/gallery/" + d + "_thumb.jpg";
    }
};
$(document).ready(function() {
    gallery.load([
        'smallRobot',
        'robot',
        'conceptCharacter3',
        'conceptCharacter2',
        'conceptCharacter1',
        'charactersDevice',
        'characterDevices'
    ]);
});