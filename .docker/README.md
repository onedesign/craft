# Docker Configuration for Craft

## Containers

The directories in `.docker/` align with the containers defined in `docker-compose.yml`.

### `mysql`

- `sql_mode.cnf` - Sets the MySQL server config expected by Craft

### `web`

- `php-craft.ini` - PHP ini configuration specific for Craft
- `vhosts-std-logging.conf` - Apache config to log all output to docker-compose output

#### hooks

These are scripts that run when the container starts up.

- `sendmail_setup` - Creates a dummy sendmail script in order to log all emails to the docker-compose output
