# Define variables
DOCKER_COMPOSE = docker-compose
PHP_CONTAINER = codeigniter_react_app
DB_CONTAINER = codeigniter_react_mysql

# Default target
all: help

# Start services
up:
	$(DOCKER_COMPOSE) up -d

# Stop services
down:
	$(DOCKER_COMPOSE) down

# Access the PHP container's shell
shell:
	$(DOCKER_COMPOSE) exec $(PHP_CONTAINER) bash

# Run Composer install
composer-install:
	$(DOCKER_COMPOSE) exec $(PHP_CONTAINER) composer install

# Run Composer update
composer-update:
	$(DOCKER_COMPOSE) exec $(PHP_CONTAINER) composer update

# Run migrations
migrate:
	$(DOCKER_COMPOSE) exec $(PHP_CONTAINER) php index.php migrate

# Clear the cache
clear-cache:
	$(DOCKER_COMPOSE) exec $(PHP_CONTAINER) ./$(SCRIPTS_DIR)/artisan.sh clear:cache

# View logs
logs:
	$(DOCKER_COMPOSE) logs -f

# Restart services
restart: down up

# Access the DB container's shell
db-shell:
	$(DOCKER_COMPOSE) exec $(DB_CONTAINER) bash

deploy:
	@cd frontend && npm run build && cd .. && vercel --prod

# Display help
help:
	@echo "Makefile commands:"
	@echo "  up                Start Docker containers"
	@echo "  down              Stop Docker containers"
	@echo "  shell             Access the PHP container's shell"
	@echo "  composer-install  Run 'composer install' inside the PHP container"
	@echo "  composer-update   Run 'composer update' inside the PHP container"
	@echo "  migrate           Run migrations inside the PHP container"
	@echo "  clear-cache       Clear the application cache"
	@echo "  logs              View logs from Docker containers"
	@echo "  restart           Restart Docker containers"
	@echo "  db-shell    			 Access the db container's shell"
	@echo "  deploy	    			 build frontend and deploy to vercel"
