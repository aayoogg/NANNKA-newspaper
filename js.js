'use strict';

// click emerge picture
//start
$(function () {
  //logoの表示
  $(window).on('load', function () {
    $('#splash').delay(1500).fadeOut('slow'); //ローディング画面を1.5秒（1500ms）待機してからフェードアウト
    $('#splash_logo').delay(1200).fadeOut('slow'); //ロゴを1.2秒（1200ms）待機してからフェードアウト
  });

  $('.start_hangle').on('click', function () {
    $('.fangel-ghost-wrapper').slideToggle(100);
  });

  //気魄
  $('.js_kihaku_words').on('click', function () {
    $('.kihaku-wrapper').slideToggle();
  });

  // 目食耳視
  $('.women-sentence_box').on('click', function () {
    $('.women-sentence_item2').slideToggle();
  });

  // gall
  $('.gall').on('click', function () {
    $('.gall_tape-box').slideToggle();
  });

  // 款然
  $('.kannzen_title-box').on('click', function () {
    $('.kannzen_pictures-box').slideToggle();
  });

  // 言近而指遠
  $('.gennchika_title-box').on('click', function () {
    $('.gennchika_picture-wrapper').slideToggle();
  });

  // TEDIOUS
  $('.js_tandg_tedious-box').on('click', function () {
    $('.tandg_tedious_picutre').slideToggle();
  });

  // greedy
  $('.js_tandg_greedy-title-box').on('click', function () {
    $('.tandg_greedy_picutre').slideToggle();
  });

  // 大虐殺
  $('.look_txt').on('click', function () {
    $('.js_look-in_text').slideToggle(100);
  });

  // aboutme_who
  $('.aboutme_who').on('click', function () {
    $('.js_aboutme_who-box').slideToggle();
  });

  // hamburger-menu
  const hamburger = $('.js_hamburger');
  //ナビゲーションのセレクタを変数navigationに代入
  const navigation = $('.js_navigation');
  hamburger.on('click', function () {
    //     //実行したい処理
    //     //クリックしたハンバーガーメニューを変形
    $(this).toggleClass('is_active');
    //     //ナビゲーションの出現・消失
    navigation.toggleClass('is_active');
    //     //スクロールを固定する
    $('.js_body').toggleClass('is_active');
  });

  // 目次クリックしたらメニュー自動で閉じる
  $('a[href^="#"]').on('click', function () {
    $('.m_hamburger').click(); // .menuをクリックした時と同じ処理
  });

  // 目次クリックしたらクリックしたところに飛ぶ
  $('#page-link a[href*="#"]').click(function () {
    //全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
    var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
    var pos = $(elmHash).offset().top; //idの上部の距離を取得
    $('body,html').animate({ scrollTop: pos }, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
    return false;
  });
});
