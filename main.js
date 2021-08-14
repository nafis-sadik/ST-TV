var ChannelLib = {
    Sony_2: 'https://cdn.ihub.live/SonyTen2/tracks-v1a1/mono.m3u8?token=17c1126a4d80a26c8368c2009dada4b704ecc25e-ae10a48744a8099de387f03411dac44f-1628943517-1628932717',
    Ekusey_TV: 'http://210.4.72.204/hls-live/livepkgr/_definst_/liveevent/livestream3.m3u8',
    Somoy_TV: 'http://103.81.104.118/hls/stream21.m3u8',
    Channel24: 'http://103.81.104.118/hls/stream22.m3u8',
    AutoMoto_Bumblebee: 'https://stitcheraws.unreel.me/wse-node01.powr.com/live/5bf220fad5eeee0f5a40941a/playlist.m3u8',
    AutoMotoTV: 'http://100automoto.tv:1935/bgtv1/autotv/playlist.m3u8',
    ABC_23_KERO: 'https://content.uplynk.com/channel/ff809e6d9ec34109abfb333f0d4444b5.m3u8',
    ABN_KIDS_TV_3: 'https://moiptvhls-i.akamaihd.net/hls/live/652318/secure/master.m3u8',
};


var PosterLib = {
    Ekusey_TV: 'https://www.ekushey-tv.com/media/common/EkusheyTVLogo.png',
    Somoy_TV: 'https://www.logolynx.com/images/logolynx/73/7397697dda098b1f9181a992de4db6d1.jpeg',
    Channel24: 'https://i.imgur.com/TjVJT22.png',
    AutoMotoBumblebee: 'https://i.imgur.com/Se1a8Mm.png',
    AutoMotoTV:'https://i.imgur.com/PjBm4Ic.jpg',
    ABC_23_KERO: 'https://scripps.com/wp-content/uploads/2019/01/local_media_23_abc.png',
    ABN_KIDS_TV_3: '/img/3abnkids-800x450.jpg'
};

var player = videojs('MediaPlayer');

$('document').ready(() => {
    SetChannelFeed(ChannelLib.Sony_2);
});

var SetChannelFeed = (channelFeedUrl) => {
    player.src({
        src: channelFeedUrl,
        type: 'application/x-mpegURL'
    });
    player.play();
}