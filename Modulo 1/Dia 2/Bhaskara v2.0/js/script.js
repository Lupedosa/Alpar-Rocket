document.getElementById('calculate').addEventListener('click', function(){
    const a = document.getElementById('a').value;
    const b = document.getElementById('b').value;
    const c = document.getElementById('c').value;

let delta = (b**2 - 4*a*c)
let sqrtDelta = Math.sqrt(delta)

if(delta < 0 || a == 0){

    let total = "Delta inferior a 0. Operação não pode ser realizada";
    alert(total);
    


    }else if (delta == 0){

        const x = (-b + sqrtDelta) / 2*a

        let total = "Raiz única: x = " + x;
        document.getElementById('total').innerHTML = (total);

    }else{

        const x1 = (-b + sqrtDelta) / 2*a
        const x2 = (-b - sqrtDelta) / 2*a
        
        let total = "Raiz 1: x1 = " + x1 + "<br> Raiz 2: x2 = " + x2;
        document.getElementById('total').innerHTML = (total);

}

});