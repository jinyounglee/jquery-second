// js 파일 로
$(function(){
	$('#btnLogin').click( showEmail );
	$('font').hide(); 
});


function showEmail(){

	var email = $('#inputEmail').val();
	var password = $('#inputPassword').val(); // setter 로서의 역할만 한다. 

	if( !email ){
		$('font').show();
	}
	
}
