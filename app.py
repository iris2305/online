from flask import Flask


###### App setup
app = Flask(__name__)
app.config.from_pyfile('settings.py')

###### Pages
## Login
from pages.Login.Login import homepage
app.register_blueprint(Login)
