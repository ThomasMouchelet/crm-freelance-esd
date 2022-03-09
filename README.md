<div style="display: flex;align-items: center;">
    <div>
        <img src="https://d31ezp3r8jwmks.cloudfront.net/P4LMkQbCoYdT6NiE8ZjETEbw" width="300px">
    </div>
    <div>
        <img src="https://api-platform.com/logo.png" width="300px">
    </div>
</div>

# Start project fast
```bash
make init
```
# Start project manualy
```bash
git clone https://github.com/ThomasMouchelet/crm-freelance-esd
docker exec crm-php php bin/console composer install
docker exec crm-php php bin/console d:m:m -q
docker exec crm-php php bin/console d:f:l -q
cd front && npm i && npm start
```

# Docker
Monter les containers
```bash
docker-compose up -d
```
Afficher la liste des containers
```bash
docker-compose ps
```
Stopper les containers
```bash
docker-compose down
```
Supprimer les containers et les images
```bash
docker system prune -a
```
Entrer dans un container
```bash
docker exec -it <container name> /bin/sh
ou
docker exec -it crm-php /bin/zsh
```
Installer symfony dans le container php
```bash
docker exec -it <container name php> /bin/sh
composer create-project symfony/skeleton .
```
Entrer dans le container database
```bash
docker exec -it <container name database> /bin/sh
mysql --host=localhost --user=symfony --password=symfony
SHOW DATABASES;
use symfony_docker;
show tables;
```

# Symfony

Créer une entitée
```bash
php bin/console make:entity
```
Générer et exécuter les migrations
```bash
php bin/console make:migration
php bin/console doctrine:migrations:migrate
```
Exécuter les fixtures
```bash
php bin/console doctrine:fixtures:load
```
Create form
```bash
php bin/console make:form
```
Create user
```bash
php bin/console make:user
```
Load fixtures
```bash
php bin/console doctrine:fixtures:load
php bin/console d:f:l
```
Clear cache
```bash
php bin/console cache:clear
```