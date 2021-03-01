from flask import Blueprint, render_template, redirect, url_for, session,request, jsonify

import psycopg2
import settings

EVENT_INSERT =  '''
INSERT INTO events_logs
(user_code, page_num, duration,session, last_updated)
VALUES('{0}', {1}, {2},'{3}', now())
on conflict on constraint events_logs_un  do update set
duration = {2} ,last_updated = now()

'''


from psycopg2 import Error
# login blueprint definition
be = Blueprint('be', __name__,  url_prefix="/be")

@be.route('/')
def be_main():
    return "Hello"

# Routes
@be.route('/<user>/<session>/<page>/<duration>')
def be_index(user,session, page, duration):

    sql = EVENT_INSERT.format(user, page , duration, session)
    connection = psycopg2.connect(user=settings.DB['user'], password=settings.DB['password'],
                                  host=settings.DB['host'], port=settings.DB['port'],
                                  database=settings.DB['database'])
    cursor = connection.cursor()
    cursor.execute(sql)
    connection.commit()
    return "hello world!"


@be.route('/enter-user', methods=['POST'])
def enter_user():
    data = request.get_json()
    code = data["code"]
    # execute sql
    # check if user exists in data base
    # get user videos
    # get user questions
    # return relevant data if user exists
    data = {}
    videos = []
    questions = []
    for x in range(10):
        video = {}
        video['url'] = "https://ynet.co.il"
        video['id'] = x
        videos.append(video)

    data['videos'] = videos
    data['questions'] = questions
    return jsonify(data)



@be.route('/be_post', methods=['POST'])
def be_post():
    data = request.get_json()
    return jsonify(data)
