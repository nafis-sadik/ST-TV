import M3U8FileParser from 'm3u8-file-parser'


var PlayList = [];

var player = videojs('MediaPlayer');
player.aspectRatio('16:9');
player.responsive(true);

$('document').ready(() => {
  // loadDataFromPlaylist('https://iptv-org.github.io/iptv/categories/business.m3u');

  // loadDataFromPlaylist('https://iptv-org.github.io/iptv/categories/auto.m3u');

  // loadDataFromPlaylist('https://iptv-org.github.io/iptv/categories/entertainment.m3u');

  // loadDataFromPlaylist('https://iptv-org.github.io/iptv/categories/fashion.m3u');

  // loadDataFromPlaylist('https://iptv-org.github.io/iptv/categories/news.m3u');

  // loadDataFromPlaylist('https://iptv-org.github.io/iptv/categories/music.m3u');

  // loadDataFromPlaylist('https://iptv-org.github.io/iptv/categories/religious.m3u');

  // loadDataFromPlaylist('https://iptv-org.github.io/iptv/categories/sport.m3u');

  GeneratePlaylist([
    { source: 'https://iptv-org.github.io/iptv/categories/documentary.m3u', classification: 'cat'},
    { source: 'https://iptv-org.github.io/iptv/countries/bd.m3u', classification: 'cn'},
    { source: 'https://iptv-org.github.io/iptv/index.country.m3u', classification: 'cn'},
    { source: 'https://iptv-org.github.io/iptv/index.category.m3u', classification: 'cat'},
    { source: 'https://iptv-org.github.io/iptv/index.language.m3u', classification: 'ln'}
  ]);

  // loadDataFromPlaylist('https://iptv-org.github.io/iptv/categories/comedy.m3u');

  // loadDataFromPlaylist('https://iptv-org.github.io/iptv/categories/history.m3u', '.');
  
  $('#MediaPlayer').addClass('vjs-theme-city');
});

const SetChannelFeed = (channelFeedUrl, posterUrl, channelTitle) => {
  player.src({
      src: channelFeedUrl,
      type: 'application/x-mpegURL',
      poster: posterUrl,
      autoplay: false,
      controls: true,
      paused: true,
      preload: false
  });
  
  player.play();

  $('#Heading').text("Now Playing : " + channelTitle);
  
  $('.logo').attr('src', posterUrl.toString());
}

var SysPlaylist = {
  Categories: [],
  Countries: [],
  Language: [],
  PlayList: []
};

const GeneratePlaylist = (sources) => {
  sources.forEach(element => {
     loadDataFromPlaylist(element.source, element.classification);
  });
  
  init();
}

const loadDataFromPlaylist = (url, category) => {
  $.ajax({
    url: url,
    method: 'GET',
    async: false,
    success: (data) => {
      let reader = new M3U8FileParser();
      reader.result.isExtendedM3U = true;
      reader.read(data);
      data = reader.getResult();
  
      data.segments.forEach((item) => {
        if(item.inf.groupTitle.includes(';')){
          item.inf.groupTitle = item.inf.groupTitle.replaceAll(';', ' / ');
        }
  
        // Country is selected
        if(category == 'cn'){
          // If country name is not previouslly registered, register now
          if(!SysPlaylist.Countries.includes(item.inf.groupTitle)){
            SysPlaylist.Countries.push(item.inf.groupTitle);
          }
        }
  
        // Category is selected
        else if(category == 'cat'){
          // If category name is not previouslly registered, register now
          if(!SysPlaylist.Categories.includes(item.inf.groupTitle)){
            SysPlaylist.Categories.push(item.inf.groupTitle);
          }
        }
  
        // Language is selected
        else if(category == 'ln'){
          // If category name is not previouslly registered, register now
          if(!SysPlaylist.Language.includes(item.inf.groupTitle)){
            SysPlaylist.Language.push(item.inf.groupTitle);
          }
        }
  
        else{
          console.log('Playlist type not selected');
          console.log(item.inf.groupTitle);
        }
  
        // If channel not previously registered, register now
        if(!SysPlaylist.PlayList.includes(item.inf)){
          SysPlaylist.PlayList.push(item.inf);
        }
      });
      // loadChannelsOnUI('English', undefined, undefined);
    }
  });
}

