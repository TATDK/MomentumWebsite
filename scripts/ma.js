$(document).ready(function() {
    var a = $("<a></a>"),b = $("<a></a>"),c = $("#wm"),d = $("#sp"),e = location.hostname,f=function(a) { return [a,e].join('@'); },g='mailto';
    c.html(b);d.html(a);
    a.attr('href',g + ':' + f('support')).text(f('support'));
    b.attr('href',g + ':' + f('webmaster')).text(f('webmaster'));
});