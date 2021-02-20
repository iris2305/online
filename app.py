from flask import Flask

###### App setup
app = Flask(__name__)
app.secret_key = 'a72389dda4d674'
app.config.from_pyfile('settings.py')

###### Pages
## Login
@app.route('/')
def login():
    return render_template('login.html', name=name)
