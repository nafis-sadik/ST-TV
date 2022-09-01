import M3U8FileParser from 'm3u8-file-parser'

var knownOrigins = [];
var unknownOrigins = [];
var catagory = [];
var language = [];
var PlayList = [];
var PlayListDict = {};
var Countries = [
  {id :'AR', title: 'Argentina'},
  {id: 'HN', title: 'Honduras'},
  {id: 'PE', title: 'Peru'},
  {id: 'AU', title: 'Australia'},
  {id: 'HK', title: 'Hong Kong'},
  {id: 'PH', title: 'Philippines'},
  {id: 'AT', title: 'Austria'},
  {id: 'HU', title: 'Hungary'},
  {id: 'PL', title: 'Poland'},
  {id: 'BS', title: 'Bahamas'},
  {id: 'IS', title: 'Iceland'},
  {id: 'PT', title: 'Portugal'},
  {id: 'BH', title: 'Bahrain'},
  {id: 'IN', title: 'India'},
  {id: 'PR', title: 'Puerto Rico'},
  {id: 'BD', title: 'Bangladesh'},
  {id: 'ID', title: 'Indonesia'},
  {id: 'QA', title: 'Qatar'},
  {id: 'BB', title: 'Barbados'},
  {id: 'IR', title: 'Iran'},
  {id: 'KR', title: 'Republic of Korea'},
  {id: 'BE', title: 'Belgium'},
  {id: 'RO', title: 'Romania'},
  {id: 'BZ', title: 'Belize'},
  {id: 'IE', title: 'Ireland'},
  {id: 'RU', title: 'Russian Federation'},
  {id: 'BJ', title: 'Benin'},
  {id: 'IL', title: 'Israel'},
  {id: 'ARAB', title: 'Saudi Arabia'},
  {id: 'SA', title: 'Saudi Arabia'},
  {id: 'BM', title: 'Bermuda'},
  {id: 'IT', title: 'Italy'},
  {id: 'SN', title: 'Senegal'},
  {id: 'BO', title: 'Bolivia'},
  {id: 'JM', title: 'Jamaica'},
  {id: 'SC', title: 'Seychelles'},
  {id: 'BR', title: 'Brazil'},
  {id: 'JP', title: 'Japan'},
  {id: 'SL', title: 'Sierra Leone'},
  {id: 'BG', title: 'Bulgaria'},
  {id: 'JO', title: 'Jordan'},
  {id: 'SG', title: 'Singapore'},
  {id: 'BF', title: 'Burkina Faso'},
  {id: 'KE', title: 'Kenya'},
  {id: 'SK', title: 'Slovakia'},
  {id: 'CL', title: 'Chile'},
  {id: 'KW', title: 'Kuwait'},
  {id: 'SI', title: 'Slovenia'},
  {id: 'CN', title: 'China'},
  {id: 'LV', title: 'Latvia'},
  {id: 'ZA', title: 'South Africa'},
  {id: 'CO', title: 'Colombia'},
  {id: 'LB', title: 'Lebanon'},
  {id: 'ES', title: 'Spain'},
  {id: 'CR', title: 'Costa Rica'},
  {id: 'LR', title: 'Liberia'},
  {id: 'LK', title: 'Sri Lanka'},
  {id: 'CI', title: "Côte D' Ivoire"},
  {id: 'LY', title: 'Libya'},
  {id: 'SD', title: 'Sudan'},
  {id: 'HR', title: 'Croatia'},
  {id: 'LI', title: 'Liechtenstein'},
  {id: 'SR', title: 'Surinam'},
  {id: 'CU', title: 'Cuba'},
  {id: 'LT', title: 'Lithuania'},
  {id: 'SE', title: 'Sweden'},
  {id: 'CY', title: 'Cyprus'},
  {id: 'LU', title: 'Luxembourg'},
  {id: 'CH', title: 'Switzerland'},
  {id: 'CZ', title: 'Czech Republic'},
  {id: 'MW', title: 'Malawi'},
  {id: 'SY', title: 'Syria'},
  {id: 'DK', title: 'Denmark'},
  {id: 'MY', title: 'Malaysia'},
  {id: 'SY', title: 'Syrian Arab Republic'},
  {id: 'DO', title: 'Dominican Republic'},
  {id: 'ML', title: 'Mali'},
  {id: 'TW', title: 'Taiwan'},
  {id: 'EC', title: 'Ecuador'},
  {id: 'MT', title: 'Malta'},
  {id: 'TZ', title: 'Tanzania'},
  {id: 'EG', title: 'Egypt'},
  {id: 'MR', title: 'Mauritania'},
  {id: 'TH', title: 'Thailand'},
  {id: 'MU', title: 'El Salvador'},
  {id: 'MY', title: 'Mauritius'},
  {id: 'TT', title: 'Trinidad and Tobago'},
  {id: 'EE', title: 'Estonia'},
  {id: 'MX', title: 'Mexico'},
  {id: 'TN', title: 'Tunisia'},
  {id: 'ET', title: 'Ethiopia'},
  {id: 'MA', title: 'Morocco'},
  {id: 'TR', title: 'Turkey'},
  {id: 'FI', title: 'Finland'},
  {id: 'NL', title: 'Netherlands'},
  {id: 'UG', title: 'Uganda'},
  {id: 'FR', title: 'France'},
  {id: 'NZ', title: 'New Zealand'},
  {id: 'UA', title: 'Ukraine'},
  {id: 'GM', title: 'Gambia'},
  {id: 'NI', title: 'Nicaragua'},
  {id: 'AE', title: 'United Arab Emirates'},
  {id: 'DE', title: 'Germany'},
  {id: 'NE', title: 'Niger'},
  {id: 'UY', title: 'Uruguay'},
  {id: 'GH', title: 'Ghana'},
  {id: 'NG', title: 'Nigeria'},
  {id: 'VE', title: 'Venezuela'},
  {id: 'UK', title: 'Great Britain'},
  {id: 'NO', title: 'Norway'},
  {id: 'VN', title: 'Vietnam'},
  {id: 'GR', title: 'Greece'},
  {id: 'OM', title: 'Oman'},
  {id: 'YE', title: 'Yemen'},
  {id: 'GT', title: 'Guatemala'},
  {id: 'PK', title: 'Pakistan'},
  {id: 'ZM', title: 'Zambia'},
  {id: 'GN', title: 'Guinea'},
  {id: 'PA', title: 'Panama'},
  {id: 'ZW', title: 'Zimbabwe'},
  {id: 'GY', title: 'Guyana'},
  {id: 'PY', title: 'Paraguay'},
  {id: 'EMEA', title: 'Europe, the Middle East and Africa'},
  {id: 'US', title: 'United States Of America'},
  {id: 'MN', title: 'Mongolian'},
  {id: 'EUR', title: 'Europe'},
  {id: 'KZ', title: 'Kazakhstan'},
  {id: 'SAS', title: 'SCANDINAVIAN'}
];

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

  // loadDataFromPlaylist('https://iptv-org.github.io/iptv/categories/documentary.m3u');

  // loadDataFromPlaylist('https://iptv-org.github.io/iptv/categories/comedy.m3u');

  // loadDataFromPlaylist('https://iptv-org.github.io/iptv/categories/history.m3u');

  // loadDataFromPlaylist('https://iptv-org.github.io/iptv/countries/bd.m3u');

  loadDataFromPlaylist('https://iptv-org.github.io/iptv/index.country.m3u');

  // loadDataFromPlaylist('https://iptv-org.github.io/iptv/index.category.m3u');

  // loadDataFromPlaylist('https://iptv-org.github.io/iptv/index.language.m3u');

  $('#LoadingScreen').addClass('loading');
  
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

