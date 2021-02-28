from flask import Flask
from pages.login.login import login
from pages.be.be import be

###### App setup
app = Flask(__name__)
app.config.from_pyfile('settings.py')
# add some comments
###### Pages
## Login


app.register_blueprint(login)
app.register_blueprint(be)

# Routes


#app.register_blueprint(be)
#
# ## Solution
# from pages.Solution.Solution import Solution
#
# app.register_blueprint(Solution)
#
#
# ## Survey
# from pages.Survey.Survey import Survey
#
# app.register_blueprint(Survey)
#
#
# ## Task
# from pages.Task.Task import Task
#
# app.register_blueprint(Task)
#
#
# ## TermsOfUse
# from pages.TermsOfUse.TermsOfUse import TermsOfUse
#
# app.register_blueprint(TermsOfUse)
#
# ## Thanks
# from pages.Thanks.Thanks import Thanks
#
# app.register_blueprint(Thanks)
#
# ## Login
# from pages.login.Login import Login
# app.register_blueprint(Login)
#
# ## Video
# from pages.Video.Video import Video
# app.register_blueprint(Video)
#
#
# ## Page error handlers
# from pages.Error.Error import Error
# app.register_blueprint(Error)
#

if __name__ == '__main__':
    app.run()

#must return for heroku two rows up