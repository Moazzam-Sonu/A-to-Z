import haloMegaMenuEditor from './haloMegaMenuEditor';
import haloAskAnExpertPopup from './haloAskAnExpertPopup';

export default function(context, productId){
    var checkJS_load = true;

    function loadFunction() {
        if (checkJS_load) {
            checkJS_load = false;
            if (context.themeSettings.haloMegamenu) haloMegaMenuEditor(context);
            if (context.themeSettings.halo_ask_an_expert && context.themeSettings.halo_ask_an_expert_pagelink) haloAskAnExpertPopup(context);
        }
    }

    function eventLoad() {
        $(window).on('scroll', (e) => {
            loadFunction();
        });

        $(document).on('keydown mousemove touchstart', (e) => {
            loadFunction();
        });
    }
    eventLoad();

	function footerMobileToggle(){
        $('.footer-info-col--mobile .footer-info-heading').on('click', event => {
            $('.footer-info-col--mobile .footer-info-heading').not($(event.currentTarget)).removeClass('is-clicked');

            if($(event.currentTarget).hasClass('is-clicked')){
                $(event.currentTarget).removeClass('is-clicked');
            } else{
                $(event.currentTarget).addClass('is-clicked');
            }

            $('.footer-info-col--mobile').each((index, element) => {
                if($('.footer-info-heading', element).hasClass('is-clicked')){
                    $(element).find('.footer-info-wrapper').slideDown("slow");
                } else{
                    $(element).find('.footer-info-wrapper').slideUp("slow");
                }
            });
        });
    }
    footerMobileToggle();

    function checkCookiesPopup() {
        if ($('#consent-manager').length) {
            var height = $('#consent-manager').height();
            $('body').css('padding-bottom',height);
        }
        if ($('#consent-manager-update-banner').length) {
            var height = $('#consent-manager-update-banner').height();
            $('body').css('padding-bottom',height);
        }
    }
    checkCookiesPopup();

    function addWishList() {
        $('.card .card-wishlist').on('click', event => {
            event.preventDefault();

            var $this_wl = $(event.currentTarget),
                url_awl = $this_wl.attr('href');

            $.post(url_awl).done(() => {
                window.location.href = url_awl;
            });
        });
    }
    addWishList();

    function authPopup() {
        $('[data-login-form]').on('click', event => {
            event.preventDefault();
            if (!$('body').hasClass('page-type-login')) {
                const $target = $(event.currentTarget);
                $target.parent().siblings('.halo-auth-popup').toggleClass('is-open');
            } else{
                $('html, body').animate({
                    scrollTop: $('.login').offset().top,
                }, 700);
            }
        });

        $(document).on('click', event => {
            if ($('.halo-auth-popup').hasClass('is-open')) {
                if (($(event.target).closest('.halo-auth-popup').length === 0) && ($(event.target).closest('[data-login-form]').length === 0)){
                    $('.halo-auth-popup').removeClass('is-open');
                }
            }
        });
    }
    authPopup();

    function authSidebar() {
        $('[data-login-form-mobile]').on('click', event => {
            event.preventDefault();
            if (!$('body').hasClass('page-type-login')) {
                if($('.halo-auth-sidebar').hasClass('is-open')){
                    $('.halo-auth-sidebar').removeClass('is-open');
                    $('body').removeClass('openAuthSidebar');
                } else{
                    $('.halo-auth-sidebar').addClass('is-open');
                    $('body').addClass('openAuthSidebar');
                }
            } else{
                $('html, body').animate({
                    scrollTop: $('.login').offset().top,
                }, 700);
            }
        });

        $('.halo-auth-sidebar .halo-sidebar-close').on('click', event =>{
            event.preventDefault();

            $('.halo-auth-sidebar').removeClass('is-open');
            $('body').removeClass('openAuthSidebar');
        });

        $(document).on('click', event => {
            if ($('.halo-auth-sidebar').hasClass('is-open')) {
                if (($(event.target).closest('.halo-auth-sidebar').length === 0) && ($(event.target).closest('[data-login-form-mobile]').length === 0)){
                    $('.halo-auth-sidebar').removeClass('is-open');
                    $('body').removeClass('openAuthSidebar');
                }
            }
        });
    }
    authSidebar();

    function clickHaloBackground(){
        $('.halo-background').on('click', event => {
            event.preventDefault();

            if ($('body').hasClass('has-activeNavPages')) {
                $('.mobileMenu-toggle').trigger('click');
            }

            $('[data-search="quickSearch"]').removeClass('is-open');
            $('body').removeClass('openSidebar openSearchMobile openBeforeYouLeave');
            $('.page-sidebar-mobile').removeClass('is-open');
            $('.page-sidebar').removeClass('is-open');
        });
    }
    clickHaloBackground();

    function menuMobile(){
        $('.halo-menu-mobile .halo-sidebar-close').on('click', event => {
            event.preventDefault();

            if ($('body').hasClass('has-activeNavPages')) {
                $('.mobileMenu-toggle').trigger('click');
            }
        });

        if ($(window).width() <= 1024) {
            $('.mobileMenu-toggle').on('click', event => {
                if($('.halo-bottomHeader .navPages-list:not(.navPages-list--user)').length){
                    $('.halo-bottomHeader .navPages-list:not(.navPages-list--user)').children().prependTo('#halo-menu-mobile .navPages-list:not(.navPages-list--user)');
                }
            });
        }
    }
    menuMobile();

    function sidebarMobile(){
        $('.page-sidebar-mobile').on('click', event => {
            if($(event.currentTarget).hasClass('is-open')){
                $(event.currentTarget).removeClass('is-open');
                $('.page-sidebar').removeClass('is-open');
                $('body').removeClass('openSidebar');
            } else{
                $(event.currentTarget).addClass('is-open');
                $('.page-sidebar').addClass('is-open');
                $('body').addClass('openSidebar');
            }
        });

        $('.page-sidebar .page-sidebar-close').on('click', event => {
            event.preventDefault();
            $('.page-sidebar-mobile').removeClass('is-open');
            $('.page-sidebar').removeClass('is-open');
            $('body').removeClass('openSidebar');
        });
    }
    sidebarMobile();

    function searchFormMobile() {
        if ($(window).width() <= 1024) {
            if ($('.item--quicksearch #quickSearch').length) {
                $('#quickSearch').appendTo('#halo-search-mobile .halo-sidebar-wrapper');
            }
        } else {
            if (!$('.item--quicksearch #quickSearch').length) {
                $('#halo-search-mobile #quickSearch').appendTo('.item--quicksearch');
            }
        }
    }
    searchFormMobile();

    function searchMobileClick(){
        const $search = $('[data-search="quickSearch"]');

        $search.on('click', event => {
            event.preventDefault();

            if(!$search.hasClass('is-open')){
                $search.addClass('is-open');
                $('body').addClass('openSearchMobile');
            } else{
                $search.removeClass('is-open');
                $('body').removeClass('openSearchMobile');
            }
        });

        $('#halo-search-mobile .halo-sidebar-close').on('click', event => {
            event.preventDefault();
            
            $search.removeClass('is-open');
            $('body').removeClass('openSearchMobile');
        });
    }
    searchMobileClick();

    function hoverMenu(){
        if ($(window).width() > 1024) {
            if ($('.navPages-list:not(.navPages-list--user) > .navPages-item.has-dropdown').length) {
                $('.navPages-list:not(.navPages-list--user) > .navPages-item.has-dropdown').on('mouseover', event => {
                    $('body').addClass('openMenuPC');
                })
                .on('mouseleave', event => {
                    $('body').removeClass('openMenuPC');
                });
            }
        }
    } 
    hoverMenu();

    function clickSubLinksMenu(){
        $(document).on('click', '.halo-menu-megamenu .navPage-subMenu-links .navPages-action', event => {
            if($(event.target).hasClass('has-subMenu')){
                event.preventDefault();
                $(event.target).parent('.navPage-subMenu-item-child').addClass('is-open');
                $(event.target).parents('.navPage-subMenu-links').siblings().addClass('is-hidden');
            }
        });

        $(document).on('click', '.halo-menu-megamenu .navPage-subMenu-links .navPage-subMenu-title .navPages-action', event => {
            event.preventDefault();

            $(event.target).parents('.navPage-subMenu-item-child.is-open').removeClass('is-open');
            $(event.target).parents('.navPage-subMenu-links').siblings().removeClass('is-hidden');
        });
    }
    clickSubLinksMenu();

    function backToTop() {
        var offset = $(window).height()/2;
        const backToTop = $('#haloBackToTop');

        $(window).scroll(event => {
            ($(event.currentTarget).scrollTop() > offset) ? backToTop.addClass('is-visible') : backToTop.removeClass('is-visible');
        });

        backToTop.on('click', event => {
            event.preventDefault();

            $('body,html').animate({
                scrollTop: 0
            }, 1000);
        });
    }
    backToTop();

    // Product Tab
    function productShippingTab() {
        var link_page = context.themeSettings.productView_tab1_link;
        if (link_page) {
            $.ajax({
               url:link_page,
               type:'GET',
               success: function(data){
                    var content = $(data).find('.page-content').html();
                    if ($('#tab-1-mobile').children().not('.loadingOverlay').length <= 0) {
                        $('#tab-1-mobile').html(content);
                    }
               }
            });
        }
    }

    function productReturnTab() {
        var link_page = context.themeSettings.productView_tab2_link;
        if (link_page) {
            $.ajax({
               url:link_page,
               type:'GET',
               success: function(data){
                    var content = $(data).find('.page-content').html();
                    if ($('#tab-2-mobile').children().not('.loadingOverlay').length <= 0) {
                        $('#tab-2-mobile').html(content);
                    }
               }
            });
        }
    }

    function productCustomHTML() {
        var link_page = context.themeSettings.product_custom_html_link;
        if (link_page) {
            $.ajax({
               url:link_page,
               type:'GET',
               success: function(data){
                    var content = $(data).find('.page-content').html();
                    if ($('#halo-productView-about > .container-fluid .halo-about-us').length <= 0) {
                        $('#halo-productView-about > .container-fluid').html(content);
                    }
               }
            });
        }
    }

    if ($('.page-type-product')) {
        $(window).on('scroll load', function() {
            var scroll = $(window).scrollTop() + 1500,
                returnSroll = $(window).scrollTop() + 1000,
                productCustomSroll = scroll + 1600;

            if ($('#halo-productView-tabs').length) {
                var productTab = $('#halo-productView-tabs').offset().top;
            }

            if ($('#halo-productView-about').length) {
                var productCustom = $('#halo-productView-about').offset().top;
            }

            if (scroll >= productTab) {
                productShippingTab();
            }

            if (returnSroll >= productTab) {
                productReturnTab();
            }

            if (scroll >= productCustom) {
                productCustomHTML();
            }

        });
    }

    $(window).resize(function() {
        if ($(window).width() > 1024) {
            $('#halo-menu-mobile').css({'top': $("header .halo-middleHeader").outerHeight() + 1, 'height': $(window).height() - $("header .halo-middleHeader").outerHeight()});
            if(!$('.header').hasClass('is-sticky')){
                if($('#halo-menu-mobile .navPages-list:not(.navPages-list--user)').length){
                    $('#halo-menu-mobile .navPages-list:not(.navPages-list--user)').children().prependTo('.halo-bottomHeader .navPages-list:not(.navPages-list--user)');
                }
            }
        } else {
            $('#halo-menu-mobile').css({'top': 0, 'height': '100%'});
        }

        searchFormMobile();
    });
}
