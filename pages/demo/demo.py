from flask import Blueprint, render_template
demo = Blueprint('demo', __name__, static_folder='static', static_url_path='/demo', url_prefix='/demo',
                   template_folder='templates')


# Routes
@demo.route('/')
def index():
    return render_template('demo.html')
