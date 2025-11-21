# Calculadora de IMC

Uma aplicação simples em **HTML, CSS e JavaScript** para calcular o **Índice de Massa Corporal (IMC)** e exibir a classificação de acordo com os valores definidos pela Organização Mundial da Saúde (OMS).

---

## Funcionalidades

- Inserir **altura** e **peso** para calcular o IMC.
- Exibir o resultado com a **classificação** correspondente:
  - Magreza
  - Normal
  - Sobrepeso
  - Obesidade
  - Obesidade grave
- Interface amigável e responsiva.
- Botões para **calcular**, **limpar** e **voltar**.
- Tabela dinâmica com as faixas de IMC.

---

## Estrutura do Projeto

calculadora-imc ┣ css ┃ ┗ styles.css ┣ js ┃ ┗ scripts.js ┣ index.html ┗ README.md

---

## Tecnologias Utilizadas

- **HTML5** → Estrutura da página
- **CSS3** → Estilização e responsividade
- **JavaScript (ES6+)** → Lógica de cálculo e manipulação da DOM

---

## Fórmula do IMC

O cálculo é feito pela fórmula:

\[
IMC = \frac{peso}{altura^2}
\]

- **Peso** em quilogramas (kg)
- **Altura** em metros (m)

Exemplo:  
Se uma pessoa tem **70 kg** e **1,75 m**, o cálculo será:

\[
IMC = \frac{70}{1,75^2} = 22,9
\]

---

## Como usar

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/calculadora-imc.git
   ```

Estilos de Classificação

O resultado muda de cor conforme a classificação:

    🔵 Magreza → Azul

    🟢 Normal → Verde

    🟡 Sobrepeso → Amarelo

    🟠 Obesidade → Laranja

    🔴 Obesidade grave → Vermelho

Demonstração

(adicione aqui uma captura de tela da aplicação rodando)
Licença

Este projeto está sob a licença MIT. Você pode usar, modificar e distribuir livremente.
Autor

Desenvolvido por David Aparecido da silva ✨
