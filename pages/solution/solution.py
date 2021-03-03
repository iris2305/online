from flask import Blueprint, render_template
solution = Blueprint('solution', __name__, static_folder='static', static_url_path='/solution',url_prefix='/solution',
                         template_folder='templates')


# Routes
@solution.route('/<video>/<sol>')
def index(video,sol):
    return render_template('solution'+sol+'.html')

@solution.route('/pre/<id>')
def presolution(id):
    return render_template('next_task.html')
