function move() {
  document.getElementById("bar__html").style.width = 70 + "%";
  document.getElementById("bar__css").style.width = 70 + "%";
  document.getElementById("bar__js").style.width = 50 + "%";
  document.getElementById("bar__sql").style.width = 50 + "%";
  document.getElementById("bar__php").style.width = 40 + "%";
  document.getElementById("bar__vbnet").style.width = 40 + "%";
  document.getElementById("bar__c").style.width = 50 + "%";
  document.getElementById("bar__java").style.width = 50 + "%";
  document.getElementById("bar__illust").style.width = 20 + "%";
  document.getElementById("bar__photo").style.width = 10 + "%";
}
window.onload = move;

// // ハンバーガーメニュー
// $('.hamburger').click(function () {
//   $('.sp__nav').fadeToggle();   //フェードイン・フェードアウト
//   $('.hamburger').toggleClass('open');  //class名追加
// });
$(function () {
  // ハンバーガーメニュー
  $(".hamburger").click(function () {
    $(".sp__nav").fadeToggle(); //フェードイン・フェードアウト
    $(".hamburger").toggleClass("open"); //class名追加
  });

  // トップページへ
  var topBtn = $("#to_top");
  topBtn.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });
});

// ====================
//モーダル
// ====================
// ====================
// モーダル
// ====================
document.addEventListener("DOMContentLoaded", function () {
  const modals = document.querySelectorAll(".modal");
  const modalButtons = document.querySelectorAll(".js-modal-button");
  const closeButtons = document.querySelectorAll(".js-close-button");
  const modalContents = document.querySelectorAll(".modal__content");

  modalButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      modals[index].style.display = "flex"; // まず背景（オーバーレイ）を表示
      document.body.style.overflow = "hidden"; // 背景スクロールを無効化
      setTimeout(() => {
        modalContents[index].classList.add("is-open"); // コンテンツだけふわっと表示
      }, 10);
    });
  });

  closeButtons.forEach((closeButton, index) => {
    closeButton.addEventListener("click", () => {
      modalContents[index].classList.remove("is-open"); // コンテンツをフェードアウト
      setTimeout(() => {
        modals[index].style.display = "none"; // アニメーション後に背景を非表示
        document.body.style.overflow = ""; // 背景スクロールを元に戻す
      }, 300); // CSSのtransition時間(0.3s)と合わせる
    });
  });

  modals.forEach((modal, index) => {
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        modalContents[index].classList.remove("is-open");
        setTimeout(() => {
          modals[index].style.display = "none";
          document.body.style.overflow = ""; // 背景スクロールを元に戻す
        }, 300);
      }
    });
  });
});

// ====================
//波打つアニメーション
// ====================
// 複数の `.loading-text` を取得
const loadingTextElements = document.querySelectorAll(".loading-text");

loadingTextElements.forEach((loadingText) => {
  const letters = "sonomi design sonomi design sonomi design".split("");

  // 各文字をspanで囲む
  letters.forEach((letter) => {
    const span = document.createElement("span");
    span.innerHTML = letter === " " ? "&nbsp;" : letter; // スペースを &nbsp; に変換
    loadingText.appendChild(span);
  });
});

// gsapで、全ての `.loading-text span` に波アニメーションを適用
gsap.matchMedia().add("(max-width: 768px)", () => {
  // スマホ・タブレット (幅768px以下) の場合
  return gsap.to(".loading-text span", {
    duration: 2,
    y: "40px", // 小さい画面では40px
    ease: "power1.inOut",
    stagger: {
      each: 0.1,
      yoyo: true,
      repeat: -1
    }
  });
});

gsap.matchMedia().add("(min-width: 769px)", () => {
  // PC (幅769px以上) の場合
  return gsap.to(".loading-text span", {
    duration: 2,
    y: "80px", // PCでは80px
    ease: "power1.inOut",
    stagger: {
      each: 0.1,
      yoyo: true,
      repeat: -1
    }
  });
});
