var API_BASE_URL = "https://api.github.com/";
var USERNAME = "testDSA";
var PASSWORD = "123456a";

$.ajaxSetup({
    headers: { 'Authorization': "Basic "+ btoa(USERNAME+':'+PASSWORD) }
});

$("#button_getlist_Repositories").click(function(e){
e.preventDefault();
$("#Repositories_result").text('');
if ($("#Repo_Owner").val()==""){
$('<div class="alert alert-danger"> <strong>Oh!</strong> No has puesto un nombre </div>').appendTo($("#Repositories_result"));
}
else{
	getListRepo($("#Repo_Owner").val());
}
});

$("#button_getInfo_Repositorie").click(function(e){
e.preventDefault();
$("#RepositorieInfo_result").text('');
if ($("#Repo_User").val()==""){
$('<div class="alert alert-danger"> <strong>Oh!</strong> No has puesto un nombre </div>').appendTo($("#RepositorieInfo_result"));
}
else if($("#Repo_Name").val()==""){
$('<div class="alert alert-danger"> <strong>Oh!</strong> No has puesto el repositorio </div>').appendTo($("#RepositorieInfo_result"));
}
else
	getInfoRepo($("#Repo_User").val(),$("#Repo_Name").val());
});

$("#button_getInfo").click(function(e){
e.preventDefault();
$("Info_result").text('');
if ($("#Info_User").val()==""){
$('<div class="alert alert-danger"> <strong>Oh!</strong> No has puesto un nombre </div>').appendTo($("#Info_result"));
}
else
	getInfo($("#Info_User").val());
});


$("#button_Create_Repositorie").click(function(e){
e.preventDefault();
$("#RepositorieCreate_result").text('');
	if ($("#CreatedRepo_Name").val()==""){
	$('<div class="alert alert-danger"> <strong>Oh!</strong> No has puesto un nombre </div>').appendTo($("#RepositorieCreate_result"));
	}
	else if($("#CreatedRepo_Desc").val()==""){
	$('<div class="alert alert-danger"> <strong>Oh!</strong> No has puesto la descripcion </div>').appendTo($("#RepositorieCreate_result"));
	}
else
	var newRepo = Object();
		newRepo.name = $("#CreatedRepo_Name").val();
		newRepo.description = $("#CreatedRepo_Desc").val();
		newRepo.private = false;
	CreateRepo(newRepo);
});

$("#button_Edit_Repositorie").click(function(e){
e.preventDefault();
$("#RepositorieEdit_result").text('');
	if ($("#EditedRepo_Name").val()==""){
	$('<div class="alert alert-danger"> <strong>Oh!</strong> No has puesto un nombre </div>').appendTo($("#RepositorieEdit_result"));
	}
	else if($("#EditedRepo_Desc").val()==""){
	$('<div class="alert alert-danger"> <strong>Oh!</strong> No has puesto la descripcion a editar</div>').appendTo($("#RepositorieEdit_result"));
	}
else
	var newRepo = Object();
		newRepo.name = $("#EditedRepo_Name").val();
		newRepo.description = $("#EditedRepo_Desc").val();
	EditRepo(newRepo);
});

$("#button_Delete_Repositories").click(function(e){
e.preventDefault();
$("#Delete_result").text('');
	if ($("#Del_Name").val()==""){
	$('<div class="alert alert-danger"> <strong>Oh!</strong> No has puesto un nombre </div>').appendTo($("#Delete_result"));
	}
else
	DeleteRepo($("#Del_Name").val());
});

