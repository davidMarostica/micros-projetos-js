# 📷 Gerador de QR Code

Este é um projeto simples e funcional desenvolvido com **HTML, CSS e JavaScript** que permite ao usuário gerar QR Codes a partir de qualquer texto ou link digitado. O QR é gerado dinamicamente utilizando a API pública do [QRServer](https://goqr.me/api/).

---

## 🧩 Funcionalidades

- Geração instantânea de QR Code com base no texto digitado.
- Suporte ao botão "Enter" para gerar o código sem clicar.
- Limpeza automática da área do QR quando o campo é apagado.
- Exibição do QR Code diretamente na interface.
- Feedback visual no botão durante o processo de geração.

---

## 🛠 Tecnologias utilizadas

- **HTML5** – Estrutura da página.
- **CSS3** – Estilização e layout responsivo.
- **JavaScript (ES6+)** – Lógica de geração e manipulação do DOM.
- **API QRServer** – Geração dos QR Codes via URL.

---

## Estrutura do projeto

gerador_qr_code/ │ ├── index.html # Página principal ├── README.md # Documentação do projeto │ ├── css/ │ └── styles.css # Estilos visuais │ ├── js/ │ └── scripts.js # Lógica em JavaScript │ └── img/ └── qrcode.png

---

## Como usar

1. Clone ou baixe este repositório.
2. Abra o arquivo `index.html` em qualquer navegador moderno.
3. Digite um texto ou link no campo de entrada.
4. Clique em **Gerar QR Code** ou pressione **Enter**.
5. O QR Code será exibido automaticamente.

---

## Exemplo de uso

Se o usuário digitar:

O sistema exibirá um QR Code que, ao ser escaneado, abrirá o site do GitHub.

---

## Aprendizados aplicados

- Manipulação de eventos (`click`, `keydown`, `keyup`).
- Atualização dinâmica de atributos (`src`) e classes (`classList`).
- Integração com APIs externas.
- Estruturação de projeto web com separação de responsabilidades.

---

## Autor

Projeto desenvolvido por **David Aparecido da Silva** como prática de desenvolvimento web e integração com APIs externas.

---

## 📎 Licença

Este projeto está sob a licença **MIT**. Sinta-se livre para usar, modificar e compartilhar.
