<!--

var hasValidationErrors = false;

function formatMoney(money) {
	var fixedMoney = money;
	if (money.toFixed) {
		fixedMoney = money.toFixed(2);
	} else {
		fixedMoney = currencyFormatted(money);
	}
	return '$' + addCommas(fixedMoney);
}

function currencyFormatted(amount)
{
	var i = parseFloat(amount);
	if(isNaN(i)) { i = 0.00; }
	var minus = '';
	if(i < 0) { minus = '-'; }
	i = Math.abs(i);
	i = parseInt((i + .005) * 100);
	i = i / 100;
	s = new String(i);
	if(s.indexOf('.') < 0) { s += '.00'; }
	if(s.indexOf('.') == (s.length - 2)) { s += '0'; }
	s = minus + s;
	return s;
}

function addCommas(nStr)
{
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}

function confirmBack() {
	var proceed = false;
	var goBack = confirm("Any changes made on this page will be lost. 'Next' must be pressed to save any changes.\nAre you sure you want to proceed?");
	
	if (goBack == true) {
		proceed = true;
	}
	
	return proceed;
}

function setValidationErrors() {
	hasValidationErrors = true;
}

function zoomOnErrors() {
	if (hasValidationErrors) {
		window.location.href='#validationErrors';
	}
}

//-->