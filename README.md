This repository contains a web-based two player game of go developed using Django and React. 

## Documents
[Report.pdf](https://github.com/rahulguna/ISA681_Go_Game/blob/master/Assurance_Report.pdf) | 
[GameDemo.mp4](https://youtu.be/WdWUqL9JxZI)

## Requirements

* Django = 2.2.8
* [Django Channels](https://github.com/django/channels)
* [Django Rest Framework](http://www.django-rest-framework.org/)
* [Django Webpack Loader](https://github.com/owais/django-webpack-loader)
* Node & Node Package Manager
* PostgreSQL 11.5

## Installation

First, install Python3:

```
brew install python3 // On Mac
sudo apt-get install python3 // On Ubuntu
```

Normally, pip comes with python3 if you're downloading the latest version (or any version above 3.4). If that is not the case, install pip by running the following:

```
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
python3 get-pip.py
```

Install virtualenv:
```
pip3 install virtualenv
```

## Instructions
Clone the repository
```
git clone https://github.com/rahulguna/ISA681_Go_Game.git
cd ISA681_Go_Game
```

To get the service running, run the following commands:
```
virtualenv -p `which python3` venv
```
```
source venv/bin/activate		//for linux based systems
```
```
pip3 install -r requirements.txt
```

Edit the database connection strings in the .env.example file
```
cp .env.example .env
```

```
npm install
```

```
npm install webpack@2.7.0 --save-dev
```
```
python3 manage.py migrate
```

If you get a error(ERROR: ' No module named 'django.core.urlresolvers') in handler.py file, replace the line 
```
from django.core.urlresolvers import set_script_prefix
```

with
```
from django.urls import *
```


## Run the server
```
python3 manage.py runserver 8080
```

## Run the client (On second terminal)
```
npm run webpack
```
