from flask import Blueprint, render_template
task = Blueprint('task', __name__, static_folder='static', static_url_path='/task',url_prefix='/task',
                   template_folder='templates')


# Routes
@task.route('/')
def index():
    return render_template('task.html')
