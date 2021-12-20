# Scouting Report Entry Application
A web application for entering and retrieving basic scouting reports on players.

This is a standard CRUD web application.

I utilize:
* `Python` for backend and `Django` as the web framework
* `React` as the JS framework
* `Cloud-based Heroku PostgresSQL` for Database
* `gunicon` as the wsgi server
* `virtualenv` emcompasses everything

All of the configutations are in this repository. Build instructions is below.


## Feature

* Add new scouting report based on the type of the player
* Browse all scouting reports
* View the detailed scouting report
* Delete the scouting report

## Build Locally
1. Install a virtualenv and set up a project root where ever you want.
2. Download the repository:

git clone https://github.com/loliamserious/scoutingreport.git

3. Install all of the required python packages which this server uses:

pip install -r requirements.txt

4. Finally, run the development server:

python manage.py runserver