//Показываем / скрываем меню в мобильной версии
$(function() {
  $(".header-menu-img").click(function() {
    $(".main-menu-mobile").addClass("main-menu-mobile__closed");
  });
  $(".main-menu-mobile__btn").click(function() {
    $(".main-menu-mobile").removeClass("main-menu-mobile__closed");
  });
});

//Подсвечием первый пункт меню, если курсор находится в подменю.
$(function() {
  $(".navbar-submenu").hover(function(){
    $(".navbar__item__link__account").addClass("when__navbar__submenu__hover");
  }, function(){
    $(".navbar__item__link__account").removeClass("when__navbar__submenu__hover");
  });
});

//При hover эффекте на первом пункте меню, смещаем вправо элемент "стрелочка вниз" для первого пункта меню.
$(function() {
  $(".navbar__item__link__account").hover(function(){
    $(".navbar__item__link__account").addClass("when__navbar__submenu__hover");
  }, function(){
    $(".navbar__item__link__account").removeClass("when__navbar__submenu__hover");
  });
});

//Показываем / скрываем в "Лента публикаций" разделы Новое/Интересное
$(function() {
  $(".publications-left__tape__new").click(function() {    
    $(".publications-left__tape__choice").removeClass("show__border__bottom");
    $("#publications-left__items__new").show();
    $("#publications-left__items__interesting").hide();
  });
  $(".publications-left__tape__interesting").click(function() {
    $(".publications-left__tape__choice").addClass("show__border__bottom");
    $("#publications-left__items__new").hide();
    $("#publications-left__items__interesting").show();
  });
});