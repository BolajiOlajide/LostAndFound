[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# LostAndFound Application

Due to the recent events happening around us. We've decided to develop a full stack web application that helps to report misplaced items in the `EPIC TOWER`.

This repository contains two applications:

1. A [React app](/web-client) that displays information about the missing items or items that have been found by fellows or staffs at Andela.
See deployed at ...
2. A [Django server app](/server) that assists the React app by providing data via a REST API.
See deployed at ...

## React app

Source code located under `/client`. This React app is set up with [Webpack](https://webpack.github.io/) and
[Express](http://expressjs.com/) so that the React components are rendered in the server side.

#### Getting started
1. `npm install`: install app dependencies.
2. Make sure the companion API app is running at`http://localhost:8000/`
3. `npm start`: start the dev server at `http://localhost:3000/`

#### Deployment
This app can be deployed on AWS.

## Django server app

Source code located under `/server`. This Django API provides data such as a list of items (both missing and found) and the owners through a REST API. It also provides an admin panel that allows adding, deleting and amending data with ease. It's implemented using [Django REST Framework](http://www.django-rest-framework.org/).

#### Getting started
* Create a Python virtual environment under `/server`. You can follow [this guide](http://docs.python-guide.org/en/latest/dev/virtualenvs/).
* Set up the Django settings environment variable: `export DJANGO_SETTINGS_MODULE=lostandfound.settings`. To avoid having to do this every time you can add this line to the `activate` script file located in your virtual environment `env/bin/activate`
* Activate the environment: `source env/bin/activate`
* Install dependencies: `pip install -r requirements.txt`
* Now you're ready to run the dev server: `python manage.py runserver`

#### Testing
This Django project contains test for all endpoints. You can run them with `python manage.py test`.

#### Deployment
This app can be deployed on AWS as a Django application. The following **environment variables** are expected:

* `DJANGO_SETTINGS_MODULE`: This must point to the prod settings file `lostandfound_prod.settings`
* `DJANGO_SECRET_KEY`: A random key used by Django. More info [here](https://docs.djangoproject.com/en/1.9/ref/settings/#std:setting-SECRET_KEY).
* `DATABASE_URL`: Pointing to a PostgreSQL database.

An AWS bucket is required to store media files. You can follow [this tutorial](https://www.caktusgroup.com/blog/2014/11/10/Using-Amazon-S3-to-store-your-Django-sites-static-and-media-files/) to create an AWS bucket with the right permissions. Once that is done, you must point Django to your AWS bucket by adding these three env variables:

* `AWS_ACCESS_KEY_ID`
* `AWS_SECRET_ACCESS_KEY`
* `AWS_STORAGE_BUCKET_NAME`

## Contributors

**Olajide Bolaji E.** - Software Developer at Andela

**Koya Adegboyega** - Software Developer at Andela

**Inumidun Amao** - Software Developer at Andela

## Acknowledgements

Thanks to the organizers of the `Andela Benchers Challenge`.
