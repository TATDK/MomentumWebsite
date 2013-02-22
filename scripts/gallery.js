var gallery = {
    b: {
        a: [0,0,0],
        b: 0,
        c: [20,330,640],
        d: 0
    },
    h: [],
    load: function(a) {
        if (a) this.h = this.h.concat(a);
        if (this.h.length == 0) return;
        var b = this.h.splice(0,1)[0];
        if (b.type === 'image')
            this.loadImage(b.src,b.filetype);
        else if (b.type === 'audio')
            this.loadAudio(b.src,b.filetype);
        else if (b.type === 'video')
            this.loadVideo(b.src,b.filetype);
        else console.error('Unknown type',b.type,b);
    },
    loadImage: function(a,b) {
        var c = $('#gallery'),d = new Image(),e = this;
        d.onload = function() {
            var f = $("<a></a>")
                    .attr('href','/images/gallery/' + a + '.' + b)
                    .attr('rel','lightbox[gallery]')
                    .css('top',e.b.a[e.b.b]+'px')
                    .css('left',e.b.c[e.b.b]+'px')
                    .append(d);
            e.b.a[e.b.b] += this.height+10;
            if (e.b.d < e.b.a[e.b.b]) {
                e.b.d = e.b.a[e.b.b]+10
                c.css('height',e.b.d+'px');
            }
            e.b.b++;
            if (e.b.b == 3) e.b.b = 0;
            c.append(f);
            e.load();
        };
        d.src = '/images/gallery/' + a + '_thumb.' + b;
    },
    loadAudio: function(a,b) {
        var c = $('#gallery'),d = $('<audio></audio>').attr('src','/audio/' + a + '.' + b).append($('<p></p>').text('Your browser does not support the audio element'));
        c.append(d);
        this.load();
    },
    loadVideo: function(a,b) {
        var c = $('#gallery'),d = $('<video></video>');
        for (var i in b)
            d.append($('<source>').attr('src','/video/' + a + '.' + b[i]).attr('type','video/' + b[i]));
        d.append($('<p></p>').text('Your browser does not support the video element'));
        c.append(d);
        this.load();
    }
};
$(document).ready(function() {
    gallery.load([
        { src: 'characterDevices',  filetype: 'jpg', type: 'image' },
        { src: 'charactersDevice',  filetype: 'jpg', type: 'image' },
        { src: 'conceptCharacter1', filetype: 'jpg', type: 'image' },
        { src: 'conceptCharacter2', filetype: 'jpg', type: 'image' },
        { src: 'conceptCharacter3', filetype: 'jpg', type: 'image' },
        { src: 'robot',             filetype: 'jpg', type: 'image' },
        { src: 'smallRobot',        filetype: 'jpg', type: 'image' }
    ]);
});