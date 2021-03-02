from flask import Blueprint, render_template, redirect, url_for, session
instructions = Blueprint('instructions', __name__, static_folder='static', static_url_path='/instructions',
                  template_folder='templates')


# Routes
@instructions.route('/')
def index():
    return render_template('instructions.html')
