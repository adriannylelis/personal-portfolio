# Define a imagem base
FROM node:16

# Copia o arquivo app.yaml para o diretório de trabalho
COPY app.yaml .

# Copia os arquivos da aplicação para o diretório de trabalho
COPY . .

# Instala as dependências
RUN npm install

# Especifica o comando de execução da aplicação
CMD [ "npm", "start" ]
