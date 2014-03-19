<!--

function MM_jumpMenu(targ,selObj,restore){ //v3.0
  eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
  if (restore) selObj.selectedIndex=0;
}


DaysofWeek = new Array()
  DaysofWeek[0]="Sun"
  DaysofWeek[1]="Mon"
  DaysofWeek[2]="Tue"
  DaysofWeek[3]="Wed"
  DaysofWeek[4]="Thu"
  DaysofWeek[5]="Fri"
  DaysofWeek[6]="Sat"
Months = new Array()
  Months[0]="Jan"
  Months[1]="Feb"
  Months[2]="Mar"
  Months[3]="Apr"
  Months[4]="May"
  Months[5]="Jun"
  Months[6]="Jul"
  Months[7]="Aug"
  Months[8]="Sep"
  Months[9]="Oct"
  Months[10]="Nov"
  Months[11]="Dec"
var isIE4Clock = navigator.appVersion.indexOf("MSIE 4") != -1;

function upclock(){
    var dte = new Date();
    var hrs = dte.getHours();
    var min = dte.getMinutes();
    var day = DaysofWeek[dte.getDay()];
    var date = dte.getDate();
    if (date<+9) date="0"+date;
    var month = Months[dte.getMonth()];
    var year = dte.getFullYear();
    var y = String(year);
    var y1 = y.slice(2,4);
    var col = ":";
    var spc = " ";
    var gmt ="UTC";
    if (hrs<=9) hrs="0"+hrs;
    if (min<=9) min="0"+min;
    var hourUTC = dte.getUTCHours();
    var diffhour = hrs - hourUTC;
    var minUTC = dte.getUTCMinutes();
    var diffmin = min - minUTC;
    var diffmins = ((diffmin < 10) ? "0" : "") + diffmin;
    if (isIE4Clock || isNetscape) {
        document.write("&nbsp;&nbsp;"+day+spc+date+spc+month+spc+y1+spc+hrs+col+min+spc+diffhour+diffmins+spc+gmt);
    } else if (navigator.appVersion.indexOf("MSIE") != -1) {
        clock.innerHTML = "&nbsp;&nbsp;"+day+spc+date+spc+month+spc+y1+spc+hrs+col+min+spc+diffhour+diffmins+spc+gmt;
    }
}


var isNetscape = false, isNav4 = false, isNav6 = false, isIE4 = false;
var isMac = false, isWindows = false;
var navStyleExt = "", navVers = 0, canDoNav = false;

navVers = parseInt(navigator.appVersion.charAt(0));
isNetscape = navigator.appName == "Netscape";
isMac = navigator.appVersion.indexOf("Macintosh") != -1;
isWindows = navigator.appVersion.indexOf("Windows") != -1;
if (navVers >= 4) {
  if (isNetscape) {
    isNav4 = navVers == 4;
	isNav6 = navVers >= 5;
	isIE4 = (isNav6 && (!isMac));  // Netscape 6 basically functions like IE
  }
  if (navigator.appName.indexOf("Microsoft") != -1) {
    isIE4 = (isMac && (navigator.appVersion.indexOf("MSIE 4") > -1)) ? false : true;
            // don't do for IE 4, as it's really bad on Mac!
  }
  canDoNav = (isNav4 && (!isMac)) || isIE4;
}

if (isNav4) {
  navStyleExt = "NS";
  if (navigator.appVersion.indexOf("Windows") != -1) navStyleExt = "NSwin";
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_setTextOfTextfield(objName,x,newText) { //v3.0
  var obj = MM_findObj(objName); if (obj) obj.value = newText;
}
function trackEnterKey(event)
{
	if(isEnterPressed(event))
	{
		//trackEvent('hpsrch_enter_google_oc');
		dcsMultiTrack('WT.mc_id','hpsrch_enter_google_oc');
		//alert ("test2");
	}
	return true;
}
function isEnterPressed(e)
{
	var Ucode=e.keyCode?e.keyCode:e.charCode
	if(Ucode==13)
	{
	return true;
	//alert ("test");
	}
	else
	return false;
}

function siteCheck(event){
	//settimeout('donothing1()',200);
	var searchKeyword = document.forms.siteSearch.qt.value;
	searchKeyword = trim(searchKeyword);
	if (searchKeyword != null && searchKeyword != '') {
		var chkval = "google";//getCheckedValue(document.forms['siteSearch'].elements['group1']);
	   	if(chkval.indexOf("google") > -1){
			document.forms.siteSearch.q.value = searchKeyword;
	   	} else {
	   		document.forms.siteSearch.action="http://odysseus.ieee.org/ieeesearch/query.html";
	   	}
		return true;
	} else {
		alert("Please enter one or more keywords.");
		return false;
	}
}

function trim(str)
{
   return str.replace(/^\s*|\s*$/g,"");
}


function getCheckedValue(radioObj) {
	if(!radioObj)
		return "";
	var radioLength = radioObj.length;
	if(radioLength == undefined)
		if(radioObj.checked)
			return radioObj.value;
		else
			return "";
	for(var i = 0; i < radioLength; i++) {
		if(radioObj[i].checked) {
			return radioObj[i].value;
		}
	}
	return "";
}

function putGoogleWatermark()
{
	//var f= document.getElementById('searchbox_006539740418318249752:f2h38l7gvis');
	var f= document.forms["siteSearch"];
	
	//alert("form:"+f);
	var searchbox= f.qt;//document.siteSearch.qt;
	//alert("qt:" +searchbox);
	searchbox.onblur=putGoogleImage;
	searchbox.onfocus=removeGoogleImage;
	putGoogleImage();
}
function putGoogleImage()
{
	//var f= document.getElementById('searchbox_006539740418318249752:f2h38l7gvis');
	var f= document.forms["siteSearch"];
	
	var searchbox= f.qt;//document.siteSearch.qt;
	//var searchbox= document.siteSearch.qt;
	if (searchbox.value == '') {
	searchbox.style.background = '#FFFFFF url(http:\x2F\x2Fwww.google.com\x2Fcoop\x2Fintl\x2Fen\x2Fimages\x2Fgoogle_custom_search_watermark.gif) left no-repeat';
	}
}

function removeGoogleImage()
{
	//var f= document.getElementById('searchbox_006539740418318249752:f2h38l7gvis');
	var f= document.forms["siteSearch"];
	
	var searchbox= f.qt;//document.siteSearch.qt;
	//var searchbox= document.siteSearch.qt;
	searchbox.style.background = '#ffffff';

}

window.onload=function(){
 	putGoogleWatermark();
}

//-->
