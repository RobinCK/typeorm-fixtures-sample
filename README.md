# TypeORM fixtures sample
Sample project for [typeorm-fixtures-cli](https://github.com/RobinCK/typeorm-fixtures)

## Requirements 
 - PostgreSQL
 - NodeJS
 - Docker
 
## Up PostgreSQL on docker 
 
```bash
docker-compose -f docker-compose-postgres.yml up --build
```

## Load fixtures
```bash
npm run build
npm run fixtures

```
