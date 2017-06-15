'use strict'

module.exports = function (app) {
	app.get('/:timestring', (reqv, resp) => {
	
		// Decode URI string = convert %20 to spase for ex.
		let time = decodeURI(reqv.params.timestring);

		// if get string as number convert it to number;
		if(!isNaN(+time)) time = Number(time) * 1000;

		let timeObj = {};

		let date = new Date(time);
		// if get correct Date format
		if(date.toString() !== 'Invalid Date' && !isNaN(date)) {
			timeObj.unix = date.getTime() / 1000;
			timeObj.normal = date.toDateString(); 
		} else {
			timeObj.unix = null;
			timeObj.normal = null;
		}
	resp.send(timeObj);
});
}
