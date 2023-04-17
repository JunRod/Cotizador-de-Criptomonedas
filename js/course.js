/*

- performance.now()
Vimo como usar performance para medir el tiempo de ejecucion de cualquier scripting

- defer o async 

defer: desacarga el HTML pero ejecuta el script cuando el HTML esté listo
async: descargar el HTML y ejecuta indemediatamente el script (Por lo que la UI no puede aparecer)

- debugger
usamos debugger para ver lo que tenemos hasta ese momento, eso me mostrará las variables, funciones, etc de la aplicacion hasta la donde ponemos debugger

- Seguridad

- No almacenes Password en LocalStorage ni en IndexDB
- Usar InnerHTML da vulnerabilidades que podemos evitar usando DOM Scripting y usando textContent.

*Formulario

- Valida en el Cliente (JavaScript) para retroalimentacion en tiempo real, pero tambien en el servidor.
- Si deseas crear apps con Autenticacion de usuario puedes utilizar JWT y Auth0

*Dependencias
-Cuando trabajes con dependencias, utiliza una herramienta para verificar vulnerabilidades como snyk.io
- Ofusca el codigo si lo consideras necesario.
- Hashea informacion sensible con bcrypt
*/
