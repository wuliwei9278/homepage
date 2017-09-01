function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

window.onload = function(){
	var d = new Date();
	var dateBirth = new Date(1992, 07, 08, 06, 30, 0, 0);
	var oLastModif = new Date(document.lastModified);
	var diff = (d - dateBirth) / (24 * 3600 * 1000);
	var days = Math.round(diff);
	//alert(diff);
	document.getElementById("demo").innerHTML = 'Last updated on ' 
	+ formatDate(oLastModif) + ' by <a href="index.html">Liwei Wu</a>';
	//document.getElementById("demo").innerHTML = d;
	document.getElementById("demoo").innerHTML = "It has been " + days 
	+ " days since Liwei's birth";

}
