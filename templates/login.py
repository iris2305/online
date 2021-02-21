from flask import Blueprint, render_template, redirect, url_for, session

# login blueprint definition
# login = Blueprint('login', __name__, static_folder='static', static_url_path='/login',
#                      template_folder='templates')
login = Blueprint('login', __name__)

# Routes
@login.route('/')
def get_login():
    return "hello world"

@login.route('/test')
def test_login():
    return "hello test"