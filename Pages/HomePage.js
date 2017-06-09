var hikes = require("hikes");

function chooseHike(arg) {
	hike.value = arg.data;
}

module.exports = {
	hikes: hikes,

	chooseHike: chooseHike
};