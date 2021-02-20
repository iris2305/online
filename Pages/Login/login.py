from flask import Blueprint, render_template, redirect, url_for, session

# login blueprint definition
login = Blueprint('login', __name__, static_folder='static', static_url_path='/login',
                     template_folder='templates')


# Routes
@login.route('/')
def index():
    return render_template('login.html')
