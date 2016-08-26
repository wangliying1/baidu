(function ( win, doc ) {
    var body = doc.body;

    // 顶部导航及搜索
    var header = doc.createElement( 'div' );
    header.id = 'header';
    body.appendChild( header );

    // 搜索结果及右侧推荐内容
    var wrapper = doc.createElement( 'div' );
    wrapper.id = 'wrapper';
    wrapper.innerHTML = [
        '<div id="result">',
            '<div id="weather"></div>',
        '</div>',
        '<div id="side"></div>',
    ].join('');
    body.appendChild( wrapper );

    // 页脚
    var footer = doc.createElement( 'div' );
    footer.id = 'footer';
    footer.innerHTML = [
        '<a target="_blank" href="http://help.baidu.com/index">帮助</a>',
        '<a target="_blank" href="http://www.baidu.com/search/jubao.html">举报</a>',
        '<a target="_blank" href="http://www.baidu.com/search/jubao.html">给百度提建议</a>'
    ].join('');
    body.appendChild( footer );

})( window, document );