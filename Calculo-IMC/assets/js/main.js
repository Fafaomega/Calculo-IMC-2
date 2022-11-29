const formulario = document.querySelector('#form');

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    const getPeso = e.target.querySelector('#peso');
    const getAltura = e.target.querySelector('#altura');

    const peso = Number(getPeso.value);
    const altura = Number(getAltura.value);

    if (!peso){
        setResultado('Peso Inválido', false);
        return;
    }
    if (!altura) {
        setResultado('Altura Inválida', false);
        return;
    }
    if (peso > 595){
        setResultado('Maximo de peso ja registrado é de 595kg então o seu peso está inválido', false);
        return;
    }
    if (peso < 2.1){
        setResultado('Mínimo de peso ja registrado é de 2.1kg então o seu peso está inválido', false);
        return;
    }
    if (altura > 2.51) {
        setResultado('Maior altura ja registrada é de 2.51 Metros então a sua altura está inválida', false);
        return;
    }
    if (altura < 0.54) {
        setResultado('Menor altura ja registrada é de 54 centímentros então a sua altura está inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é de ${imc} (${nivelImc}).`;
    
    setResultado(msg, true)
});

function getNivelImc (imc){
    const nivel = ['Abaixo do peso normal', 'Peso normal', 'Excesso de peso', 'Obesidade classe 1',
'Obesidade classe 2(severa)', 'Obesidade classe 3(mórbida)']

    if (imc >= 40) return nivel[5];
    if (imc >= 35) return nivel[4];
    if (imc >= 30) return nivel[3];
    if (imc >= 25) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}
function getImc(peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}
function criaP (){
    const p = document.createElement('p');
    return p;
}
function setResultado(msg, isValid){
    const resultado = document.querySelector('.res');
    resultado.innerHTML = '';

    const p = criaP();

    if(isValid){
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
}