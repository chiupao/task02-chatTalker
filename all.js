$(document).ready(function () {
  // ----- TOP -----
  $(".scrollTopBtn").click(function (e) {
    e.preventDefault();
    $("html,body").animate(
      {
        // 有些瀏覽器只支援html，有些只支援body 所以兩個都寫進去
        scrollTop: 0,
      },
      700
    );
  });

  // ----- program -----
  $(".programNumBtn").click(function (e) {
    e.preventDefault();

    // 樣式切換
    $(this).addClass("active");
    $(this).parent().siblings().find(".programNumBtn").removeClass("active");

    switch ($(this).text()) {
      case "10000位":
        $("#basicNum").html("10000<span>位</span>");
        $("#standardNum").html("10000<span>位</span>");
        $("#basicFee").html("600<span>TWD</span>");
        $("#standardFee").html("1600<span>TWD</span>");
        break;
      case "15000位":
        $("#basicNum").html("15000<span>位</span>");
        $("#standardNum").html("15000<span>位</span>");
        $("#basicFee").html("500<span>TWD</span>");
        $("#standardFee").html("1500<span>TWD</span>");
        break;
      case "20000位":
        $("#basicNum").html("20000<span>位</span>");
        $("#standardNum").html("20000<span>位</span>");
        $("#basicFee").html("400<span>TWD</span>");
        $("#standardFee").html("1400<span>TWD</span>");
        break;
      case "25000位":
        $("#basicNum").html("25000<span>位</span>");
        $("#standardNum").html("25000<span>位</span>");
        $("#basicFee").html("300<span>TWD</span>");
        $("#standardFee").html("1300<span>TWD</span>");
        break;
      case ">25000位":
        $("#basicNum").html(">25000<span>位</span>");
        $("#standardNum").html(">25000<span>位</span>");
        $("#basicFee").html("200<span>TWD</span>");
        $("#standardFee").html("1200<span>TWD</span>");
        break;
    }
  });

  // ----- QA -----
  $(".questionBlock").click(function () {
    // 樣式切換
    $(this).toggleClass("active");

    // ＋ 或 - 圖片切換
    $(this).find("img").attr("src") === "./images/icon_plus.svg"
      ? $(this).find("img").attr("src", "./images/icon_minus.svg")
      : $(this).find("img").attr("src", "./images/icon_plus.svg");

    // 文字打開
    $(this).siblings("p").slideToggle();

    // 其餘文字收合
    $(this).parent().siblings().find("p").slideUp();

    // 其餘樣式取消
    $(this).parent().siblings().find(".questionBlock").removeClass("active");
  });
});

// ----- Swiper -----
function initSwiper() {
  /* 
  id="comment-swiper" 區塊是使用 swiper 套件的範圍
  要抓取 id "#comment-swiper"
  */
  const swiper = new Swiper("#comment-swiper", {
    /*  預設要顯示幾個卡片 */
    slidesPerView: 1,
    /* 斷點設定 */
    breakpoints: {
      /* 螢幕寬度大於等於 992px 時切換為 3 欄 */
      992: {
        slidesPerView: 3,
      },
      /* 螢幕寬度大於等於 768px 時切換為 2 欄 */
      768: {
        slidesPerView: 2,
      },
      /* 更小時都顯示 1 欄 */
      0: {
        slidesPerView: 1,
      },
    },
    /* 卡片元素的間隔 */
    spaceBetween: 16,
    pagination: {
      /* 我想將分頁圓點綁在哪個 class */
      el: ".swiper-pagination",
      /* 將輪播設定為可以點擊分頁圓點來切換圖片 */
      clickable: true,
    },
  });
}

/* 觸發自己定義的函式 */
initSwiper();
