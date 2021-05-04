build:
	docker build -t starstuff . 

run-dev:
	docker-compose up

build-production:
	docker build -t starstuff-production -f Dockerfile.production .