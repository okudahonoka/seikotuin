/* ===================================
   Harada Osteopathic Clinic
   script.js
=================================== */

// -----------------------------
// ハンバーガーメニュー
// -----------------------------
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

if (hamburger && nav) {

    hamburger.addEventListener("click", () => {

        nav.classList.toggle("active");

        hamburger.classList.toggle("active");

    });

}

// -----------------------------
// メニューをクリックしたら閉じる
// -----------------------------
const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");
        hamburger.classList.remove("active");

    });

});

// -----------------------------
// スクロールアニメーション
// -----------------------------
const fadeElements = document.querySelectorAll(".fade");

const fadeIn = () => {

    fadeElements.forEach(el => {

        const position = el.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (position < windowHeight - 120) {

            el.classList.add("show");

        }

    });

};

window.addEventListener("scroll", fadeIn);
window.addEventListener("load", fadeIn);

// -----------------------------
// ヘッダー背景
// -----------------------------
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        header.style.background = "rgba(247,243,236,.98)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";

    } else {

        header.style.background = "rgba(247,243,236,.95)";
        header.style.boxShadow = "none";

    }

});

// -----------------------------
// ボタンを少しリッチに
// -----------------------------
const buttons = document.querySelectorAll(".btn,.more-btn,.reserve-btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-4px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0)";

    });

});

console.log("Harada Osteopathic Clinic Loaded");
