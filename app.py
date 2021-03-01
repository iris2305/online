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