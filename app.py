from flask import Flask
from pages.login.login import login
# from pages.be.be import be
import psycopg2
import settings
#
EVENT_INSERT =  '''
INSERT INTO events_logs
(user_code, page_num, duration,session, last_updated)
VALUES('{0}', {1}, {2},'{3}', now())
on conflict on constraint events_logs_un  do update set
duration = {2} ,last_updated = now()

'''

###### App setup
app = Flask(__name__)
app.config.from_pyfile('settings.py')
# add some comments
###### Pages
## Login


app.register_blueprint(login)
# Routes
@app.route('/be/<user>/<session>/<page>/<duration>')
def be_index(user,session, page, duration):
    sql = EVENT_INSERT.format(user, page , duration, session)
    connection = psycopg2.connect(user=settings.DB['user'], password=settings.DB['password'],
                                  host=settings.DB['host'], port=settings.DB['port'],
                                  database=settings.DB['database'])
    cursor = connection.cursor()
    cursor.execute(sql)
    connection.commit()
    return "helo world!"


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