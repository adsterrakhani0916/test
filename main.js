// main.js

document.addEventListener("DOMContentLoaded", function() {
  // آرایه نمونه سیگنال‌ها
  const signals = [
    { title: "سیگنال ۱", description: "خرید BTC در سطح 50000 دلار" },
    { title: "سیگنال ۲", description: "فروش ETH در سطح 3000 دلار" },
    { title: "سیگنال ۳", description: "خرید XRP با رشد ۵ درصد" }
  ];

  const signalCardsContainer = document.getElementById("signalCards");

  // ایجاد و اضافه کردن کارت‌های سیگنال
  signals.forEach(signal => {
    const card = document.createElement("div");
    card.className = "signal-card";

    const title = document.createElement("h3");
    title.textContent = signal.title;

    const desc = document.createElement("p");
    desc.textContent = signal.description;

    card.appendChild(title);
    card.appendChild(desc);
    signalCardsContainer.appendChild(card);
  });

  // رویداد کلیک دکمه "شروع کنید"
  const getStartedButton = document.getElementById("getStarted");
  getStartedButton.addEventListener("click", function() {
    // اسکرول نرم به بخش ویژگی‌ها
    const featuresSection = document.getElementById("features");
    featuresSection.scrollIntoView({ behavior: "smooth" });
  });
});
