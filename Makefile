db:
	docker-compose build
du:
	docker-compose up -d
de:
	docker-compose exec -u root frontend bash
due:
	docker-compose up -d
	docker-compose exec -u root frontend bash
dd:
	docker-compose down