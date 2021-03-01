from flask import Blueprint, render_template, redirect, url_for, session

# login blueprint definition
termsofuse = Blueprint('termsofuse', __name__, static_folder='static', static_url_path='/termsofuse',url_prefix='/termsofuse',
                     template_folder='templates')


# Routes
@termsofuse.route('/')
def index():
    return render_template('termsofuse.html')
