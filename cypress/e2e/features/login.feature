#language:pt

Funcionalidade: Teste da tela de Login 
    Contexto:
        Dado que acesse a pagina de autenticação do saucedemo
        
        
    Cenario: Login válido
        Quando eu digitar o usuário "standard_user"
        E a senha "secret_sauce"
        E clicar em LOGIN
        Então devo ser exibida a tela de "Products"


