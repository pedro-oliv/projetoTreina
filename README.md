# 📝 projetoTreina

Este é um projeto de um site formador de currículos, ele foi feito com React para o Front End e Spring Boot para Back End, em sua execução ele vai receber informações como identificação, formação, experiencia e informações adicionais que você colocar na página de edição e vai salva-las em um banco de dados, depois você poderá acessar esses dados todos arrumados e formatados para visualização na página de exibição.

### 📂 Como clonar o repositório

Para interagir com o projeto você vai precisar clonar o repositório:

1. Crie uma pasta dedicada.
2. Depois de criar a pasta vá para o terminal dentro dessa pasta na sua IDE favorita e coloque o seguinte comando:

```
git clone https://github.com/pedro-oliv/projetoTreina.git
```

Agora você clonou o repositório na sua máquina e já pode começar a usar!

## 🖥️ SpringAPI

Este é o Back End do projeto que vai interagir diretamente com o banco de dados e vai tratar dos dados como requisitado da parte do Front End.

### 🔧 Pré-Requisitos

- Java 17 ou maior
- Maven 3.5 ou maior
- Sua IDE de escolha
  
### 🚀 Como rodar
Para rodar o projeto você vai precisar:

- Iniciar um servidor com o MySQL com seu aplicativo de escolha e deixar a conexão como localhost, crie o usuário treina com a senha treina para a API acessar.
- Configurar o Java e o Maven corretamente, instalando e definindo suas váriaveis de ambiente.
- Quando os anteriores estiverem feitos você pode rodar o seguinte comando:

Windows:
```
mvnw spring-boot:run
```
Linux:
```
./mvnw spring-boot:run
```
Caso resultar em um erro de permissão no Linux certifique-se de usar o seguinte código:
```
chmod +x mvnw
```
Para testar o projeto você pode fazer requests com, por exemplo, o ThunderClient (extensão do VSCode) ou aplicativos como Postman.

## 🎨 FrontEnd

Esta é a parte que vai interagir diretamente com o usuário com uma interface compreensível que vai fazer solicitações a API que se comunica com o Back End para manipular os dados do usuário. Ele usa as dependencias: `react-bootstrap`, `react-icons`, `axios`, `html2canvas`, `jsPDF`, `react-router-dom` e `react-dom`

### 📸 Preview


### 🔧 Pré-Requisitos

- npm
- Node.js (preferencialmente alguma versão v22.00)
- IDE de sua escolha

### 🚀 Como rodar

Para rodar esse projeto é só seguir os comandos a seguir:

1. Na pasta do projeto use o seguinte comando no terminal:

```
cd frontend
```

2. A seguir você vai usar o seguinte comando para instalar as dependencias do projeto, sem elas o projeto não roda!

```
npm install
```
- Caso alguma dependencia não seja instalada corretamente você pode instalar cada uma usando o comando `npm install` com as dependencias listadas anteriormente, caso necessário.

3. Agora é só rodar o projeto usando:

```
npm run dev
```

Para testar você pode interagir com todos os campos para gerar seu próprio currículo.

## 🎉 Muitos agradecimentos!
