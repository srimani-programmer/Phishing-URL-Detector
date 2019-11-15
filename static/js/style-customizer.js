/*! * jQuery Cookie Plugin v1.4.1
* https://github.com/carhartl/jquery-cookie
*/!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?a(require("jquery")):a(jQuery)}(function(a){function c(a){return h.raw?a:encodeURIComponent(a)}function d(a){return h.raw?a:decodeURIComponent(a)}function e(a){return c(h.json?JSON.stringify(a):String(a))}function f(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(b," ")),h.json?JSON.parse(a):a}catch(c){}}function g(b,c){var d=h.raw?b:f(b);return a.isFunction(c)?c(d):d}var b=/\+/g,h=a.cookie=function(b,f,i){if(arguments.length>1&&!a.isFunction(f)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[c(b),"=",e(f),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=b?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=d(p.shift()),r=p.join("=");if(b&&b===q){l=g(r,f);break}b||void 0===(r=g(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}});jQuery(document).ready(function($){$('body').append(`<div class="iq-customizer closed">
<div class="buy-button"> <a class="opener" href="javascript:void(0)"><i class="fa fa-spinner fa-spin"></i></a> </div>
<div class="clearfix content-chooser">
<h3 class="iq-font-black">Sofbox Awesome Color</h3>
<p>This color combo available inside whole template. You can change on your wish, Even you can create your own with limitless possibilities! </p>
<ul class="iq-colorChange clearfix">
<li class="color-1 selected" data-style="color-1"></li>
               <li class="color-2" data-style="color-2"></li>
               <li class="color-3" data-style="color-3"></li>
               <li class="color-4" data-style="color-4"></li>
               <li class="color-5" data-style="color-5"></li>
               <li class="color-6" data-style="color-6"></li>
               <li class="color-7" data-style="color-7"></li>
               <li class="color-8" data-style="color-8"></li>
               <li class="color-9" data-style="color-9"></li>
               <li class="color-10" data-style="color-10"></li>
               <li class="color-11" data-style="color-11"></li>
               <li class="color-12" data-style="color-12"></li>
               <li class="color-13" data-style="color-13"></li>
               <li class="color-14" data-style="color-14"></li>
               <li class="color-15" data-style="color-15"></li>
               <li class="color-16" data-style="color-16"></li>
               <li class="color-17" data-style="color-17"></li>
               <li class="color-18" data-style="color-18"></li>
               <li class="color-19" data-style="color-19"></li>
               <li class="color-20" data-style="color-20"></li>
</ul>
</div>
</div>`);$('head').append(' <link rel="stylesheet" href="" data-style="styles">');style_switcher=$('.iq-customizer'),panelWidth=style_switcher.outerWidth(true);$('.iq-customizer .opener').on("click",function(){var $this=$(this);if($(".iq-customizer.closed").length>0){style_switcher.animate({"right":"0px"});$(".iq-customizer.closed").removeClass("closed");$(".iq-customizer").addClass("opened");}else{$(".iq-customizer.opened").removeClass("opened");$(".iq-customizer").addClass("closed");style_switcher.animate({"right":'-'+panelWidth});}
return false;});var link=$('link[data-style="styles"]');var link_no_cookie=$('link[data-style="styles-no-cookie"]');$('.iq-customizer .iq-colorChange li').on('click',function(){if(link.length>0){var $this=$(this),tp_stylesheet=$this.data('style');$(".iq-colorbox .iq-colorselect .iq-colormark").removeClass("iq-colormark");$this.addClass("iq-colormark");$this.addClass("selected");$('.iq-customizer .iq-colorChange li').not(this).removeClass("selected");link.attr('href','css/color/'+tp_stylesheet+'.css');if($("#logo_img").length>0){document.getElementById("logo_img").src="images/color-customizer/white/"+tp_stylesheet+".png";}
if($("#logo_dark").length>0){document.getElementById("logo_dark").src="images/color-customizer/dark/"+tp_stylesheet+".png";}
if($("#footer_logo_dark").length>0){document.getElementById("footer_logo_dark").src="images/color-customizer/dark/"+tp_stylesheet+".png";}
if($("#footer_logo_img").length>0){document.getElementById("footer_logo_img").src="images/color-customizer/white/"+tp_stylesheet+".png";};$.cookie('tp_stylesheet',tp_stylesheet,30);}
updatechart($($(this)).index('.iq-customizer .iq-colorChange li'));});});