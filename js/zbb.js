(function ( win, doc ) {
   
    // 搜索结果及右侧推荐内容
    var weather = doc.getElementById('weather');
    weather.innerHTML = [
        '<div class="wether-week">',

            '<a class="today" href="##">',
                '<p class="today-message">周六 08月27日 农历七月廿五 (实时：25℃)</p>',
                '<i></i>',
                '<p class="today-temp">29 ~ 24<sup>℃</sup></p>',
                '<p class="today-weather">阵雨转阴</p>',
                '<p class="today-wind">微风</p>',
                '<p class="today-air">实时空气质量: <span>90 良</span></p>',

            '</a>',
            '<a class="day" href="##">',
                '<p class="week">周日</p>',
                '<p class="date">08月28日</p>',
                '<p class="weather-icon"><i></i></p>',
                '<p class="temp">31 ~ 24℃</p>',
                '<p class="weather">多云</p>',
                '<p class="wind">微风</p>',
            '</a>',
            '<a class="day" href="##">',
                '<p class="week">周日</p>',
                '<p class="date">08月28日</p>',
                '<p class="weather-icon"><i></i></p>',
                '<p class="temp">31 ~ 24℃</p>',
                '<p class="weather">多云</p>',
                '<p class="wind">微风</p>',
            '</a>',
            '<a class="day" href="##">',
                '<p class="week">周日</p>',
                '<p class="date">08月28日</p>',
                '<p class="weather-icon"><i></i></p>',
                '<p class="temp">31 ~ 24℃</p>',
                '<p class="weather">多云</p>',
                '<p class="wind">微风</p>',
            '</a>',
            '<a class="day" href="##">',
                '<p class="week">周日</p>',
                '<p class="date">08月28日</p>',
                '<p class="weather-icon"><i></i></p>',
                '<p class="temp">31 ~ 24℃</p>',
                '<p class="weather">多云</p>',
                '<p class="wind">微风</p>',
            '</a>',
        '</div>',
        '<div class="wether-chart">',
            '<div class="chart">',
                '<div class="temp">',
                    '<ul class="temp-y">',
                        '<li>36</li>',
                        '<li>31</li>',
                        '<li>26</li>',
                        '<li>21</li>',
                        '<li>16</li>',
                    '</ul>',
                    '<canvas class="temp-bg" id="bg" width="480" height="86">',
                    '</canvas>',
                '</div>',
            '</div>',
            '<ul class="choose">',
                '<li>24小时温度</li>',
                '<li>风力风向</li>',
                '<li>降水量</li>',
                '<li>相关指数</li>',
            '</ul>',
        '</div>',
    ].join('');

})( window, document );


function draw8() {
    var canvas = document.getElementById('bg');
    if (canvas == null)
        return false;
    var context = canvas.getContext("2d");
    //context.beginPath();
    context.strokeStyle = "rgba(255,255,255,0.2)";
    context.translate(0.5,0.5)
    context.lineWidth='1';
    //实验证明第一次lineTo的时候和moveTo功能一样
    context.moveTo(0, 17);
    context.lineTo(480, 17);
    context.moveTo(0, 34);
    context.lineTo(480, 34);
    context.moveTo(0, 51);
    context.lineTo(480, 51);
    context.moveTo(0, 68);
    context.lineTo(480, 68);
    context.moveTo(0, 85);
    context.lineTo(480, 85);
    context.stroke();
}
draw8();
