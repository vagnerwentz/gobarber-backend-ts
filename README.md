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
docker run --name mongodb -p 27017:27017 -d -t mongo
docker run --name redis -p 6379:6379 -d -t redis:alpine

  # To on your container, open the terminal and write.
  docker container start NAME

  # Open ormconfig.json and configure your database from type to database.
  {
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "docker",
    "database": "gostack_gobarber",
    "entities": [
      "./src/modules/**/infra/typeorm/entities/*.ts"
    ],
    "migrations": [
      "./src/shared/infra/typeorm/migrations/*.ts"
    ],
    "cli": {
      "migrationsDir": "./src/shared/infra/typeorm/migrations"
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
