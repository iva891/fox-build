!function(){"use strict";$(function(){var e=$(".header");function t(){$W.scrollTop()>50?e.addClass("fixed"):e.removeClass("fixed")}t(),$W.scroll(function(){t()});var s=$(".js-open-menu"),i=$(".js-menu");s.on("click",function(){e.toggleClass("active-menu"),i.slideToggle()}),$(".js-mobile-menu__title").on("click",function(){var e=$(this),t=e.closest(".js-mobile-menu");e.toggleClass("active"),t.find(".js-mobile-menu__list").slideToggle()})});window.numberWithCommas=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")},$(function(){var e=$(".js-input");e.focus(function(){$(this).parent(".form-field").addClass("form-field--focused"),$(this).parent(".form-field").removeClass("form-field--error")}),e.blur(function(){""===$(this).val()&&$(this).parent(".form-field").removeClass("form-field--focused")}),e.each(function(){""===$(this).val()?$(this).parent(".form-field").removeClass("form-field--focused"):$(this).parent(".form-field").addClass("form-field--focused")})}),$(function(){var e=$(".js-select"),t=$(".js-select-input"),s=$(".js-select-filter");e.select2({dropdownAutoWidth:!0,containerCssClass:"select",dropdownCssClass:"no-input"}),t.select2({dropdownAutoWidth:!0,containerCssClass:"select",dropdownCssClass:"input",tags:!0}),s.select2({containerCssClass:"filter",dropdownCssClass:"no-input filter-dropdown"}),window.$select=e,window.$selectInput=t,window.$selectFilter=s}),$(function(){$(".js-tooltip").tooltipster({theme:["tooltipster-shadow","tooltipster-shadow-customized"],maxWidth:300,distance:5,debug:!0})}),$(function(){$(".js-add").click(function(){var e=$(this).prev().find(".js-counter-input"),t=parseInt(e.val());e.attr("value",t+1),$(this).prev().find(".js-counter-text").text(t+1)}),$(".js-sub").click(function(){var e=$(this).next().find(".js-counter-input"),t=parseInt(e.val());t>=1&&(e.attr("value",t-1),$(this).next().find(".js-counter-text").text(t-1))})}),$(function(){$(".js-input-mask").each(function(){var e=$(this).data("mask");new Inputmask({mask:e,placeholder:"_"}).mask(this)})}),$(function(){new Swiper(".js-slider-category",{slidesPerView:3,spaceBetween:0,freeMode:!0,autoplay:{delay:5e3},disableOnInteraction:!1,speed:0,watchSlidesProgress:!0});$(".slider-category__item").on("click",function(){todayMainSlider.autoplay.start()});var e=new Swiper(".js-slider-services",{slidesPerView:1,spaceBetween:20,loop:!1,speed:1200,watchSlidesVisibility:!0,breakpoints:{480:{slidesPerView:2},960:{slidesPerView:3},1300:{slidesPerView:4}}});$(".js-prev-services").on("click",function(){e.slidePrev(800)}),$(".js-next-services").on("click",function(){e.slideNext(800)});new Swiper(".js-slider-instagarm",{slidesPerView:1,spaceBetween:12,loop:!1,speed:800,watchSlidesVisibility:!0,simulateTouch:!0,breakpoints:{481:{simulateTouch:!0,spaceBetween:20},961:{simulateTouch:!1,spaceBetween:0}}});var t=[];if($(".js-slider__rest-place").each(function(e,s){t[e]=new Swiper(s,{slidesPerView:1,spaceBetween:0,loop:!0,speed:1200,autoHeight:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".js-rest-next",prevEl:".js-rest-prev"}})}),$(".js-types__list a").on("click",function(e){e.preventDefault();var t=$(this).attr("href"),s=$(t).offset().top;$("body,html").animate({scrollTop:s-100},1500)}),$W.width()>960)new Swiper(".js-rest-slider",{slidesPerView:1,spaceBetween:20,loop:!1,speed:800,effect:"fade",simulateTouch:!0,navigation:{nextEl:".js-next-rest",prevEl:".js-prev-rest"},breakpoints:{961:{spaceBetween:0}}});else new Swiper(".js-rest-slider",{slidesPerView:1,spaceBetween:20,loop:!1,speed:800,simulateTouch:!0,navigation:{nextEl:".js-next-rest",prevEl:".js-prev-rest"},breakpoints:{961:{spaceBetween:0}}});new Swiper(".js-events-slider",{slidesPerView:1,spaceBetween:20,loop:!1,speed:800,simulateTouch:!0,navigation:{nextEl:".js-next-event",prevEl:".js-prev-event"},breakpoints:{481:{spaceBetween:30},961:{spaceBetween:40},1211:{spaceBetween:60}}}),new Swiper(".js-gallery-slider",{loop:!1,speed:1500,initialSlide:0,autoplay:{delay:4e3},grabCursor:!1,simulateTouch:!1,watchSlidesProgress:!0,navigation:{nextEl:".js-next-gallery",prevEl:".js-prev-gallery"},breakpoints:{700:{simulateTouch:!0}},on:{progress:function(){for(var e=0;e<this.slides.length;e++){var t=this.slides[e].progress*(.5*this.width);this.slides[e].querySelector(".js-gallery-slide").style.transform="translate3d("+t+"px, 0, 0)"}},touchStart:function(){for(var e=0;e<this.slides.length;e++)this.slides[e].style.transition=""},setTransition:function(e){for(var t=0;t<this.slides.length;t++)this.slides[t].style.transition=e+"ms",this.slides[t].querySelector(".js-gallery-slide").style.transition=e+"ms"}}}),new Swiper(".js-slider-relax",{slidesPerView:1,spaceBetween:14,loop:!1,speed:800,simulateTouch:!0,navigation:{nextEl:".js-next-relax",prevEl:".js-prev-relax"},breakpoints:{481:{spaceBetween:30},961:{spaceBetween:40,slidesPerView:2},1211:{spaceBetween:58,slidesPerView:2}}})});var e,t=new Swiper(".js-slider-news",{slidesPerView:1,spaceBetween:50,loop:!1,speed:1200,watchSlidesVisibility:!0,breakpoints:{480:{slidesPerView:2},960:{slidesPerView:3},1300:{slidesPerView:3}}});$(".js-prev-news").on("click",function(){t.slidePrev(800)}),$(".js-next-news").on("click",function(){t.slideNext(800)}),$(function(){$(".js-number").keypress(function(e){var t=e.which?e.which:e.keyCode;if(t>31&&(t<48||t>57))return!1}),$(".js-agree").change(function(){var e=$(this),t=e.closest(".js-form").find(".submit");e.is(":checked")?t.removeAttr("disabled"):t.attr("disabled",!0)}),$(".js-form").each(function(){var e=$(this);e.attr("action");e.validate({focusInvalid:!1,highlight:function(e){$(e).closest(".form-field").addClass("form-field--error")},unhighlight:function(e){$(e).closest(".form-field").removeClass("form-field--error")},submitHandler:function(t,s){s.preventDefault();var i=new FormData,o=e.serializeArray();$.each(e.find(".js-input-file"),function(e,t){$.each($(t)[0].files,function(e,s){i.append(t.name,s)})}),$.each(o,function(e,t){i.append(t.name,t.value)}),i.append("key","value"),e.find("button").prop("disabled",!1),e[0].reset(),$(".popup").removeClass("is-show"),$("#popup-thank").addClass("is-show");var n=$(".js-select");return n.length&&n.each(function(){$(this).val("").trigger("change")}),$.ajax({url:e[0].action,type:"POST",processData:!1,contentType:!1,data:i,beforeSend:function(t){e.find("button").attr("disabled","disabled")},success:function(t){t.error?console.log("error"):setTimeout(function(){e.find("button").prop("disabled",!1),e[0].reset(),$(".popup").removeClass("is-show"),$("#popup-thank").addClass("is-show");var t=$(".js-select");t.length&&t.each(function(){$(this).val("").trigger("change")})},500)},error:function(e,t,s){console.log(e.status),console.log(s)}}),!1}})}),$B.on("click","label.error",function(){$(this).hide().siblings("input").focus()}),$B.on("keyup","input",function(){$(this).siblings("label.error").hide()}),$("#popup-thank").on("click",function(){$(this).removeClass("is-show")})}),$(function(){var e=$(".js-popup"),t=$(".js-popup-close"),s=null,i=void 0;function o(t,o,n){var a,l,r=$('.js-popup[data-block="'+t+'"]');e.removeClass("is-show"),r.addClass("is-show"),i=$(window).scrollTop(),r.find(".js-iframe").attr("src",n),"media"!==t&&(location.hash=t),i=$(window).scrollTop(),o&&(history.pushState({},"",o),$('.js-popup[data-block="'+t+'"]').find(".js-ajax-wrapper").empty(),a=o,l=$('.js-popup[data-block="'+t+'"]'),$.ajax({url:a,type:"GET",success:function(e){0!==$(e).length&&l.find(".js-ajax-wrapper").html($(e).hide().fadeIn(1e3))}}),s="href")}""!==location.hash&&($(".js-popup[data-block='"+location.hash.substr(1)+"']").addClass("is-show"),i=$(window).scrollTop()),$("body").on("click",".js-popup-link",function(e){e.preventDefault();var t=$(this);return o(t.attr("data-link"),t.attr("data-href"),t.attr("data-src")),!1}),window.openPopup=o,t.on("click",function(){var e=$(this).closest(".js-popup");e.removeClass("is-show"),e.find(".js-iframe").attr("src",""),location.hash="","undefined"!==i&&($(window).scrollTop(i),i=void 0),"href"===s&&(location.hash="",history.back(),s=null)})}),$(".js-tab__list li:first-child").addClass("active"),$(".js-tab__content").hide(),$(".js-tab__content:first").show(),$(".js-tab__list li").click(function(){$(".js-tab__list li").removeClass("active"),$(this).addClass("active"),$(".js-tab__content").hide();var e=$(this).find("a").attr("href");return $(e).slideDown(),!1}),$(function(){$(".content__video").each(function(e){var t=document.querySelectorAll(".content__video")[e],s=document.querySelectorAll(".content__video-bar")[e],i=document.querySelectorAll(".content__video-progress")[e],o=document.querySelectorAll(".content__video-drag")[e];function n(){TweenMax.set(i,{scaleX:(t.currentTime/t.duration).toFixed(5)}),TweenMax.set(o,{x:(t.currentTime/t.duration*s.offsetWidth).toFixed(4)})}$(this).siblings(".content__icon").on("click",function(){$(this).fadeToggle("500"),$(this).closest(".content").find(".content__preview").hide(),t.paused?t.play():t.pause(),window.videoPlaing=t}),$(this).on("click",function(){$(this).siblings(".content__icon").fadeToggle("500"),t.paused?t.play():t.pause(),window.videoPlaing=t}),t.onplay=function(){TweenMax.ticker.addEventListener("tick",n)},t.onpause=function(){TweenMax.ticker.removeEventListener("tick",n)},t.onended=function(){TweenMax.ticker.removeEventListener("tick",n)},Draggable.create(o,{type:"x",trigger:s,bounds:s,onPress:function(e){t.currentTime=this.x/this.maxX*t.duration,TweenMax.set(this.target,{x:this.pointerX-s.getBoundingClientRect().left}),this.update();var o=this.x/s.offsetWidth;TweenMax.set(i,{scaleX:o})},onDrag:function(){t.currentTime=this.x/this.maxX*t.duration;var e=this.x/s.offsetWidth;TweenMax.set(i,{scaleX:e})},onRelease:function(e){e.preventDefault()}})})}),(e=jQuery).fn.viewportChecker=function(t){var s={classToAdd:"visible",classToRemove:"invisible",classToAddForFullView:"full-visible",removeClassAfterAnimation:!1,offset:100,repeat:!1,invertBottomOffset:!0,callbackFunction:function(e,t){},scrollHorizontal:!1,scrollBox:window};e.extend(s,t);var i=this,o={height:e(s.scrollBox).height(),width:e(s.scrollBox).width()};return this.checkElements=function(){var t,n;s.scrollHorizontal?(t=Math.max(e("html").scrollLeft(),e("body").scrollLeft(),e(window).scrollLeft()),n=t+o.width):(t=Math.max(e("html").scrollTop(),e("body").scrollTop(),e(window).scrollTop()),n=t+o.height),i.each(function(){var i=e(this),a={},l={};if(i.data("vp-add-class")&&(l.classToAdd=i.data("vp-add-class")),i.data("vp-remove-class")&&(l.classToRemove=i.data("vp-remove-class")),i.data("vp-add-class-full-view")&&(l.classToAddForFullView=i.data("vp-add-class-full-view")),i.data("vp-keep-add-class")&&(l.removeClassAfterAnimation=i.data("vp-remove-after-animation")),i.data("vp-offset")&&(l.offset=i.data("vp-offset")),i.data("vp-repeat")&&(l.repeat=i.data("vp-repeat")),i.data("vp-scrollHorizontal")&&(l.scrollHorizontal=i.data("vp-scrollHorizontal")),i.data("vp-invertBottomOffset")&&(l.scrollHorizontal=i.data("vp-invertBottomOffset")),e.extend(a,s),e.extend(a,l),!i.data("vp-animated")||a.repeat){String(a.offset).indexOf("%")>0&&(a.offset=parseInt(a.offset)/100*o.height);var r=a.scrollHorizontal?i.offset().left:i.offset().top,c=a.scrollHorizontal?r+i.width():r+i.height(),d=Math.round(r)+a.offset,p=a.scrollHorizontal?d+i.width():d+i.height();a.invertBottomOffset&&(p-=2*a.offset),d<n&&p>t?(i.removeClass(a.classToRemove),i.addClass(a.classToAdd),a.callbackFunction(i,"add"),c<=n&&r>=t?i.addClass(a.classToAddForFullView):i.removeClass(a.classToAddForFullView),i.data("vp-animated",!0),a.removeClassAfterAnimation&&i.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){i.removeClass(a.classToAdd)})):i.hasClass(a.classToAdd)&&a.repeat&&(i.removeClass(a.classToAdd+" "+a.classToAddForFullView),a.callbackFunction(i,"remove"),i.data("vp-animated",!1))}})},("ontouchstart"in window||"onmsgesturechange"in window)&&e(document).bind("touchmove MSPointerMove pointermove",this.checkElements),e(s.scrollBox).bind("load scroll",this.checkElements),e(window).resize(function(t){o={height:e(s.scrollBox).height(),width:e(s.scrollBox).width()},i.checkElements()}),this.checkElements(),this},$(function(){$(".js-effect").viewportChecker({offset:200})})}();
//# sourceMappingURL=main.js.map
