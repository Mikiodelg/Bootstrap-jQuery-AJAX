Aplicaciones de Bootstrap, jQuery usando AJAX

El repositorio contiene los archivos necesarios para la interacción con una API pública realizando las 5 funciones de una API RESTFull, en mi caso he seleccionado la API de GitHub.

Para probar su funcionamiento:

	1 - Seleccionar el archivo "Git.html" y abrirlo con un navegador web.

	2 - Funcionamiento "Listar Stings". Introducir en la casilla de "Owner" el nombre de un usuario publico de Github. Por Ejemplo "Mikiodelg" y pulsar el boton "Get Repositories". A su izquierda saldran un listado con todos los Repositorios almacenados por ese usuario en Github.

	3 - Funcionamiento "Consultar". Este se puede hacer de 2 formas. La primera con una seleccion multiple, introducimos en la casilla "Owner" un usuario publico de Github, volvemos a usar "Mikiodelg", y en la casilla "Repo" uno de sus repositorios que hemos podido ver con la funcion anterior, en este caso "Beeter". A su izquierda veremos la informacion relevante relativa al Repositorio seleccionado. Tambien podemos comprobarlo con una seleccion simple, introduciendo en la casilla "User" un usuario de Github, "Mikiodelg" y nos mostrara a su izquierda informacion relativa a ese usuario.
	
	4 - Funcionamiento "Crear". Introducir en la casilla "Name" el nombre del repositorio a crear, y en la casilla "Desc" la descripcion del mismo. Para este caso, he usado un usuario de prueba llamado "TestDsa" con contraseña "12345a" para la autentificacion, este usuario es publico y se pueden realizar todas las funciones anteriores con el tambien para comprobar el funcionamiento del boton Crear, buscando o bien el listado de repositorios de "TestDsa" o bien el repositorio en concreto.

	5 - Funcionamiento "Editar". Introducir en la casilla "Name" el nombre del repositorio a editar, y en la casilla "Desc" la descripcion nueva que queremos que tenga. Como antes, podemos comprobar el funcionamiento del boton buscando el repositorio en concreto.

	6 - Funcionamiento "Borrar". Introducir en la casilla "Name" el nombre del repositorio a borrar. Para comprobar que ha funcionado correctamente buscar la lista de repositorios y comprobar que este ya no existe.

Es posible que no se vean instantaneamente los cambios realizados tanto por la funcion Crear, Editar o Borrar, ya que el navegador trabaja con datos en Cache, y a veces nos devuelve la ultima busqueda si la hemos realizado hace muy poco tiempo, en ese caso esperar un poco a que se borre la variable interna que devuelve el valor almacenado en cache y volver a buscar la informacion para comprobar el correcto funcionamiento.