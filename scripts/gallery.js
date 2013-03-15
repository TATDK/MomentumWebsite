var gallery = {
    data: {
        rowHeight: [0,0,0],
        row: 0,
        rowLeft: [0,310,620],
        totalHeight: 0
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
        var c = $('#gallery'),d = new Image(),self = this;
        d.onload = function() {
            var f = $("<a></a>")
                    .attr('href','/images/gallery/' + a + '.' + b)
                    .attr('rel','lightbox[gallery]')
                    .css('top',self.data.rowHeight[self.data.row]+'px')
                    .css('left',self.data.rowLeft[self.data.row]+'px')
                    .append(d);
            console.log(jQuery.extend(true,{image: a,filetype: b,imageSize: { height: this.height, width: this.width }},self.data));
            self.data.rowHeight[self.data.row] += this.height+10;
            if (self.data.totalHeight < self.data.rowHeight[self.data.row]) {
                self.data.totalHeight = self.data.rowHeight[self.data.row]+10;
                c.css('height',self.data.totalHeight+'px');
            }
            var tmp = {row:-1,height:-1};
            for (var i in self.data.rowHeight) {
                if (tmp.height < 0 || tmp.height > self.data.rowHeight[i])
                    tmp = {row: i,height: self.data.rowHeight[i]};
            }
            self.data.row = tmp.row;
            c.append(f);
            self.load();
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
        { src: 'smallRobot',        filetype: 'jpg', type: 'image' },
        { src: 'worldConcept1',     filetype: 'jpg', type: 'image' },
        { src: 'worldConcept2',     filetype: 'jpg', type: 'image' },
        { src: 'survivalConcept',   filetype: 'jpg', type: 'image' }
    ]);
});