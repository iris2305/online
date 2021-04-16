# bring in python files

from flask import Flask
from pages.login.login import login
from pages.be.be import be
from pages.instructions.instructions import instructions
from pages.termsofuse.termsofuse import termsofuse
from pages.solution.solution import solution
from pages.survey.survey import survey
from pages.video.video import video
from pages.thanks.thanks import thanks
from pages.demo.demo import demo


###### App setup
app = Flask(__name__, static_url_path='/static')
app.config.from_pyfile('settings.py')
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0


###call navigation blueprints

app.register_blueprint(login)
app.register_blueprint(instructions)
app.register_blueprint(solution)
app.register_blueprint(survey)
app.register_blueprint(thanks)
app.register_blueprint(video)
app.register_blueprint(be)
app.register_blueprint(demo)
app.register_blueprint(termsofuse)

#start app in heroku

@app.after_request
def add_header(response):
    # response.cache_control.no_store = True
    response.headers['Cache-Control'] = 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0, max-age=0'
    response.headers['Pragma'] = 'no-cache'
    response.headers['Expires'] = '-1'
    return response

if __name__ == '__main__':
    app.run()
