$(function () {
  function o() {
    $("#modal").fadeOut(500), $("body").css("overflow", "scroll");
  }

  $(".btn-order").click(function () {
    $("#modal").fadeIn(500), $("body").css("overflow", "hidden");
  }),
    $("#close").click(function () {
      o();
    }),
    $("#modal").click(function (t) {
      var c = $(".modal__content__form");
      t.target == c[0] || c.has(t.target).length || o();
    }),
    $(".timetable__group").click(function () {
      $(".timetable__group__dropdown", this).slideToggle(500),
        $("i.fa", this).toggleClass("clicked");
    });
});
