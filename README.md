# Desafio Gama Academy <br />
GitHub: https://github.com/carolsens/desafiogama <br />

Página de cadastro de candidatos para a empresa JobsNET de recrutamento e seleção <br />

**Regras negócio**
1. Não pode haver 2 cadastros de candidatos com o mesmo cpf
2. Todo candidato precisará preencher os campos: CPF, Nome, Data Nascimento, Cep, Logradouro, Número, Bairro, Cidade, Email, Profissão e Celular


**Frontend** <br />
<br />
Desafio - Fase 1 - Criação da Página 
  - Apresentar a estrutura do projeto no github;
  - Landing page com formulário para preenchimento de candidatura. (Referencia formulário - link)
  - Não existe uma regra para o layout da página, use a imaginação com todos os conhecimentos adquiridos no front-end
  - Indicamos o Netlify para hospedar sua pagina gratuitamente.
    
  
Na prática: <br /> 

Tecnologias utilizadas: HTML, CSS, Bootstrap, Javascript puro (Vanilla JS)  <br /> 
Hospedagem: Netlify  <br /> 
Deploy: deploy automático (CD) com o código do GitHub  <br /> 
Disponível em: https://loving-joliot-250f9a.netlify.app/frontend/ <br /> 

**Backend** <br /> 
 <br />
Desafio - Fase 2 - Domínio - Modelagem de Dados <br /> 

  - Cadastro de candidatos com os campos: Id, Nome, Data Nascimento, Endereço {cep, logradouro, numero, bairro, cidade e estado}, Telefone, Email e Profissão e demais campos mencionados na imagem de ilustração de formulário de candidatos.
  - Para a conclusão do cadastro, consultar o seu endereço pelo CEP informado (Consultar a API VIA Cep) NOTA: O sistema deverá utilizar de algum client API para buscar um endereço do serviço via cep conforme link: https://viacep.com.br/ws/{SEU_CEP}/json/

Na prática: <br /> 

Tecnologias utilizadas: Node.JS  <br /> 
Banco de dados: MongoDB  <br /> 
Hospedagem: Heroku  <br /> 
Deploy: deploy automático (CD) com o código do GitHub  <br /> 
Disponível em: https://desafiogamabackend.herokuapp.com/ <br />

Fase 3 - Integração entre a Página de Formulário e o Back-end <br />

  - Disponibilizar uma API Rest com a funcionalidade de cadastro de candidatos armazenando em um banco de dados.
  - Disponibilizar a documentação dos recursos Web Services REST - Uso do Swagger.

Na prática: <br />

Documentação da API - Swagger: https://desafiogamabackend.herokuapp.com/api-docs/ <br />


