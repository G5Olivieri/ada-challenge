.PHONY: clean

up: back/node_modules front/node_modules migrate.lock
	docker compose up -d

down:
	docker compose kill
	docker compose rm -f

logs:
	docker compose logs -f --tail 1000

back/node_modules:
	docker compose run --rm back sh -c "npm i"

front/node_modules:
	docker compose run --rm front sh -c "npm i"

migrate.lock:
	docker compose run --rm back sh -c "npx prisma db push"
	touch migrate.lock

clean: down
	# clean docker networks and volumes
	docker compose down -v 
	rm migrate.lock
	rm -rf back/node_modules back/dist
	rm -rf front/node_modules