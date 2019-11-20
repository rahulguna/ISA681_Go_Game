# go_game
A simple game of Obstruction created to explore Django + Django Channels + ReactJS
Blog Post and Tutorial at: [http://www.codyparker.com/django-channels-with-react](http://www.codyparker.com/django-channels-with-react)

## Requirements

* Django >= 1.9
* [Django Channels](https://github.com/django/channels)
* [Django Rest Framework](http://www.django-rest-framework.org/)
* [Django Webpack Loader](https://github.com/owais/django-webpack-loader)
* Node & Node Package Manager

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
```
npm install
```
```
npm install webpack@2.7.0 --save-dev
```
```
python3 manage.py migrate
```

## Run the server
```
python3 manage.py runserver 8080
```

## Run the client (On second terminal)
```
npm run webpack
```