const loadDataFromPlaylist = (url) => {
  $.get(url, (data) => {
    let reader = new M3U8FileParser();
    reader.result.isExtendedM3U = true;
    reader.read(data);
    data = reader.getResult();
    
    data.segments.forEach((item) => {
      PlayList.push(item);
      PlayListDict[item.inf.groupTitle] = "";
      if(!language.includes(item.inf.tvgLanguage)){
        language.push(item.inf.tvgLanguage);
        if(item.inf.tvgLanguage != 'English')
          $('#Languages').append('<li><a class="dropdown-item" href="#">' + item.inf.tvgLanguage + '</a></li>');
      }

      if(!catagory.includes(item.inf.groupTitle)){
        catagory.push(item.inf.groupTitle);
        $('#Categories').append('<li><a class="dropdown-item" href="#">' + item.inf.groupTitle + '</a></li>');
      }

      if(!knownOrigins.find((country) => country.id == item.inf.tvgCountry) && !unknownOrigins.find((country) => country.id == item.inf.tvgCountry)){
        let countryObj = Countries.find((country) => country.id == item.inf.tvgCountry);
        if(countryObj == undefined){
          unknownOrigins.push({id: item.inf.tvgCountry, title: 'Unknown Country Name'});
        }else{
          knownOrigins.push({id: countryObj.id, title: countryObj.title});
        }
      }
    })

    console.log(PlayListDict)

    $('#Countries').empty();
    knownOrigins.forEach((country) => {
      $('#Countries').append('<li><a class="dropdown-item" href="#">' + country.title + ' (' + country.id + ')</a></li>');
    });

    unknownOrigins.forEach((country) => {
      $('#Countries').append('<li><a class="dropdown-item" href="#">' + country.title + ' (' + country.id + ')</a></li>');
    });

    loadChannelsOnUI('English', undefined, undefined);

    $('#LoadingScreen').removeClass('loading');
  });
}

$('#Play').click(() => {
  SetChannelFeed(PlayList[Math.floor(Math.random() * (PlayList.length-1))].url, 'http://localhost:3000/img/pexels-lisa-1444416.jpg');
})

let loadChannelsOnUI = (ln, cn, cat) => {
  $('#ChannelContainer').empty();
  if(ln != undefined){
    PlayList.forEach((item) => {
      if(!item.inf.hasOwnProperty('tvgLanguage')){
        return;
      }
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