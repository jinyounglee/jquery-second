// js 파일 로
$(function(){
	$('#btnLogin').click(showEmail);
	$('font').hide();
});


function showEmail(){
	var email = $('#inputEmail').val();
	var password = $('#inputPassword').val('test'); // setter 로서의 역할만 한다. 
	var password1 = $('#inputPassword').val();
	alert('email :: ' + email + '\n' + 'password :: ' + password + '\n' + 'password1 :: ' + password1 );
}