$(document).ready(function() {
    // Seletor para o botão "Buscar" com base na classe CSS (classe do botão)
    $("#search-button").click(function(event) {
        event.preventDefault(); // Prevenir o comportamento padrão do formulário (recarregar a página)

        // Obter o valor do campo de busca
        var searchTerm = $(".search-box input[type='search']").val().trim();

        if (searchTerm === "") {
            alert("Por favor, digite algo para pesquisar.");
        } else {
            searchAndHighlight(searchTerm); // Chama a função de pesquisa
        }

        // Exemplo de alerta com o termo de pesquisa (remova isso em sua implementação real)
        //alert("Termo de pesquisa: " + searchTerm);
    });

    // Função para pesquisar e destacar o texto na página
    function searchAndHighlight(searchText) {

        $(".highlighted").removeClass("highlighted");
        var bodyText =$("body").html(); // Obtém o conteúdo HTML da página

        /*
                    A função `RegExp` em JavaScript pode receber diferentes parâmetros para personalizar a criação de expressões regulares. Aqui estão os principais parâmetros que você pode usar:
                    1. **Padrão (Pattern)**: Este é o padrão de texto que você deseja buscar na string. Ele pode ser passado como uma string diretamente ou como outra expressão regular.
                    Exemplo:
                    ```javascript
                    var regex = new RegExp("abc"); // Como string
                    var outraRegex = /abc/; // Como expressão regular literal
                    ```
                    2. **Flags (Sinalizadores)**: Flags são indicadores que modificam o comportamento da expressão regular. Elas são passadas como uma string como o segundo argumento da função `RegExp`. As flags mais comuns incluem:

                    - `"g"` (global): Encontra todas as correspondências na string, não apenas a primeira.
                    - `"i"` (insensitive): Torna a busca insensível a maiúsculas e minúsculas.
                    - `"m"` (multiline): Permite que a expressão regular corresponda a múltiplas linhas na string.
                    - `"s"` (dotAll): Permite que o ponto (`.`) corresponda a qualquer caractere, incluindo quebras de linha.
                    - `"u"` (unicode): Habilita o suporte a Unicode para a expressão regular.
                    - `"y"` (sticky): Realiza uma correspondência "sticky", que começa na posição atual da string.

                    Exemplo:
                    ```javascript
                    var regex = new RegExp("abc", "gi"); // Com flags global e insensitive
                    ```
                    3. **Parâmetros Combinados**: Você pode combinar os parâmetros acima para criar expressões regulares personalizadas para atender às suas necessidades. Por exemplo, `new RegExp("abc", "gim")` criaria uma expressão regular global, insensível a maiúsculas e minúsculas e multilinhas.
                    4. **Objeto RegExp Existente**: Você pode criar uma nova expressão regular com base em outra expressão regular já existente, copiando suas propriedades e modificando-as conforme necessário.
                    Exemplo:
                    ```javascript
                    var regexExistente = /abc/gi;
                    var novaRegex = new RegExp(regexExistente, "m");
                    ```
                    5. **Construtor Literal**: Em JavaScript, você também pode criar expressões regulares usando a sintaxe literal (por exemplo, `/abc/gi`) em vez de usar o construtor `RegExp`. Isso é mais comum, especialmente para expressões regulares fixas.
                    Exemplo:
                    ```javascript
                    var regexLiteral = /abc/gi; // Expressão regular literal
                    ```
                    6. **Caracteres de Escape**: Lembre-se de escapar caracteres especiais (por exemplo, `.` ou `*`) com uma barra invertida (`\`) dentro do padrão, caso você queira que eles correspondam literalmente.
                    Exemplo:
                    ```javascript
                    var regexPonto = /\./; // Corresponde a um ponto literal
                    ```
                    Esses são os principais parâmetros e técnicas que você pode usar ao criar expressões regulares em JavaScript. Eles oferecem flexibilidade para personalizar suas buscas e manipulações de texto de acordo com suas necessidades específicas.        
        */

        // Cria uma expressão regular com a pesquisa e a flag "i" para ignorar maiúsculas e minúsculas
        var regex = new RegExp(searchText, "gi");

        // Substitui todas as ocorrências da pesquisa com marcações de destaque
        var highlightedText = bodyText.replace(regex, '<span class="highlighted">$&</span>');

        // Atualiza o conteúdo HTML da página com o texto destacado
        $("body").html(highlightedText);

        // Role a página para a primeira ocorrência destacada
        var firstOccurrence = $("span.highlighted:first");
        if (firstOccurrence.length) {
            $("html, body").animate({
                scrollTop: firstOccurrence.offset().top
            }, 500);
        }
    }

    // Ativar o alerta de aviso como um plugin Bootstrap
    $(function () {
        $('[data-toggle="alert"]').on('click', function () {
            $('[role="alert"]').
            alert('Este é um alerta de aviso.');
        });
    });

    // Ativar o popover como um plugin Bootstrap
    $(function () {
        $('[data-toggle="popover"]').popover();
    });

    var exampleModal = document.getElementById('exampleModal')
    exampleModal.addEventListener('show.bs.modal', function (event) {
      // Button that triggered the modal
      var button = event.relatedTarget
      // Extract info from data-bs-* attributes
      var recipient = button.getAttribute('data-bs-whatever')
      // If necessary, you could initiate an AJAX request here
      // and then do the updating in a callback.
      //
      // Update the modal's content.
      var modalTitle = exampleModal.querySelector('.modal-title')
      var modalBodyInput = exampleModal.querySelector('.modal-body input')
    
      modalTitle.textContent = 'New message to ' + recipient
      modalBodyInput.value = recipient
    })
    
    var toastElList = [].slice.call(document.querySelectorAll('.toast'))
    var toastList = toastElList.map(function (toastEl) {
      return new bootstrap.Toast(toastEl, option)
    })    
});
