from flask import Flask

###### App setup
app = Flask(__name__)
app.secret_key = 'a72389dda4d674'
app.config.from_pyfile('settings.py')

###### Pages
## Login
from online.Pages.Login.Tamplates import Login
app.online

