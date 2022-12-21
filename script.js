console.log('Its working')
let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('purple')
} else{
	setTheme(theme)
}


let themeDots =document.getElementByclassName('theme-dot')


for (vari=0; themeDots.length>i; i++){
    themeDots[i].addEventListener('click', function(){
    	let mode = this.dataset.mode
    	console.log('option clicked:',mode)
    	setTheme(mode)
    })



}
function setTheme(mode){

   if(mode== 'light'){
   	document.getElementByID('theme-style').href ='default.css'
   }
   if(mode== 'blue'){
   	document.getElementByID('theme-style').href ='blue.css'
   }
   if(mode== 'green'){
   	document.getElementByID('theme-style').href ='green.css'
   }
   
   if(mode== 'purple'){
   	document.getElementByID('theme-style').href ='purple.css'
   }
   
   localStorage.setItem('theme',mode)
}