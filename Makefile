de := docker exec crm-php
sy := $(de) php bin/console

.PHONY: help
help: ## Affiche cette aide
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.PHONY: up
up: ## up containers
	docker-compose up -d --build

.PHONY: reset
reset: ## Delete all volumes and all images
	docker volume rm $$(docker volume ls -q) && docker rmi $$(docker images -q) 

.PHONY: install
install: ## Installer les dépendances symfony
	$(de) composer install

.PHONY: migrate
migrate: ## exécuter les migrations
	$(sy) d:m:m -q

.PHONY: fixtures
fixtures: ## exécuter les fixtures
	$(sy) d:f:l -q

.PHONY: npm-start
npm-start: ## lancer le front React
	$(sy) d:f:l -q

.PHONY: clear
clear: ## clear le cache Symfony
	$(sy) cache:clear

.PHONY: init
init: up install migrate fixtures npm-start