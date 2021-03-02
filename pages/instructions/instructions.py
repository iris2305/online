# login blueprint definition
instructions = Blueprint('instructions', __name__, static_folder='static', static_url_path='/instructions',
                  template_folder='templates')


# Routes
@instructions.route('/')
def index():
    return render_template('instructions.html')
