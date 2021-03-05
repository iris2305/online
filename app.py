# bring in python files

from flask import Flask
from pages.login.login import login
from pages.be.be import be
from pages.instructions.instructions import instructions
from pages.termsofuse.termsofuse import termsofuse
from pages.solution.solution import solution
from pages.survey.survey import survey
from pages.demo.task import task
from pages.video.video import video
from pages.thanks.thanks import thanks


###### App setup
app = Flask(__name__, static_url_path='/static')
app.config.from_pyfile('settings.py')


###call navigation blueprints

app.register_blueprint(login)
app.register_blueprint(instructions)
app.register_blueprint(solution)
app.register_blueprint(survey)
app.register_blueprint(task)
app.register_blueprint(thanks)
app.register_blueprint(video)
app.register_blueprint(be)
app.register_blueprint(termsofuse)


#start app in heroku

if __name__ == '__main__':
    app.run()

