from flask import Blueprint, render_template
video = Blueprint('video', __name__, static_folder='static', static_url_path='/video',
                 template_folder='templates')


# Routes
@video.route('/')
def index():
    return render_template('video.html')

