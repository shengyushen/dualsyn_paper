/*
   Milonic DHTML Menu Automatic Menu Opening Module  openmenusbyurl.js version 1.7 - 16th June 2005
   This module is only compatible with the Milonic DHTML Menu version 5.62 or higher

   Copyright 2004 (c) Milonic Solutions Limited. All Rights Reserved.
   This is a commercial software product, please visit http://www.milonic.com/ for more information.
   
   The object of this module is to re-open the menu or menus up to point where the user was on a previous page.
   Just add this module to your HTML page after the menu_data.js file.
*/


/* All of the following paramater are none mandatory*/
//mm_maxLevels=0;         // parameter [INTEGER] to fix the number of menus displayed to the specified maximum value.
resetAutoOpen=true      // parameter This bit allows the menu to re-open if sibling menus have been closed, displaying the menu again if required.
//mm_contentFrame="Content"; // parameter - Currently in Beta so of no use in this version.
forceChildSubOpen=true  // Forces the opening of a child sub menu if the opening items URL matches the current page URL and also opens a sub menu

function _ocURL(){
	if(_W.forceChildSubOpen){
		_cln=_cip.length
		for(_c=0;_c<_cln;_c++){
			if(_mi[_cip[_c]][3]){
				_mn=getMenuByName(_mi[_cip[_c]][3])
				_cip[_cip.length]=_m[_mn][0][0]
			}
		}
		forceChildSubOpen=0
	}
	

	_ombcu=new Array()	
	if(_cip.length>0){
		for(_c=0;_c<_cip.length;_c++){
			_ci=_cip[_c];
			_mni=getParentItemByItem(_ci);
			if(_mni==-1)_mni=_ci			
			if(_mni+" "!=$u){
				while(_mni!=-1){
					
					_ombcu[_ombcu.length]=_mni
					_mni=getParentItemByItem(_mni);
					if(_mni+" "==$u)_mni=-1					
				}
			}
		}
	}
	
	if(_startM){
		setTimeout("_ocURL()", 300)
	}
	else{
		
			if(_W.mm_contentFrame){
				//_hrF=parent.frames[mm_contentFrame].location.pathname+parent.frames[mm_contentFrame].location.search
				//_Lhr=parent.frames[mm_contentFrame].location.href
				//_hx=_Lhr.split("/")
				//_fNm="/"+_hx[_hx.length-1]
			}
		
		if(_ombcu.length&&(_W.mm_maxLevels>0||_W.mm_maxLevels+" "==$u)){
			for(_oma=_ombcu.length-1;_oma>-1;_oma--){
				_i=_ombcu[_oma]
				_I=_mi[_i]
				//alert(_I)
				
				_popi(_i)


				clickAction(_i)
				_ofMT=1

				if(_I[32]){
					_tI=gmobj("img"+_i)
					if(_tI&&_I[29])_tI.src=_I[29]
				}

				
				if(_oma==_W.mm_maxLevels)return
			}
		}
	}
}
_ocURL()



