var IeeeCsHome = function () {
	var $ = jQuery;
	return {
		init: function() {
			var instance = this;

			instance.handleSearchForm();
			instance.dropDownMenu();
			instance.handleLastChild();
			//instance.activeTopLink();
		},

		handleSearchForm: function() {
			var searchForm = $('#banner .search');

			var searchInput = searchForm.find('input[@type=image]');
			var searchLink = $('<a class="search-input-link" href="javascript:;"></a>');

			searchLink.click(
				function() {
					$(this).parents('form')[0].submit();
				}
			);

			searchInput.hide();
			searchInput.before(searchLink);
		},

		handleLastChild: function () {
			var instance = this;

			$('#footer ul li:last').addClass('last-child');
		},

		dropDownMenu: function() {
			$(".parent-nav-item").hoverIntent(
				{
					interval: 25,
					timeout: 0,
					over: function () {
						var instance = $(this);
						var child = $('.child-menu', this);

						instance.addClass("init");
						child.slideDown(100);
					},
					out: function () {
						var instance = $(this);
						var child = $('.child-menu', this);
						child.slideUp(50);
						instance.removeClass("init");
					}
				}
			);
		},
		
		activeTopLink: function() {
			var HOME = '/portal/web/guest/test';
			var ABOUT = '/portal/web/guest/about';
			var HELP = '/portal/web/guest/help';
			var BROWSE = '/portal/web/guest/browse';
			var SITEMAP = '/portal/web/guest/sitemap';
			var CONTACT = '/portal/web/guest/contact';

			if (document.location.toString().indexOf(HOME) > -1) {
				jQuery('#home').removeClass('link');
				jQuery('#home').addClass('link-active');
			}

			if (document.location.toString().indexOf(ABOUT) > -1) {
				jQuery('#about').removeClass('link');
				jQuery('#about').addClass('link-active');
			}

			if (document.location.toString().indexOf(HELP) > -1) {
				jQuery('#help').removeClass('link');
				jQuery('#help').addClass('link-active');
			}

			if (document.location.toString().indexOf(BROWSE) > -1) {
				jQuery('#browse').removeClass('link');
				jQuery('#browse').addClass('link-active');
			}

			if (document.location.toString().indexOf(SITEMAP) > -1) {
				jQuery('#sitemap').removeClass('link');
				jQuery('#sitemap').addClass('link-active');
			}

			if (document.location.toString().indexOf(CONTACT) > -1) {
				jQuery('#contact').removeClass('link');
				jQuery('#contact').addClass('link-active');
			}
		}
	};
}();

jQuery(document).ready(
	function() {
		IeeeCsHome.init();
	}
);
