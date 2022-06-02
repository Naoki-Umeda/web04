"use strict";

/*---------- ハンバーガーメニュー ----------*/
const hamburger = $(".js_hamburger");
const navigation = $(".js_nav");

hamburger.on("click", function () {
  $(this).toggleClass("is_active");
  navigation.toggleClass("is_active");
  $(".js_body").toggleClass("is_hidden");
});

/*---------- トップに戻るボタン ----------*/
const pageTop = $(".js_page-top");

$(window).on("scroll", function () {
  const windowHeight = $(window).height();
  let scrollPos = $(window).scrollTop();
  if (scrollPos > windowHeight) {
    pageTop.addClass("is_active");
  } else {
    pageTop.removeClass("is_active");
  }
});

pageTop.on("click", function () {
  $("html,body").animate(
    {
      scrollTop: 0,
    },
    600
  );
});
/*---------- faqボタン ----------*/
const faqBtn = $(".js_faq");
const switchTime = 500;

faqBtn.on("click", function () {
  $(this).find(".js_faq-a").slideToggle(switchTime);
  $(this).find(".js_mark").toggleClass("is_open");
});
