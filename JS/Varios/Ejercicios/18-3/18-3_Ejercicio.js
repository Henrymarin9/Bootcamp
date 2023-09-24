const meses = [
    "Enero", "Febrero", "Marzo",
    "Abril", "Mayo","Junio", 
    "Julio", "Agosto","Septiembre",
    "Octubre", "Noviembre", "Diciembre"
];

for(let i = 0; i < 12; i++){
    let mensaje = ` es el mes Nro°: ${i+1}`
    console.log(meses[i] + mensaje);
}