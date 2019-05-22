function bg_change(){
	$(".background_animate3").delay(15000).fadeOut(500, function(){
		var bg3 = "<div class='background_animate3'></div>"
		$(this).remove();
		$("body").prepend(bg3);
	});
	$(".background_animate2").delay(31000).fadeOut(500, function(){
		var bg2 = "<div class='background_animate2'></div>"
		$(this).remove();
		$("body").prepend(bg2);
	});
	$(".background_animate1").delay(47000).fadeOut(500, function(){
		var bg1 = "<div class='background_animate1'></div>"
		$(this).remove();
		$("body").prepend(bg1);
	});
}
$(function(){

$(window).load(function() { $(".all_content, #footer").fadeIn(500); });
	// pages
	$('.page_query:eq(0)').show();
	$('#main_menu ul.red_buttons li:first-child a').addClass("selected");
	$('#main_menu ul.red_buttons li a').click(function(){
		if ( $(this).attr("class") == "selected" ) { return false; } else {
			var pageIndex = $('#main_menu ul li a').index(this);
			$('#loading').show(0);
			$('#footer, .page_query').fadeOut(100);
			$('.page_query').eq(pageIndex).delay(1000).fadeIn(100);
			$('#footer').delay(1000).fadeIn(100);
			$('#loading').delay(1000).hide(0);
			$("#main_menu ul.red_buttons li a").removeClass("selected").children("strong").removeClass("spotlight_icon");
			$(this).addClass("selected").children("strong").addClass("spotlight_icon");
		}
	});
	$("#about_page_link").click(function(){
		$('#loading').show(0);
		$('#footer, .page_query').fadeOut(100);
		$('.page_query:eq(2)').delay(1000).fadeIn(100);
		$('#footer').delay(1000).fadeIn(100);
		$('#loading').delay(1000).hide(0);
		$("#main_menu ul.red_buttons li a").removeClass("selected").children("strong").removeClass("spotlight_icon");
		$("#main_menu ul.red_buttons li:eq(2) a").addClass("selected").children("strong").addClass("spotlight_icon");
	});
	$("#contact_page_link").click(function(){
		$('#loading').show(0);
		$('#footer, .page_query').fadeOut(100);
		$('.page_query:eq(3)').delay(1000).fadeIn(100);
		$('#footer').delay(1000).fadeIn(100);
		$('#loading').delay(1000).hide(0);
		$("#main_menu ul.red_buttons li a").removeClass("selected").children("strong").removeClass("spotlight_icon");
		$("#main_menu ul.red_buttons li:eq(3) a").addClass("selected").children("strong").addClass("spotlight_icon");
	});

	
	// background effect
	setTimeout(function(){bg_change(); setInterval(bg_change, 48000)}, 0);
	
	// Menu style
	$('#main_menu ul.red_buttons li a').append("<strong></strong>");
	$("ul.red_buttons li a").append("<span></span><b></b>");
	$("ul.red_buttons li:first-child a span, ul.red_buttons li:last-child a b").hide();
	$("ul.red_buttons li:first-child a").append("<i></i>").css({"padding-left":"14px"});
	$("ul.red_buttons li:last-child a").append("<u></u>").css({"padding-right":"14px"});
	$("ul.red_buttons li:first-child a strong").addClass("spotlight_icon");
	
	// tags actions
	$(".tags a").append("<i></i><u></u>");
	
	// project page automatic hr
	$("#projects .project_singular:odd").after('<div class="clear"></div><div class="hr"></div>');
	
	// projects page categories
	$("#projects_categories li.button").click(function() {
		$("#projects .project_singular").fadeOut(1).removeClass("project_singular");
		$("#projects .clear, #projects .hr").remove();
		$("#projects ."+ $(this).attr('title')).parent().addClass("project_singular").fadeIn(1000);
		$("#projects .project_singular:odd").after('<div class="clear"></div><div class="hr"></div>');
		$("#projects_categories li").removeClass("selected");
		$(this).addClass("selected");
	});
	
	// categories menu
	$('.categories_menu li').append('<span></span><b></b><u></u>');
	
	// yellow buttons
	$(".yellow_buttons ul li a").append("<b></b><strong></strong>");
	$(".yellow_buttons ul li:first-child a").append("<u></u>").children("b").remove();
	$(".yellow_buttons ul li:last-child a").append("<small></small>").children("strong").remove();
	
	// yellow buttons hover actions
	$("#projects .project_singular .cat_items_bg").hover(function() {
		$(this).children("a").children(".portfolio_pic").animate({'opacity':'0.4'},100);
		$(this).children(".yellow_buttons").fadeIn(100);
	}, function(){
		$(this).children("a").children(".portfolio_pic").animate({'opacity':'1'},100);
		$(this).children(".yellow_buttons").hide(100);
	});
	$(".yellow_buttons ul li a").hover(function(){
		$(this).animate({'opacity':'0.8'},100);
	},function(){
		$(this).animate({'opacity':'1'},100);
	});
	
	// about page animations
	$('#magic_mouse, #iphone, #notebook').hover(function(){
		$(this).animate({rotate: '-15deg'}, 200);
	}, function() {
		$(this).animate({rotate: '0'}, 200);
	});
	
	// flickr image hover
	$(".my_flickr_photostream a").hover(function(){
		$(this).animate({rotate: '7deg'}, 100).attr('target','_blank');
	}, function(){
		$(this).animate({rotate: '0'}, 100);
	});
	
	// contact page form action
	$(".selectbox_relative .option").click(function(){
		$(this).next(".transparent_bg").show(0);
		$(this).parent(".selectbox_relative").children(".open_selectbox").slideDown(300);
		$(".all_content").css("z-index","initial");
	});
	
	$(".open_selectbox_click, .transparent_bg").click(function(){ 
		$(this).parent(".open_selectbox").parent(".selectbox_relative").children(".option").children("input").attr({"value":$(this).text()});
		$(".transparent_bg, .open_selectbox").hide(0);
		$(".all_content").css("z-index","2");
	});
	
	$("#is_uzerine_click").click(function(){ 
		$("#is_uzerine").show(0);
		$("form#contact_form").attr("action","/mail/mail_forWork.php");
	});
	$("#sadece_merhaba_click").click(function(){ 
		$("#is_uzerine").hide(0);
		$("form#contact_form").attr("action","/mail/mail_hello.php");
	});
	
	$("#logo_t_click").click(function(){ $("#kac_sayfa").hide(0); });
	$("#arayuz_t_click, #arayuz_g_click, #arayuz_tg_click").click(function(){ $("#kac_sayfa").show(0); });
	
	// contact form
	$("#contact_form_submit").click(function(){		
		if ( $(".required:eq(0)").val() == "" || $(".required:eq(1)").val() == "" || $(".required:eq(2)").val() == "" || $(".required:eq(0), .required:eq(1), .required:eq(2)").val() == "Required Field" ) { 
			$(".required[value=]").css({"color":"#e26363"}).attr("value", "Required Field").parent().animate({"left":"-5px"},100).animate({"left":"5px"},100).animate({"left":"-5px"},100).animate({"left":"5px"},100).animate({"left":"-5px"},100).animate({"left":"5px"},100).animate({"left":"-5px"},100).animate({"left":"0"},100, function(){
				$(".required[value='Required Field']").attr("value", "").css({"color":"#a9a9a9"});
			});
		}
		else { 
			$(".form_input_line .selectbox_relative input").removeAttr("disabled");
			$("#contact_form").submit();
			$(".transparent_bg").show(0).delay(8000).hide(0);
			$("#loading").show(0).delay(3000).hide(0);
			$("#msg_sent").delay(3000).show(0).delay(5000).hide(function(){ location.reload(); });
	
			$(".transparent_bg").click(function(){
				$("#msg_sent").hide(0);
				location.reload();
			});
		}
	});
	
	// google maps
	$("#google_maps").hover(function() {
		$(this).delay(1000).animate({'height':'300px'}, 300);
		$(this).children("iframe").delay(1000).animate({'height':'300px'}, 300);
	});
	$(":not(#google_maps)").click(function() {
		$("#google_maps").animate({'height':'100px'}, 300);
		$("#google_maps").children("iframe").animate({'height':'100px'}, 300);
	});
	
	// social icons border
	$(".social_icons a img, .my_flickr_photostream a img").attr("border","0");
	
	// footer input
	$("#footer_input").click(function(){ $(this).attr("value", ""); });
	$("#footer_submit").click(function(){ 
		if ( $("#footer_input").val() == "" || $("#footer_input").val() == "E-mail" ) { 
			$("#footer_input").css({"color":"#e26363"}).attr("value", "Required field").parent().animate({"left":"-5px"},100).animate({"left":"5px"},100).animate({"left":"-5px"},100).animate({"left":"5px"},100).animate({"left":"-5px"},100).animate({"left":"0"},100, function(){
				$("#footer_input").attr("value", "E-mail").css({"color":"#a9a9a9"});
			});
		}
		else { 
		$("form.yenilikler").submit();
		$(".transparent_bg").show(0).delay(8000).hide(0);
		$("#loading").show(0).delay(3000).hide(0);
		$("#msg_sent").delay(3000).show(0).delay(5000).hide(0);
		$(".transparent_bg").click(function(){
			$("#msg_sent").hide(0);	
		});
		}
	});
	
	// transparent bg
	$(".transparent_bg").css("opacity", "0.2");
	
});