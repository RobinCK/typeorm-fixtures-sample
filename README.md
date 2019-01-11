# TypeORM fixtures sample
Sample project for typeorm-fixtures-cli

## Requirements 
 - PostgreSQL
 - NodeJS
 - Docker
 
## up PostgreSQL on docker 
 
```bash
docker-compose -f docker-compose-postgres.yml up --build
```

## Load fixtures
```bash
npm run build
npm run fixtures

```
