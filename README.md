# ODC Craft Starter

This is a starter project for Craft 3 projects at [One Design Company](https://onedesigncompany.com).

## Requirements
- [Composer >= 1.6.5](https://getcomposer.org)
- [Node >=10.8.0 / NPM >=3.10.3](https://nodejs.org/en/)

**NOTE:** We only need composer >= 1.6.5 because of the `--remove-vcs` option in the command below. If you run into an issue where Composer says something like "The "--remove-vcs" option does not exist." you're probably on an older version. Either update your composer (`composer self-update`) or run the command without the `--remove-vcs` option.

## Getting Started
Before getting too far you should set up your database and virtual host so you have all the info you need to connect to things later.

To create a project using this repo as a base, open up your favorite terminal and run:
```
composer create-project onedesign/craft-starter \
  --repository "{ \"type\": \"vcs\", \"url\": \"https://github.com/onedesign/craft-starter.git\" }" \
  --remove-vcs \
  ./project-name \
  dev-master && \
  cd project-name && \
  git init
```

That will take a little bit, and output a bunch of junk to your console. The command is doing a few things:
1. Grabbing this repo, cloning it (without history) into the `project-name` folder as well as running composer install
2. Running `npm install` in the newly created directory
3. Navigating you into the newly created directory
4. Initializing an empty git repo for the project

When `creact-project` is done doing all that, run:
```
$ ./craft setup
```

This command will ask you question about your environment (mysql vs. postgres, databse user, database password, etc.), basically it will create a `.env` file with your answers which is why you're going to want to have your database created before hand. Otherwise, it will complain that it can't connect to the database. After asking all the .env questions, it will ask if you'd like to install Craft now or later, feel free to do whichever you'd like.

If you don't want to use the setup command, just copy the `.env.example` file to a `.env` file and replace the values with your local environment configuration. Just be sure to add a random string to the `SECURITY_KEY` variable.

**NOTE:**
If you're using MAMP as your local server of choice, the above command won't work. You have two options. First, you can copy the `.env.example` file in the repo and edit values on your own (be sure to generate a security key) OR you can point the command at your active version of PHP and run it that way. On macOS that looks something like
```
$ /Applications/MAMP/bin/php/{ACTIVE_PHP_VERSION}/bin/php ./craft setup
```
Be sure to replace `ACTIVE_PHP_VERSION` in the above with the version MAMP is currently using. At the time of writing it's probably either `php7.1.12` or `php7.2.1`

### Generating a Security Key
To generate a new security key, use the Craft console command.
```sh
./craft setup/security-key
```
That will output the command to your terminal and replace the value in your .env file. 

## Front End
On the front end of things we're currently opting for [Blendid](https://github.com/vigetlabs/blendid) primarily in order to get a userful starter project up as fast as possible. If you're not familiar with Blendid you'll want to [read their wiki](https://github.com/vigetlabs/blendid/wiki) to get a better understanding of how it's put together and what you can do to customize it.

We've made a few customizations to it off the bat:
- Add [normalize.css](https://necolas.github.io/normalize.css/) to the main CSS file
- Add [sass-mq](https://github.com/sass-mq/sass-mq) for easier media queryin'
- Set our autoprefixer browsers
- Provide jQuery to all modules

## Included Plugins:
- [Craft 3 Asset Rev](https://github.com/clubstudioltd/craft3-asset-rev)
- [AWS S3 Asset Source](https://github.com/craftcms/aws-s3)
- [Typogrify](https://github.com/nystudio107/craft-typogrify)
- [Environment Label](https://github.com/TopShelfCraft/Environment-Label)

**NOTE**
Plugins are not installed or activated through this process. You'll have to go into the admin and install them after creating a project

## Environment variables

All ENV vars are documented within `.env.example`. When adding a new ENV var, be sure to add it to this file with proper comments and documentation.

## Tech Specs

Craft is a self-hosted PHP 7 application. It can connect to MySQL and PostgreSQL for content storage. See [Server Requirements](https://docs.craftcms.com/v3/requirements.html) for more details.

## Popular Resources

- **[Documentation](http://docs.craftcms.com/v3/)** – Read the official docs.
- **[Guides](https://craftcms.com/guides)** – Follow along with the official guides.
- **[#craftcms](https://twitter.com/hashtag/craftcms)** – See the latest tweets about Craft.
- **[Discord](https://craftcms.com/discord)** – Meet the community.
- **[Stack Exchange](http://craftcms.stackexchange.com/)** – Get help and help others.
- **[CraftQuest](https://craftquest.io/)** – Watch unlimited video lessons and courses.
- **[Craft Link List](http://craftlinklist.com/)** – Stay in-the-know.
- **[nystudio107 Blog](https://nystudio107.com/blog)** – Learn Craft and modern web development.
