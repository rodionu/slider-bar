var pages;


// html example: https://g6jds.csb.app/range_slider.txt
$(document).ready(function () {
    pages = 10;
    $('[name=pages]').val(pages);
    swiper_func_pages("pages", '.slider-number');
    do_on_range_change_pages();
  });

  $("[name=pages]").on("input", function () {
    pages = $('[name=pages]').val();
    swiper_func_pages("pages", '.slider-number');
    do_on_range_change_pages();
  });

  function do_on_range_change_pages() {
      $('.membership-number').text(pages);
  $('[bloc=price]').text((pages * 6632));

  }

  function swiper_func_pages(name, swiper) {
    name = "[name=" + name + "]";
    var range_val = $(name).val();
    range_val = parseFloat(range_val);
    var range_width = $(name).width() - 10;
    var range_max = $(name).attr("max");
    range_width = range_width / range_max;
    range_width = range_width * (range_val - 1);
    $(swiper).css({ transform: "translateX(" + range_width + "px)" });
  }
