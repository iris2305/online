from flask import Blueprint, render_template
thanks = Blueprint('thanks', __name__, static_folder='static', static_url_path='/thanks',url_prefix='/thanks',
                  template_folder='templates')


# Routes
@thanks.route('/')
def index():
    return render_template('thanks.html')