const init = () => {
  SysPlaylist.Countries.forEach((country) => {
    $('#Countries').append('<li><a class="dropdown-item" href="#">' + country + '</a></li>');
  });

  SysPlaylist.Categories.forEach((category) => {
    $('#Categories').append('<li><a class="dropdown-item" href="#">' + category + '</a></li>');
  });

  $('#LoadingScreen').removeClass('loading');
}

console.log(SysPlaylist);

$('#Play').click(() => {
  SetChannelFeed(PlayList[Math.floor(Math.random() * (PlayList.length-1))].url, 'http://localhost:3000/img/pexels-lisa-1444416.jpg');
})

let loadChannelsOnUI = (ln, cn, cat) => {
  $('#ChannelContainer').empty();
  if(ln != undefined){
    SysPlaylist.Language.forEach((item) => {
      if(item.inf.tvgLanguage.toLowerCase().trim() == ln.toLowerCase().trim()){
        let template = 
          '<div class="card channel" style="width: 18rem;">'
            + '<img src="' + item.inf.tvgLogo + '" class="card-img-top" alt=' + item.inf.title + '>'
            + '<div class="card-body">'
              + '<h4>' + item.inf.title + '</h4>'
              + '<h6> Country : ' + item.inf.tvgCountry + '</h6>'
              + '<h6> Category : ' + item.inf.groupTitle + '</h6>'
              + '<h6> Language : ' + item.inf.tvgLanguage + '</h6>'
              + '<input value=' + item.url + '  class="visually-hidden">'
              + '<input value=' + item.inf.tvgLogo + '  class="visually-hidden">'
              + '<input value=' + item.inf.title + '  class="visually-hidden">'
            +'</div>';
          +'</div>';
        $('#ChannelContainer').append(template);
      }
    });
  }
  if(cn != undefined){
    PlayList.forEach((item) => {
      if(item.inf.tvgCountry.toLowerCase().trim() == cn.toLowerCase().trim()){
        let template = 
          '<div class="card channel" style="width: 18rem;">'
            + '<img src="' + item.inf.tvgLogo + '" class="card-img-top" alt=' + item.inf.title + '>'
            + '<div class="card-body">'
              + '<h4>' + item.inf.title + '</h4>'
              + '<h6> Country : ' + item.inf.tvgCountry + '</h6>'
              + '<h6> Category : ' + item.inf.groupTitle + '</h6>'
              + '<h6> Language : ' + item.inf.tvgLanguage + '</h6>'
              + '<input value=' + item.url + '  class="visually-hidden">'
              + '<input value=' + item.inf.tvgLogo + '  class="visually-hidden">'
              + '<input value=' + item.inf.title + '  class="visually-hidden">'
            +'</div>';
          +'</div>';
        $('#ChannelContainer').append(template);
      }
    });
  }
  if(cat != undefined){
    PlayList.forEach((item) => {
      if(item.inf.groupTitle.toLowerCase().trim() == cat.toLowerCase().trim()){
        let template = 
          '<div class="card channel" style="width: 18rem;">'
            + '<img src="' + item.inf.tvgLogo + '" class="card-img-top" alt=' + item.inf.title + '>'
            + '<div class="card-body">'
              + '<h4>' + item.inf.title + '</h4>'
              + '<h6> Country : ' + item.inf.tvgCountry + '</h6>'
              + '<h6> Category : ' + item.inf.groupTitle + '</h6>'
              + '<h6> Language : ' + item.inf.tvgLanguage + '</h6>'
              + '<input value=' + item.url + '  class="visually-hidden">'
              + '<input value=' + item.inf.tvgLogo + '  class="visually-hidden">'
              + '<input value=' + item.inf.title + '  class="visually-hidden">'
            +'</div>';
          +'</div>';
        $('#ChannelContainer').append(template);
      }
    });
  }
}

$(document).on('click', '#Languages li a', function() {
  loadChannelsOnUI($(this).text(), undefined, undefined);
});

$(document).on('click', '#Countries li a', function() {
  loadChannelsOnUI(undefined, $(this).text().split('(')[1].split(')')[0], undefined);
});

$(document).on('click', '#Categories li a', function() {
  loadChannelsOnUI(undefined, undefined, $(this).text());
});

$(document).on('click', '#ChannelContainer .card', function(item) {
  SetChannelFeed($($($($(item)[0].currentTarget).children()[1]).children()[4]).val(), $($($($(item)[0].currentTarget).children()[1]).children()[5]).val(), $($($($(item)[0].currentTarget).children()[1]).children()[6]).val());
}); 
