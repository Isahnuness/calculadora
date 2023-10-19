
function toggleAndarInput() {
    var tipoImovel = document.getElementById('tipoImovel').value;
    var andarInput = document.getElementById('andarInput');

    if (tipoImovel === 'apartamento') {
        andarInput.style.display = 'block';
    } else {
        andarInput.style.display = 'none';
    }
}

document.getElementById('tipoImovel').addEventListener('change', toggleAndarInput);


function calcularImovel() {
    var tipoImovel = document.getElementById('tipoImovel').value;
    var metragem = parseFloat(document.getElementById('metragem').value);
    var quartos = parseInt(document.getElementById('quartos').value);
    var andar = parseInt(document.getElementById('andar').value) || 0;


    if (quartos > 3) {
        alert("Número de quartos não pode ser maior do que 3.");
        return;
    }

    var precoMetroQuadrado = 3000;
    var preco;

    switch (tipoImovel) {
        case 'casa':
            preco = metragem * precoMetroQuadrado;
            break;
        case 'apartamento':
            preco = metragem * precoMetroQuadrado * (1 + (andar * 0.1));
            break;
        default:
            alert('Tipo de imóvel inválido.');
            return;
    }

    document.getElementById('resultado').innerText = 'Preço do Imóvel: R$ ' + preco.toFixed(2);
}
