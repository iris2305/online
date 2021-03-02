from flask import Blueprint, render_template
survey = Blueprint('survey', __name__, static_folder='static', static_url_path='/survey',
                     template_folder='templates')


# Routes
@survey.route('/')
def index():
    return render_template('survey.html')
