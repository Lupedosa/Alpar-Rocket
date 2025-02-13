//bhaskara

//let a = 1, b = 8, c = -9 //resultado com duas raízes 
let a = 1, b = -4, c = 4


delta = (b**2 - 4*a*c)
sqrtDelta = Math.sqrt(delta)

if(delta < 0 || a == 0){

    console.log("Delta inferior a 0. Operação não pode ser realizada");

}else if (delta == 0){

const x = (-b + sqrtDelta) / 2*a

console.log("Raiz única: x = " + x)

}else{

    const x1 = (-b + sqrtDelta) / 2*a
    const x2 = (-b - sqrtDelta) / 2*a
    
    console.log("Raiz 1: x1 = " + x1)
    console.log("Raiz 2: x2 = " + x2)
//teste
}