var ChannelLib = {
    ABC_23_KERO: 'https://content.uplynk.com/channel/ff809e6d9ec34109abfb333f0d4444b5.m3u8',
    ABN_KIDS_TV_3: 'https://moiptvhls-i.akamaihd.net/hls/live/652318/secure/master.m3u8'
};
var PosterLib = {
    ABC_23_KERO: 'https://scripps.com/wp-content/uploads/2019/01/local_media_23_abc.png',
    ABN_KIDS_TV_3: '/img/3abnkids-800x450.jpg'
};
var player = videojs('MediaPlayer');
$('document').ready(() => {
    SetChannelFeed(ChannelLib.ABN_KIDS_TV_3);
});
var SetChannelFeed = (channelFeedUrl) => {
    player.src({
        src: channelFeedUrl,
        type: 'application/x-mpegURL'
    });
    player.play();
}