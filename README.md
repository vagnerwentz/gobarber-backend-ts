<div align="center">
  <img src="https://github.com/vagnerwentz/gobarber-backend-ts/blob/master/.github/logo.svg" alt="Logo" />
</div>


### How to configure the machine to run 
```bash
# First you need to clone the project to your machine.
$ git clone https://github.com/vagnerwentz/gobarber-backend-ts.git

# Access the file where you cloned. Open the terminal and write the command below to install de packages.
yarn
```

### Dbeaver 🐿️
Dbeaver it is the program that I used to see my database.
[Dbeaver](https://dbeaver.io/)

### Creating the containers 🐋
```
docker run --name NAME -e POSTGRES_PASSWORD=PASSWORD -p 5432:5432 -d postgres

  # To on your container, open the terminal and write.
  docker container start NAME

  # Open ormconfig.json and configure your database from type to database.
  {
    "type": "",
    "host": "",
    "port": ,
    "username": "",
    "password": "",
    "database": "",
    "entities": [
      "./src/models/*.ts"
    ],
    "migrations": [
      "./src/database/migrations/*.ts"
    ],
    "cli": {
      "migrationsDir": "./src/database/migrations"
    }
  }

  # You need to generate the migrations.
  yarn typeorm migration:run
```

### Running the project
```bash
  # Write the command below to run the project.
  yarn dev:server
```
