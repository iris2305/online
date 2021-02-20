from flask import Flask

###### App setup
app = Flask(__name__)
app.config.from_pyfile('settings.py')
# add some comments
###### Pages

## login
from pages.login.login import login
app.register_blueprint(login)