function getListRepo(Repo_Owner){
var url = API_BASE_URL + 'users/' + Repo_Owner + '/repos';
$("#Repositories_result").text('');
$.ajax({
		url : url,
		type : 'GET',
		dataType : 'json',
	}).done(function(data, status, jqxhr) {
			if(data==""){
			$("#Repositories_result").text('');
				$('<div class="alert alert-danger"> <strong>Oh!</strong> No tiene repositorios </div>').appendTo($("#Repositories_result"));
				}
			else{
				$.each(data,function(i,v){
				var repo=v
				$('<h4> Name: ' + repo.name + '</h4>').appendTo($('#Repositories_result'));
				});
			
			}
	console.log(data); 
	}).fail(function() {
		$('<div class="alert alert-danger"> <strong>Oh!</strong> Error </div>').appendTo($("#Repositories_result"));
	});

}
function getInfoRepo(Repo_User,Repo_Name){
var url = API_BASE_URL + 'repos/' + Repo_User + '/'+ Repo_Name;
$("#RepositorieInfo_result").text('');
$.ajax({
		url : url,
		type : 'GET',
		dataType : 'json',
	}).done(function(data, status, jqxhr) {
		$('<h4> Id: ' + data.id + '</h4>').appendTo($('#RepositorieInfo_result'));
		$('<h4> Name: ' + data.name + '</h4>').appendTo($('#RepositorieInfo_result'));
		$('<h4> Owner: ' + data.owner.login + '</h4>').appendTo($('#RepositorieInfo_result'));
		$('<h4> URL: ' + data.html_url + '</h4>').appendTo($('#RepositorieInfo_result'));
		$('<h4> Description: ' + data.description + '</h4>').appendTo($('#RepositorieInfo_result'));
	}).fail(function() {
		$('<div class="alert alert-danger"> <strong>Oh!</strong> Error </div>').appendTo($("#RepositorieInfo_result"));
	});
}

function getInfo(Usuario){
var url = API_BASE_URL + 'users/' + Usuario;
$("#Info_result").text('');
$.ajax({
		url : url,
		type : 'GET',
		dataType : 'json',
	}).done(function(data, status, jqxhr) {
		$('<h4> Id: ' + data.id + '</h4>').appendTo($('#Info_result'));
		$('<h4> Name: ' + data.login + '</h4>').appendTo($('#Info_result'));
		$('<h4> URL: ' + data.html_url + '</h4>').appendTo($('#Info_result'));
		$('<h4> Avatar: </h4><img src="'+data.avatar_url+'"width=70 height=70>').appendTo($('#Info_result'));
	}).fail(function() {
		$('<div class="alert alert-danger"> <strong>Oh!</strong> Error </div>').appendTo($("#Info_result"));
	});
}

function CreateRepo(Repository){

var url = API_BASE_URL + 'user/repos';
var data = JSON.stringify(Repository);
$("#RepositorieCreate_result").text('');
$.ajax({
		url : url,
		type : 'POST',
		crossDomain : true,
		dataType : 'json',
		data : data,
	}).done(function(data, status, jqxhr) {
		$('<div class="alert alert-success"> <strong>Ok!</strong> Repository Created</div>').appendTo($("#RepositorieCreate_result"));	
	}).fail(function() {
		$('<div class="alert alert-danger"> <strong>Oh!</strong> Error </div>').appendTo($("#RepositorieCreate_result"));
		});
}

function EditRepo(Repository){

var url = API_BASE_URL + 'repos/' + USERNAME + '/' + Repository.name;
var data = JSON.stringify(Repository);

$("#RepositorieEdit_result").text('');

$.ajax({
		url : url,
		type : 'PATCH',
		crossDomain : true,
		dataType : 'json',
		data : data,

		
	}).done(function(data, status, jqxhr) {
		$('<div class="alert alert-success"> <strong>Ok!</strong> Repository Updated</div>').appendTo($("#RepositorieEdit_result"));
	
	}).fail(function() {
		$('<div class="alert alert-danger"> <strong>Oh!</strong> Error </div>').appendTo($("#RepositorieEdit_result"));
		});
}

function DeleteRepo(Nombre){

var url = API_BASE_URL + 'repos/'+USERNAME+'/'+Nombre;

$("#RepositorieEdit_result").text('');

$.ajax({
		url : url,
		type : 'DELETE',
		crossDomain : true,
		dataType : 'json',
}).done(function(data, status, jqxhr) {
		$('<div class="alert alert-success"> <strong>Ok!</strong> Repository Deleted</div>').appendTo($("#Delete_result"));
	
	}).fail(function() {
		$('<div class="alert alert-danger"> <strong>Oh!</strong> Error </div>').appendTo($("#Delete_result"));
		});
}		