### Monter les containers
```bash
docker-compose up -d
```
### Afficher la liste des containers
```bash
docker-compose ps
```
### Stopper les containers
```bash
docker-compose down
```
### Supprimer les containers et les images
```bash
docker system prune -a
```
### Entrer dans un container
```bash
docker exec -it <container name> /bin/sh
```
### Installer symfony dans le container php
```bash
docker exec -it <container name php> /bin/sh
composer create-project symfony/skeleton .
```
### Entrer dans le container database
```bash
docker exec -it <container name database> /bin/sh
mysql --host=localhost --user=symfony --password=symfony
SHOW DATABASES;
use symfony_docker;
show tables;
```