function openPopUpNew(URL) 
{
    newWindow = window.open(URL,"popup","scrollbars,resizable=no,HEIGHT=300,WIDTH=310");
    newWindow.focus();
}

// custom popup used by iPortals
// do not modify
function openPopUpCustom(URL,height,width) 
{
    popUpOptions = "scrollbars,resizable=no,HEIGHT=" + height +",WIDTH=" + width;
    newWindow = window.open(URL,"popup",popUpOptions);
    newWindow.focus();
}


// custom popup used by Tour link on iPortals home page
// do not modify
function openTourPopUp(theURL,winName,features) 
{
  window.open(theURL,winName,features);
}
