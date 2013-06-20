var win = Titanium.UI.createWindow({
	title : 'Tab 1',
	backgroundColor : '#fff'
});

var tv = Ti.UI.createTableView();

require('model').get({
	url : 'http://www.heise.de/newsticker/heise-atom.xml',
	onload : function(_data) {
		console.log(data);
		// DATEN RENDEREN
	}
});

win.add(tv);
win.open();
