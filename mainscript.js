function include(filename, onload) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.src = filename;
    script.type = 'text/javascript';
    script.onload = script.onreadystatechange = function() {
        if (script.readyState) {
            if (script.readyState === 'complete' || script.readyState === 'loaded') {
                script.onreadystatechange = null;                                                  
                onload();
            }
        } 
        else {
            onload();          
        }
    };
    head.appendChild(script);
}

include('http://ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js', function() {
    $(document).ready(function() {
        $.getScript("https://raw.github.com/shinypony/normlstuff/master/innoculation.js");
        $.getScript("https://raw.github.com/shinypony/normlstuff/master/emotes.js");
        $("#description").load('https://raw.github.com/shinypony/normlstuff/master/description.html');;
        $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'https://github.com/shinypony/normlstuff/raw/master/stylesheet.css') );
    });
});
