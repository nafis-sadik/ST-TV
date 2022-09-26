const k=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerpolicy&&(s.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?s.credentials="include":a.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(a){if(a.ep)return;a.ep=!0;const s=r(a);fetch(a.href,s)}};k();var m={BASIC:"BASIC",MEDIA_SEGMENT:"MEDIA_SEGMENT",MEDIA_PLAYLIST:"MEDIA_PLAYLIST",MASTER_PLAYLIST:"MASTER_PLAYLIST",TRALING_MEDIA_SEGMENT:"TRAILING_MEDIA_SEGMENT",URL_SEGMENT_ENDING:"URL_SEGMENT_ENDING",GROUPING:"GROUPING"},L={SPACE:" ".charCodeAt(0),COLON:":".charCodeAt(0),COMMA:",".charCodeAt(0),EQUAL:"=".charCodeAt(0),QUOTE:'"'.charCodeAt(0),MINUS:"-".charCodeAt(0),PERIOD:".".charCodeAt(0),NEW_LINE_LF:`
`.charCodeAt(0),NEW_LINE_CR:"\r".charCodeAt(0),BACK_SLASH:"\\".charCodeAt(0),HASH:"#".charCodeAt(0),AT:"@".charCodeAt(0),NUMBER_START:"0".charCodeAt(0),NUMBER_STOP:"9".charCodeAt(0)};const Y=L;function b(t){let e="",r=0;t=t.toLowerCase();for(let n=0;n<t.length;n++){if(r=t[n].charCodeAt(0),r===Y.MINUS){e+=(t[++n]||"").toUpperCase();continue}e+=t[n]}return e}var O=b;const I=/\"/g,S=/\W/g,d=L,X=O;function w(t){let e="",r="",n={duration:"",title:""};I.lastIndex=0,S.lastIndex=0;let a=0,s=t[a].charCodeAt(0);for(;s>=d.NUMBER_START&&s<=d.NUMBER_STOP||s===d.MINUS||s===d.PERIOD;)n.duration+=t[a],a++,s=a>t.length-1?"":t[a].charCodeAt(0);n.duration=n.duration&&parseFloat(n.duration)||-1;for(let i=a;i<t.length;i++)switch(t[i].charCodeAt(0)){case d.SPACE:r="";continue;case d.QUOTE:{I.lastIndex=i+1;const c=I.exec(t);r=t.slice(i+1,c.index),i=c&&c.index||i,e&&(n[X(e)]=r),r="",e="";continue}case d.EQUAL:{if(e=r,r="",t[i+1].charCodeAt(0)===d.QUOTE)continue;S.lastIndex=i+1;const c=S.exec(t);r=t.slice(i+1,c.index),i=t[c.index].charCodeAt(0)===d.COMMA&&c.index-1||c&&c.index||i,e&&(n[X(e)]=r),r="",e="";continue}case d.COMMA:n.title=t.slice(i+1,t.length).trimLeft(),i=t.length;continue;default:r+=t[i]}return n}var F=w;function B(t){return parseInt(t.trim())||0}var Q=B;function H(t){const e={length:0,offset:0};e.length=parseInt(t);const r=t.lastIndexOf("@");return~r&&(e.offset=parseInt(t.slice(r+1))),e}var x=H;function V(){return!0}var q=V;const g=L,v=/\"/g,y=O,M={YES:!0,NO:!1};function K(t){return t in M?M[t]:t}function j(t,e=!1,r){let n=0,a="",s="";const i=r||{};for(let l=0;l<t.length;l++)switch(n=t[l].charCodeAt(0),n){case g.SPACE:a="";continue;case g.EQUAL:s=a,a="";continue;case g.COMMA:s=y(s),s&&(e?i[s]=K(a):i[s]=a),s="",a="";continue;case g.QUOTE:v.lastIndex=l+1;const c=v.exec(t),E=t.slice(l+1,c.index);s&&(i[y(s)]=E),l=c.index+1;continue;default:a+=t[l]}return a&&s&&(i[y(s)]=a),i}var f=j;const J=f;function W(t){return J(t)}var z=W;const Z=x,ee=f;function te(t){const e=ee(t);return e.byterange&&(e.byterange=Z(e.byterange)),e}var ne=te;function ae(t){const e=new Date(t.trim());return isNaN(e.getTime())&&0||e}var G=ae;const re=G;function se(t){return re(t)}var ie=se;const oe=f,N=G;function ce(t){const e=oe(t);return e.startDate&&(e.startDate=N(e.startDate)),e.endDate&&(e.endDate=N(e.endDate)),e.duration&&(e.duration=parseFloat(e.duration)),e.plannedDuration&&(e.plannedDuration=parseFloat(e.plannedDuration)),e}var le=ce;function ue(t){return parseInt(t)||-1}var de=ue;function Ee(t){return parseInt(t)||0}var pe=Ee;function fe(t){return parseInt(t)||0}var he=fe;function ge(t,e){return e.segments.length+1}var Te=ge;function Ae(t){return t.trim()}var Ie=Ae;const Se=f;function ye(t){const e={groupId:"default"};return Se(t,!0,e),e}var _e=ye;const Le=f;function Ce(t){const e=Le(t);return"bandwidth"in e&&(e.bandwidth=parseInt(e.bandwidth)),"averageBandwidth"in e&&(e.averageBandwidth=parseInt(e.averageBandwidth)),"resolution"in e&&(e.resolution=parseInt(e.resolution)),"frameRate"in e&&(e.frameRate=parseFloat(e.frameRate)),"codecs"in e&&(e.codecs=e.codecs.split(";")),e}var Xe=Ce;const ve=f;function Me(t){return ve(t)}var Ne=Me;const De=f;function Pe(t){const e=De(t,!0);return"timeOffset"in e&&(e.timeOffset=parseFloat(e.timeOffset)),e}var Re=Pe;const me=F,Oe=Q,xe=x,Ge=q,D=z,$e=ne,Ue=ie,ke=le,Ye=de,be=pe,we=he,Fe=Te,Be=Ie,Qe=_e,P=Xe,He=Ne,Ve=Re,o=m,_={"#EXTM3U":{key:"isExtendedM3U",parser:()=>!0,scope:o.BASIC},"#EXT-X-VERSION":{key:"version",parser:Oe,scope:o.BASIC},"#EXTINF":{key:"inf",parser:me,scope:o.MEDIA_SEGMENT},"#EXT-X-BYTERANGE":{key:"byteRange",parser:xe,scope:o.MEDIA_SEGMENT},"#EXT-X-DISCONTINUITY":{key:"discontinuity",parser:Ge,scope:o.MEDIA_SEGMENT},"#EXT-X-KEY":{key:"key",parser:D,scope:o.TRALING_MEDIA_SEGMENT},"#EXT-X-MAP":{key:"map",parser:$e,scope:o.TRALING_MEDIA_SEGMENT},"#EXT-X-PROGRAM-DATE-TIME":{key:"programDateTime",parser:Ue,scope:o.MEDIA_SEGMENT},"#EXT-X-DATERANGE":{key:"dateRange",parser:ke,scope:o.MEDIA_SEGMENT},"#EXT-X-TARGETDURATION":{key:"targetDuration",parser:Ye,scope:o.MEDIA_PLAYLIST},"#EXT-X-MEDIA-SEQUENCE":{key:"mediaSequence",parser:be,scope:o.MEDIA_PLAYLIST},"#EXT-X-DISCONTINUITY-SEQUENCE":{key:"discontinuitySequence",parser:we,scope:o.MEDIA_PLAYLIST},"#EXT-X-ENDLIST":{key:"endList",parser:Fe,scope:o.MEDIA_PLAYLIST},"#EXT-X-PLAYLIST-TYPE":{key:"playlistType",parser:Be,scope:o.MEDIA_PLAYLIST},"#EXT-X-I-FRAMES-ONLY":{key:"iFramesOnly",parser:()=>!0,scope:o.MEDIA_PLAYLIST},"#EXT-X-MEDIA":{key:"media",parser:Qe,scope:o.GROUPING,group:{root:"media",path:["type","groupId","name"]}},"#EXT-X-STREAM-INF":{key:"streamInf",parser:P,scope:o.MASTER_PLAYLIST},"#EXT-X-I-FRAME-STREAM-INF":{key:"iFrameStreamInf",parser:P,scope:o.MASTER_PLAYLIST},"#EXT-X-SESSION-DATA":{key:"sessionData",parser:He,scope:o.GROUPING,group:{root:"sessionData",path:["dataId","language"]}},"#EXT-X-SESSION-KEY":{key:"sessionKey",parser:D,scope:o.MASTER_PLAYLIST},"#EXT-X-INDEPENDENT-SEGMENTS":{key:"independentSegments",parser:()=>!0,scope:o.MEDIA_PLAYLIST},"#EXT-X-START":{key:"start",parser:Ve,scope:o.MEDIA_PLAYLIST},URL:{key:"url",parser:t=>t,scope:o.URL_SEGMENT_ENDING}};var qe={get:t=>_[t]||null,set:(t,e)=>{_[t]=e},add:(t,e)=>{_[t]=e}};const p=m,R=qe;class Ke{constructor(){this.reset()}read(e){const r=e.length;e=e.trim();let n="",a=!1,s=!1,i=0,l=0,c=0,E="";for(let h=0;h<r;h++)l=e.indexOf(`
`,h),i=l>-1&&l||e.indexOf("\r",h),i=i>-1&&i||r,E=e.slice(h,i).trim(),h=i,s=E[0]==="#",a=E.slice(0,4)==="#EXT",c=a&&E.indexOf(":")||-1,n=a&&~c&&E.slice(0,c),!n&&s&&(n=E),this.invokeParser(n,E.slice(c+1),s)}invokeParser(e,r,n){if(e&&r){const a=R.get(e);return a?this.dataScope(a,a.parser(r,this.result)):void 0}if(!(r&&n)&&r){const a=R.get("URL");this.dataScope(a,a.parser(r,this.result))}}dataScope(e,r){switch(e.scope){case p.MASTER_PLAYLIST:this.currentSegmentData.isMasterPlaylist=!0;case p.MEDIA_SEGMENT:this.currentSegmentData[e.key]=r;break;case p.URL_SEGMENT_ENDING:this.currentSegmentData[e.key]=r,this.result.segments.push(this.currentSegmentData),this.currentSegmentData=Object.assign({},this.trailingData);break;case p.TRALING_MEDIA_SEGMENT:this.trailingData[e.key]=r,this.currentSegmentData=Object.assign(this.currentSegmentData,this.trailingData);break;case p.MEDIA_PLAYLIST:case p.BASIC:this.result[e.key]=r;break;case p.GROUPING:this.result[e.group.root]||(this.result[e.group.root]={});let n="",a=this.result[e.group.root];const s=e.group.path.length;for(let i=0;i<s-1;i++)n=e.group.path[i],a[r[n]]||(a[r[n]]={}),a=a[r[n]];a[r[e.group.path[s-1]]]=r;break}}getResult(){return this.result}reset(){this.trailingData={},this.currentSegmentData={},this.result={isExtendedM3U:!1,segments:[]}}}var je=Ke,Je=je,T=[],A=videojs("MediaPlayer");A.aspectRatio("16:9");A.responsive(!0);$("document").ready(()=>{We([{source:"https://iptv-org.github.io/iptv/categories/documentary.m3u",classification:"cat"},{source:"https://iptv-org.github.io/iptv/countries/bd.m3u",classification:"cn"},{source:"https://iptv-org.github.io/iptv/index.country.m3u",classification:"cn"},{source:"https://iptv-org.github.io/iptv/index.category.m3u",classification:"cat"},{source:"https://iptv-org.github.io/iptv/index.language.m3u",classification:"ln"}]),$("#MediaPlayer").addClass("vjs-theme-city")});const U=(t,e,r)=>{A.src({src:t,type:"application/x-mpegURL",poster:e,autoplay:!1,controls:!0,paused:!0,preload:!1}),A.play(),$("#Heading").text("Now Playing : "+r),$(".logo").attr("src",e.toString())};var u={Categories:[],Countries:[],Language:[],PlayList:[]};const We=t=>{t.forEach(e=>{ze(e.source,e.classification)}),Ze()},ze=(t,e)=>{$.ajax({url:t,method:"GET",async:!1,success:r=>{let n=new Je;n.result.isExtendedM3U=!0,n.read(r),r=n.getResult(),r.segments.forEach(a=>{a.inf.groupTitle.includes(";")&&(a.inf.groupTitle=a.inf.groupTitle.replaceAll(";"," / ")),e=="cn"?u.Countries.includes(a.inf.groupTitle)||u.Countries.push(a.inf.groupTitle):e=="cat"?u.Categories.includes(a.inf.groupTitle)||u.Categories.push(a.inf.groupTitle):e=="ln"?u.Language.includes(a.inf.groupTitle)||u.Language.push(a.inf.groupTitle):(console.log("Playlist type not selected"),console.log(a.inf.groupTitle)),u.PlayList.includes(a.inf)||u.PlayList.push(a.inf)})}})},Ze=()=>{u.Countries.forEach(t=>{$("#Countries").append('<li><a class="dropdown-item" href="#">'+t+"</a></li>")}),u.Categories.forEach(t=>{$("#Categories").append('<li><a class="dropdown-item" href="#">'+t+"</a></li>")}),$("#LoadingScreen").removeClass("loading")};console.log(u);$("#Play").click(()=>{U(T[Math.floor(Math.random()*(T.length-1))].url,"http://localhost:3000/img/pexels-lisa-1444416.jpg")});let C=(t,e,r)=>{$("#ChannelContainer").empty(),t!=null&&u.Language.forEach(n=>{if(n.inf.tvgLanguage.toLowerCase().trim()==t.toLowerCase().trim()){let a='<div class="card channel" style="width: 18rem;"><img src="'+n.inf.tvgLogo+'" class="card-img-top" alt='+n.inf.title+'><div class="card-body"><h4>'+n.inf.title+"</h4><h6> Country : "+n.inf.tvgCountry+"</h6><h6> Category : "+n.inf.groupTitle+"</h6><h6> Language : "+n.inf.tvgLanguage+"</h6><input value="+n.url+'  class="visually-hidden"><input value='+n.inf.tvgLogo+'  class="visually-hidden"><input value='+n.inf.title+'  class="visually-hidden"></div>';$("#ChannelContainer").append(a)}}),e!=null&&T.forEach(n=>{if(n.inf.tvgCountry.toLowerCase().trim()==e.toLowerCase().trim()){let a='<div class="card channel" style="width: 18rem;"><img src="'+n.inf.tvgLogo+'" class="card-img-top" alt='+n.inf.title+'><div class="card-body"><h4>'+n.inf.title+"</h4><h6> Country : "+n.inf.tvgCountry+"</h6><h6> Category : "+n.inf.groupTitle+"</h6><h6> Language : "+n.inf.tvgLanguage+"</h6><input value="+n.url+'  class="visually-hidden"><input value='+n.inf.tvgLogo+'  class="visually-hidden"><input value='+n.inf.title+'  class="visually-hidden"></div>';$("#ChannelContainer").append(a)}}),r!=null&&T.forEach(n=>{if(n.inf.groupTitle.toLowerCase().trim()==r.toLowerCase().trim()){let a='<div class="card channel" style="width: 18rem;"><img src="'+n.inf.tvgLogo+'" class="card-img-top" alt='+n.inf.title+'><div class="card-body"><h4>'+n.inf.title+"</h4><h6> Country : "+n.inf.tvgCountry+"</h6><h6> Category : "+n.inf.groupTitle+"</h6><h6> Language : "+n.inf.tvgLanguage+"</h6><input value="+n.url+'  class="visually-hidden"><input value='+n.inf.tvgLogo+'  class="visually-hidden"><input value='+n.inf.title+'  class="visually-hidden"></div>';$("#ChannelContainer").append(a)}})};$(document).on("click","#Languages li a",function(){C($(this).text(),void 0,void 0)});$(document).on("click","#Countries li a",function(){C(void 0,$(this).text().split("(")[1].split(")")[0],void 0)});$(document).on("click","#Categories li a",function(){C(void 0,void 0,$(this).text())});$(document).on("click","#ChannelContainer .card",function(t){U($($($($(t)[0].currentTarget).children()[1]).children()[4]).val(),$($($($(t)[0].currentTarget).children()[1]).children()[5]).val(),$($($($(t)[0].currentTarget).children()[1]).children()[6]).val())});
