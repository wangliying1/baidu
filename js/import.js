document.addEventListener( "DOMContentLoaded" , function () {
    var src = [];
    var str = '';
    var script;

    // 额外的js请通过src.push将其src添加到其中
    src.push('js/index.js');

    for( var i = 0; i < src.length; i++ ) {
        script = document.createElement('script');
        script.src = src[i];
        document.body.appendChild( script );
    }
} ,false ) 