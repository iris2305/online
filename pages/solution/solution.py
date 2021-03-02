from flask import Blueprint, render_template
solution = Blueprint('solution', __name__, static_folder='static', static_url_path='/solution',
                         template_folder='templates')


# Routes
@solution.route('/')
def index():
    return render_template('solution.html')
