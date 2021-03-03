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


    query = '''
        select v1.url ,v2.url ,v3.url  from students s 
        join "sequence" s2 on s.sequence_id  = s2.sequence_id 
        join video v1 on v1.video_id  = s2.video1_id 
        join video v2 on v2.video_id  = s2.video2_id 
        join video v3 on v3.video_id  = s2.video3_id 
        where s.studentid  = '{0}'
    '''
    sql = query.format(code)

    connection = psycopg2.connect(user=settings.DB['user'], password=settings.DB['password'],
                                  host=settings.DB['host'], port=settings.DB['port'],
                                  database=settings.DB['database'])
    cursor = connection.cursor()
    cursor.execute(sql)
    records = cursor.fetchall()

    if len(records) == 0:
        return jsonify(data)

    record = records[0]

    videos = [record[0], record[1], record[2]]

    questions = []

    data = {'videos': videos, 'questions': questions}

    return jsonify(data)


@be.route('/be_post', methods=['POST'])
def be_post():
    data = request.get_json()
    return jsonify(data)


@be.route('/feedback', methods=['POST'])
def feedback():
    data = request.get_json()
    query = '''
        INSERT INTO public.survay
        (studentid, video_id, ans1, ans2, ans3, ans4)
        VALUES('{0}', {1}, {2}, {3}, {4}, 0);
    '''
    sql = query.format(data["user_code"], data["video_index"], data["question1"], data["question2"], data["question3"])
    connection = psycopg2.connect(user=settings.DB['user'], password=settings.DB['password'],
                                  host=settings.DB['host'], port=settings.DB['port'],
                                  database=settings.DB['database'])
    cursor = connection.cursor()
    cursor.execute(sql)
    connection.commit()
    return 'ok'
