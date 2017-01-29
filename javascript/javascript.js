jQuery(function($) {

  $(function(){
		$('#main-slider.carousel').carousel({
			interval: 10000,
			pause: false
		});
	});

    	//smooth scroll
	$('.a-internal').click(function(event) {
		event.preventDefault();
		var target = $(this).find('>a').prop('hash');
		$('html, body').animate({
			scrollTop: $(target).offset().top  -70
		}, 500);
	});

  var _gaq = _gaq || [];
     _gaq.push(['_setAccount', 'UA-23019901-1']);
     _gaq.push(['_setDomainName', "bootswatch.com"]);
       _gaq.push(['_setAllowLinker', true]);
     _gaq.push(['_trackPageview']);
  (function() {
      var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
  /* <![CDATA[ */
  (function(){try{var s,a,i,j,r,c,l=document.getElementsByTagName("a"),t=document.createElement("textarea");for(i=0;l.length-i;i++){try{a=l[i].getAttribute("href");if(a&&a.indexOf("/cdn-cgi/l/email-protection") > -1  && (a.length > 28)){s='';j=27+ 1 + a.indexOf("/cdn-cgi/l/email-protection");if (a.length > j) {r=parseInt(a.substr(j,2),16);for(j+=2;a.length>j&&a.substr(j,1)!='X';j+=2){c=parseInt(a.substr(j,2),16)^r;s+=String.fromCharCode(c);}j+=1;s+=a.substr(j,a.length-j);}t.innerHTML=s.replace(/</g,"&lt;").replace(/>/g,"&gt;");l[i].setAttribute("href","mailto:"+t.value);}}catch(e){}}}catch(e){}})();
  /* ]]> */
  (function(){
    $('#patronageModal').on('shown.bs.modal', function () { $('#myInput').focus(); });
    $('.navbar-collapse a').click(function(e){
        setTimeout(function () {
          if ($('.open').has(e.target).length === 0) {
             $(".navbar-collapse").collapse('hide');
          }
        },100);
    });
  })();

  (function(){
    blueimp.Gallery(
        [
          '0B42xTONh7lAhbXBLTGZ6WXJXV2M',
          '0B42xTONh7lAhcHBuTE13a2JTQ1U',
          '0B42xTONh7lAhYjQxMzVqeTBtMTg',
          '0B42xTONh7lAhRU1JbTFibnlqLUE',
          '0B42xTONh7lAhaWVJMEdZd1RYNkE',
          '0B4VqCgvXdbxNdE5HWHY2QVp6aU0',
          '0B4VqCgvXdbxNZVdDUS00MDVXdzg',
          '0B4VqCgvXdbxNN0NpWndsT1VBaUE',
          '0B4VqCgvXdbxNQWxkOFBkd19RWGc',
        ].map(function(fileID) {
            return 'https://drive.google.com/uc?export=view&id=' + fileID;
        }),
        {
            container: '#blueimp-gallery-carousel',
            carousel: true
        }
    );
  })();

});
