# 🛒 PDV Solidário

> Aplicação de Ponto de Venda (PDV) e gestão simplificada idealizada para eventos beneficentes. Desenvolvida para operar em rede local com foco em extrema usabilidade para voluntários sem treinamento prévio.

---

![Ruby on Rails](https://img.shields.io/badge/Ruby_on_Rails-CC0000?style=for-the-badge&logo=ruby-on-rails&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white)
![Status](https://img.shields.io/badge/Status-Em_Desenvolvimento-orange?style=for-the-badge)

---

## 📐 Visão Geral & Arquitetura

O **PDV Solidário** resolve o gargalo de atendimento em eventos beneficentes onde há alta rotatividade de voluntários e infraestrutura limitada de internet.

* **Aplicação Autocontida:** Desenvolvido em Ruby on Rails e empacotado para execução local via arquivo único (portable server).
* **Rede Local Offline:** Funciona via servidor local e roteador local (Wi-Fi/Ethernet), dispensando conexão com a internet.
* **Tempo Real:** Utiliza **ActionCable (WebSockets)** para atualização instantânea dos pedidos entre os módulos Caixa, Cozinha e Painel do Cliente.

---

## 🖼️ Demonstração

*(Screenshots e GIFs dos módulos Caixa e Cozinha serão adicionados em breve)*

---

## 📋 Requisitos do Sistema

### 🟢 Requisitos Funcionais

* **RF-01 (Gestão de Acesso):** O sistema deve direcionar o usuário para a interface correspondente (Caixa, Cozinha ou Feedback) com base na função do dispositivo selecionada no primeiro acesso à promoção.
* **RF-02 (Sessão do Usuário):** O sistema deve armazenar as informações do voluntário e a função do dispositivo nas variáveis de sessão do navegador.
* **RF-03 (Gestão de Promoções):** O sistema deve permitir que apenas o perfil administrador crie promoções.
* **RF-04 (Configuração de Promoção):** O sistema deve permitir ao administrador definir o tipo de promoção (*Sob Demanda* ou *Produtos Prontos*), os produtos comercializados com suas variações e as formas de pagamento aceitas.
* **RF-05 (Geração de QR Code PIX):** O sistema deve gerar um QR Code PIX automático para pagamentos caso a chave seja configurada na promoção.
* **RF-06 (Registro de Pedidos no Caixa):** O sistema deve permitir registrar o nome do cliente, adicionar itens com suas variantes, incluir observações por item e selecionar o método de pagamento.
* **RF-07 (Calculadora Integrada):** O módulo do caixa deve disponibilizar uma calculadora com operações básicas para auxílio nas contas.
* **RF-08 (Encaminhamento de Pedidos):** O sistema deve registrar o pagamento e enviar o pedido para a fila da cozinha em ordem cronológica quando a promoção for do tipo *Sob Demanda*.
* **RF-09 (Painel da Cozinha):** O sistema deve exibir um painel para a cozinha com a ordem dos pedidos e o detalhamento de seus itens.
* **RF-10 (Conclusão de Pedidos na Cozinha):** O sistema deve permitir que a cozinha marque um pedido como concluído através de uma interação simplificada.
* **RF-11 (Notificação de Feedback):** O sistema deve emitir um alerta na visão de feedback do cliente assim que um pedido for concluído pela cozinha.
* **RF-12 (Relatórios):** O sistema deve permitir ao administrador a extração de relatórios de desempenho em formato Excel por promoção.

---

### ⚙️ Requisitos Não-Funcionais

* **RNF-01 (Usabilidade da Cozinha):** A interface do módulo da cozinha deve exigir o mínimo possível de interações do usuário para evitar gargalos operacionais.
* **RNF-02 (Usabilidade de Acesso):** O sistema não deve exigir um fluxo complexo de autenticação, adaptando-se à alta rotatividade dos voluntários.
* **RNF-03 (Portabilidade e Execução):** O sistema deve ser capaz de ser executado a partir de um único arquivo executável em um computador local.
* **RNF-04 (Rede Local / Distribuição):** O sistema deve atuar como um servidor acessível por múltiplos dispositivos conectados à mesma rede local.

---

## 🚀 Como Executar em Desenvolvimento

### Pré-requisitos
* **Ruby:** 4.x
* **Rails:** 8.x
* **Node:** 24.x

### Passo a Passo

1. Clonar o repositório:
   ```bash
   git clone [https://github.com/seu-usuario/pdv-solidario.git](https://github.com/seu-usuario/pdv-solidario.git)
   cd pdv-solidario
   ```

2. Instalar Dependências:
   ```bash
   bundle install
   npm install
   ```

3. Configurar Banco de Dados:
   ```bash
   bin/rails db:prepare
   ```

4. Iniciar Servidores:
   ```bash
   rails s
   vite dev
   ```