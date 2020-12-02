var formData = new FormData();

formData.append("email", "A01411438@itesm.mx");
formData.append("password", 1234);

var xhr = new XMLHttpRequest();
xhr.open("UNLOCK", "localhost:3000/api/auth");
xhr.send(formData);
if (xhr.status == 200)
 dump(xhr.responseText);
