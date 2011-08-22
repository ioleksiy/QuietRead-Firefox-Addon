var quietread = function () {
	return {
		run : function () {
			document.location.href= 'quietread://'+escape(content.document.location.href+'|qr|'+'Unknown title');
		}
	};
}();