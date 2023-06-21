$(document).ready(function () {
  $(".header-burger").click(function (event) {
    $(".header-nav").toggleClass("active");
    $(".header-burger").toggleClass("active");
  });
  $(".more").click(function (event) {
    $(".text-block").toggleClass("open");
    $(".about-company")
      .find(".btn")
      .text(function (i, text) {
        return text === "read more" ? "close" : "read more";
      });
  });

  Fancybox.bind("[data-fancybox]", {});
});
