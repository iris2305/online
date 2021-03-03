from flask import Blueprint, render_template
video = Blueprint('video', __name__, static_folder='static', static_url_path='/video',url_prefix='/video',
                 template_folder='templates')


# Routes
@video.route('/<id>')
def index(id):
    return render_template('video.html')

