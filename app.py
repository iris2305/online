from flask import Flask
from pages.login.login import login
from pages.be.be import be
from pages.termsofuse.termsofuse import termsofuse

###### App setup
app = Flask(__name__)
app.config.from_pyfile('settings.py')
# add some comments
###### Pages
## Login


app.register_blueprint(login)
app.register_blueprint(be)
app.register_blueprint(termsofuse)

# Routes


#app.register_blueprint(be)
#

# ## survey
# from pages.survey.survey import survey
#
# app.register_blueprint(survey)
#
#
# ## task
# from pages.task.task import task
#
# app.register_blueprint(task)
#
#
# ## termsofuse
# from pages.termsofuse.termsofuse import termsofuse
#
# app.register_blueprint(termsofuse)
#
# ## thanks
# from pages.thanks.thanks import thanks
#
# app.register_blueprint(thanks)
#

# ## video
# from pages.video.video import video
# app.register_blueprint(video)
#
#
# ## Page error handlers
# from pages.error.error import error
# app.register_blueprint(error)
#

if __name__ == '__main__':
    app.run()

#must return for heroku two rows up