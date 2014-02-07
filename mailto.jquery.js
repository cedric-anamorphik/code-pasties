// jQuery mailTo plugin (anti-spam)
/* 
 * [ced - 25/9/2012 14:30:26] Anamorphik Studio
 * 
 *		Transform links to mailto:user@domain.com using JS to avoid spam bots
 *		
 *		Ex. markup : <a class="contact" href="domain.com">user</a> OR <a class="contact" href="http://www.domain.com">user</a> (validates W3C)
 *
 *		use : $('a.contact').mailTo();
 *
 *		Options : $('a.contact').mailTo( { subject:'', cc:'', bcc:'', body:'' } );
 *		but cc and bcc e-mails will be found in unexecuted source code.
 *
*/
(function($) {
	$.fn.mailTo = function(params){
		params = params||'';
		if(params){
			params.subject = 	(params.subject!=undefined ? '?subject='+params.subject : '');
			params.cc = 		(params.cc!=undefined ? '&cc='+params.cc : '');
			params.bcc = 		(params.bcc!=undefined ? '&bcc='+params.bcc : '');
			params.body = 		(params.body!=undefined ? '&body='+params.body : '');
			params = params.subject+params.cc+params.bcc+params.body;
		}
		this.each(function() {
			var user = $(this).html()||false;
			var domain = $(this).attr('href').replace('http://www.','').replace('www.','').replace('http://','').replace('/','')||false;
			if(user && domain){
				$(this).html(user+'@'+domain);
				$(this).attr('href', 'mailto:'+user+'@'+domain+params);
			}
		});
		return this;
	};
})(jQuery);
