//CEP

function limpa_formulário_cep() {
        document.getElementById('logradouro').value=("");
        document.getElementById('bairro').value=("");
        document.getElementById('cidade').value=("");
        document.getElementById('estado').value=("");
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        document.getElementById('logradouro').value=(conteudo.logradouro);
        document.getElementById('bairro').value=(conteudo.bairro);
        document.getElementById('cidade').value=(conteudo.localidade);
        document.getElementById('estado').value=(conteudo.uf);
    } 
    else {
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}
    
function pesquisacep(valor) {

    var cep = valor.replace(/\D/g, '');

    if (cep != "") {

        var validacep = /^[0-9]{8}$/;

        if(validacep.test(cep)) {

             document.getElementById('logradouro').value="...";
            document.getElementById('bairro').value="...";
            document.getElementById('cidade').value="...";
            document.getElementById('estado').value="...";
           
            var script = document.createElement('script');

            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

            document.body.appendChild(script);

        } 
        else {
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } 
    else {
        limpa_formulário_cep();
    }
}


//Comunicação

function cadastrarCandidato(event) {
   
    /**
	 * This prevents the default behaviour of the browser submitting
	 * the form so that we can handle things instead.
	 */
    event.preventDefault();

    console.log('inicio da funcao');

    const formElement = document.getElementById('formulario');

    /**
     * This takes all the fields in the form and makes their values
     * available through a `FormData` instance.
     * 
     * @see https://developer.mozilla.org/en-US/docs/Web/API/FormData
     */
    var formData  = new FormData(formElement);

    const plainFormData = Object.fromEntries(formData.entries());
	const formDataJsonString = JSON.stringify(plainFormData);

    fetch('https://desafiogamabackend.herokuapp.com/register', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: formDataJsonString,
    })
    .then(function (response) {
        console.log(response);

        if (response.status == 200) {
            alert("Cadastrado com sucesso!");
        } else if (response.status == 501) {
            alert("CPF já cadastrado!");
        } else {
            alert('Algo de errado aconteceu ao tentar cadastrar seu currículo.');
        }

        console.log('cheguei até aqui');
    });

    console.log('cheguei ao final');

    return false;


}

const form = document.getElementById('formulario');
form.addEventListener('submit', cadastrarCandidato);

