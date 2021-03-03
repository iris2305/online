from flask import Blueprint, render_template
survey = Blueprint('survey', __name__, static_folder='static', static_url_path='/survey',url_prefix='/survey',
                     template_folder='templates')


# Routes
@survey.route('/<id>')
def index(id):
    return render_template('survey.html')
