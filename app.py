from flask import Flask


###### App setup
app = Flask(__name__)
app.config.from_pyfile('settings.py')

###### Pages
## Login

@app.route('/')
def Login():
    return render_template('Login.html', foo=42)
