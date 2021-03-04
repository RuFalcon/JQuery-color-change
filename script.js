$(function () {
  let style = "background-color";

  function hexFromRGB(r, g, b) {
    const hex = [r.toString(16), g.toString(16), b.toString(16)];
    $.each(hex, function (nr, val) {
      if (val.length === 1) {
        hex[nr] = "0" + val;
      }
    });
    return hex.join("").toUpperCase();
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  function refreshSwatch() {
    let red = $("#slider").slider("value");
    let randomColor = getRandomInt(255);
    hex = hexFromRGB(red, randomColor, randomColor);
    $("#swatch").css(style, "#" + hex);
  }

  function changeButtonColor(event) {
    let primaryButton = "";
    let secondaryButton = "";
    [primaryButton, secondaryButton, style] =
      event.currentTarget.id === "background"
        ? ["#background", "#text", "background-color"]
        : ["#text", "#background", "color"];

    event.stopImmediatePropagation();
    refreshSwatch();
    $(primaryButton).addClass("btn-active");
    $(secondaryButton).removeClass("btn-active");
  }

  $("#slider").slider({
    orientation: "horizontal",
    range: "min",
    max: 255,
    value: 127,
    slide: refreshSwatch,
    change: refreshSwatch,
  });

  $("#background").click(function (event) {
    changeButtonColor(event);
  });

  $("#text").click(function (event) {
    changeButtonColor(event);
    console.log(event.currentTarget.id);
  });

  $("#slider").slider("value", 255);

  $(".btn").on("click", function () {
    $(".btn").toggleClass("btn-active", 1000);
  });
});
