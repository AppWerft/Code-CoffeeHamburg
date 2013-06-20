exports.get = function(_args) {

	var xhr = Ti.Network.createHTTPClient({
		timeout : 10000,
		onload : function() {
			var XMLTools = require('xmltools');
			var xml = new XMLTools(this.responseText);
			var data = xml.toObject();
			/// XML parsen
			if (_args.onload != undefined && typeof (_args.onload) === 'function') {
				_args.onload(data.channel.item);
			}
		}
	});
	xhr.open('GET', _args.url);
	xhr.send(null);
}
