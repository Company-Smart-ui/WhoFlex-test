//common js

$(function () {
  //헤더 네비
  $(".navBtn").on("click", function () {
    $(this).toggleClass("on");
    $(".main_nav").toggleClass("on");
    $(".black_back_pc").toggle();
  });

  $(".black_back_pc").on("click", function () {
    $(".main_nav").removeClass("on");
    $(".navBtn").removeClass("on");
    $(".black_back_pc").hide();
  });

  $(".main_nav .nav_menu > ul a").on("click", function () {
    $(".main_nav .nav_menu > ul a.on").removeClass("on");
    $(this).addClass("on");
  });

  $(".btn_nav_toggle").on('click',function(){
	 $(this).parents(".nav_menu").children("ul").toggleClass("open");
	 if($(this).parents(".nav_menu").children("ul").hasClass("open") ) {
		$(this).text("Less -");
	 }	else {
		$(this).text("More +");
		
	 }
  });

  //헤더 Me
  $(".n_icon.button_my").on("click", function () {
    $(this).parent("li").toggleClass("on");
	$(".button_my_dimmed").toggle();
  });
  $(".button_my_dimmed").on('click',function(){
  	$(".n_icon.button_my").parent("li").toggleClass("on");
	$(".button_my_dimmed").toggle();
  })

  // qna & homework tab
  $(".my_cards_tit_tab span").on("click", function () {
    var target = $(this).attr("data-target");
    //console.log(target);
    $(".my_cards_tit_tab span").removeClass("on");
    $(this).parents(".my_cards_box").children(".my_cards_data").css("display", "none");

    $(this).addClass("on");
    $("." + target).css("display", "block");
  });

  //topButton
  $(".topButton").on("click", function () {
    $("body, html").stop().animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });

  //common modal
  $(".openModal").on("click", function () {
    var modalTarget = $(this).attr("data-target");
    $(modalTarget).show();
    $("html").addClass("ovf-hidden");
    //console.log(modalTarget);
  });
  $(".closeModal, .commonDimmed , .black_back_pc").on("click", function () {
    $(this).parents(".commonMoadal").hide();
    $("html").removeClass("ovf-hidden");
  });

  //fake select
  $(".fake_select .select_tit").on("click", function () {
	if($(this).parents(".fake_select").hasClass('on')){
		$(".fake_select").removeClass("on");
	} else { 
		$(".fake_select").removeClass("on");
		$(this).parents(".fake_select").addClass("on");
	}    
  });

  $(".select_option a").on("click", function (e) {
    //var optionValue = $(this).text();
	const value = e.currentTarget.textContent.trim();
    //console.log(value);
    $(this).parents(".fake_select").children(".select_tit").children("span").text(value);
  });  

  //score 영역 추가
  $(".score_select .select_option a").on("click", function (e) {
	const widthTarget = $(this).parents('.score_select').children('.select_tit').find('.star');
	const scoreWidth = $(this).attr('data-width');
	//console.log(widthTarget);
	widthTarget.css('width',scoreWidth);
  });  

  // 타겟영역을 제외하고 클릭했을 시 팝업 숨김처리.
  $("body").on("click", function (e) {
    var tgPoint = e.target;
    //console.log(tgPoint.parentNode);

    //fake select
    if ($(tgPoint.parentNode.parentNode).hasClass("fake_select" && "on") ) {
		//작동안되게처리
    } else if($(tgPoint.parentNode).hasClass("fake_select" || "on")) {
		//작동안되게처리
	} else {
	    $(".fake_select").removeClass("on");
	}

  });

  //공통 리스트 버튼 ( 북마크 토글 / 장바구니 클릭 시 활성화 / 선물하기 클릭시 활성화 )
  $(".save_btns .btn_bookmark").on("click", function () {
    $(this).toggleClass("on");
  });
  $(".save_btns .btn_cart").on("click", function () {
    $(this).addClass("on");
  });
  $(".save_btns .btn_gift").on("click", function () {
    $(this).addClass("on");
  });

  //메인 카러셀 리스트 내 버튼 ( 북마크 토글 / 장바구니 클릭 시 활성화 )
  $('.main_list_slide_wrap .icon_bookmark').on("click", function () {
    $(this).toggleClass("on");
  });
  $('.main_list_slide_wrap .icon_cart').on("click", function () {
    $(this).addClass("on");
  });


  //장바구니 열기(헤더)
  $(".button_cart").on("click", function () {
    $(".cartWrap, .black_back_pc").show();
  });

  //장바구니 열기(장바구니에 상품이 담겼을때)
  $(".main_list_slide_wrap .icon_cart , .common_list_box .btn_cart, .btnOpenCart").on("click", function () {
    $(".cartWrap, .black_back_pc").show();
  });

  $(".cartCloseBtn, .black_back_pc").on("click", function () {
    $(".cartWrap, .black_back_pc, .cartQueBox").hide();
  });

  //물음표를 클릭했을 때 말풍선 나오기
  $(".cartQueBox").hide();
  $(".cartQueBtn").on("click", function () {
    $(".cartQueBox").toggle();
  });

  //공통 댓글
  $(".reply_textarea textarea").on("focus", function () {
    $(this).parents(".reply_textarea").addClass("focus");
  });
  $(".reply_textarea textarea").on("blur", function () {
    //console.log(this);
    $(this).parents(".reply_textarea").removeClass("focus");
  });


  //상품 리스트 - 필터 토글
  $('.filter_box_tit_toggle').on('click',function(){
    $(this).parents('.filter_box').toggleClass('open');
  })




}); // funciton end





