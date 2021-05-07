jQuery(document).ready(function ($) {
  var skillArr = [
    "javascript",
    "jquery",
    "reactjs",
    "nodejs",
    "laravel",
    "mysql",
    "mongodb",
    "git",
  ];
  // Smooth scroll for the menu and links with .scrollto classes
  $(".smothscroll").on("click", function (e) {
    e.preventDefault();
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 62,
          },
          1500,
          "easeInOutExpo"
        );
      }
    }
  });

  $(".carousel").carousel({
    interval: 3500,
  });

  // JavaScript Chart
  skillArr.forEach((el) => {
    new Chart(document.getElementById(el).getContext("2d")).Doughnut([
      { value: 98, color: "#1abc9c" },
      { value: 2, color: "#ecf0f1" },
    ]);
  });
});
