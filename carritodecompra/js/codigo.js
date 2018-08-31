

function productos(){
  var productos = [
      {
        img : 'imagen/aceite.jpg',
        nombre : 'Aceite',
        precio : 90.00,
        cantidad : 5,
        carrito: false,
        cantidadCarrito:0
      },
      {
        img : 'imagen/balatas.jpg',
        nombre : 'Balatas',
        precio : 179.00,
        cantidad : 5,
        carrito: false,
        cantidadCarrito:0
      },
      {
        img : 'imagen/bateria.jpg',
        nombre : 'bateria',
        precio : 500.00,
        cantidad : 5,
        carrito: false,
        cantidadCarrito:0
      },
      {
        img : 'imagen/mando.jpg',
        nombre : 'Mando',
        precio : 120.00,
        cantidad : 5,
        carrito: false,
        cantidadCarrito:0

      },
      {
        img : 'imagen/direccional.jpg',
        nombre : 'Direccional',
        precio : 120.00,
        cantidad : 5,
        carrito: false,
        cantidadCarrito:0
      },
      {
        img : 'imagen/espejos.jpg',
        nombre : 'Espejos',
        precio : 150.00,
        cantidad : 5,
        carrito: false,
        cantidadCarrito:0

      },
      {
        img : 'imagen/faros.jpg',
        nombre : 'Faros',
        precio : 499.00,
        cantidad : 5,
        carrito: false,
        cantidadCarrito:0
      },
      {
        img : 'imagen/h4.jpg',
        nombre : 'H4',
        precio : 29.00,
        cantidad : 5,
        carrito: false,
        cantidadCarrito:0
      },
      {
        img : 'imagen/llanta.jpg',
        nombre : 'Llanta',
        precio : 599.00,
        cantidad : 5,
        carrito: false,
        cantidadCarrito:0
      }
      //var totalCompra=0;
    ],

 wrapper = $('.productosWrapper'),
 contenido = ''

 for(var i = 0; i < productos.length; i++){

   if(productos[i].cantidad > 0){

     contenido+= '<div class="coin-wrapper">'
     contenido+= '		<img src="'+productos[i].img+'" alt="'+productos[i].nombre+'">'
     contenido+= '		<span class="large-12 columns product-details">'
     contenido+= '			<h3>'+productos[i].nombre+' <span class="price">$ '+productos[i].precio+' </span></h3>'
     contenido+= '			<h3>Disponible: <span class="stock">'+productos[i].cantidad+'</span></h3>'
     contenido+= '		</span>'
     contenido+= '		<a class="large-12 columns btn submit ladda-button prod-'+i+'" data-style="slide-right" onclick="mostrar('+i+');">Añadir al carrito</a>'
     contenido+= '		<div class="clearfix"></div>'
     contenido+= '</div>'

   }
 }

 wrapper.html(contenido)

 localStorage.setItem('producto',JSON.stringify(productos))
}///


function mostrar(id){
	 var productos = JSON.parse(localStorage.getItem('productos')),
      producto = _.find(productos,{ 'id' : id }),
      cant = 1;

  alert(productos[id].nombre);
  alert("Cantidad "+productos[id].cantidad);
   if(productos[id].cantidad >0)
   {
    // alert("todo bien?");
     if(productos[id].carrito==true)
     {
       productos[id].cantidadCarrito=productos[id].cantidadCarrito+1;
     }else {
       alert("agregar al carrito");
      productos[id].cantidad= productos[id].cantidad-1;
      alert("candidada Disponible "+ productos[id].cantidad);

      productos[id].cantidadCarrito=productos[id].cantidadCarrito+1;
      alert("cantidad en carrito "+productos[id].cantidadCarrito);

      subtotal=productos[id].cantidadCarrito*productos[id].precio;


       var tabla = document.getElementById("tabla").innerHTML;
       document.getElementById("tabla").innerHTML = tabla+ '<tr><td><b><img width="50" height="50" src="'+productos[id].img+'"></b></td><td><b>'+productos[id].nombre+'</b></td><td><b>'+productos[id].cantidadCarrito+'</b></td><td><b>'+productos[id].precio+'</b></td><td><b>'+subtotal+'</b></td></tr>';

     }
   }
   else
   {
     alert("ya no hay"+ productos[id].nombre +" Disponible")
   }
   $(document).ready(function(){
    mensaje();
   	})
}

 function mensaje(){
   var total;
   var iva=0.16;
   iva=iva*subtotal;
   total=subtotal+iva;

   var tabla2 = document.getElementById("tabla2").innerHTML;
   document.getElementById("tabla2").innerHTML = tabla2+ '<tr><td>'+iva+'</td><td><b>'+total+'</b></tr>';
 }
$(document).ready(function(){
  productos();
	})
