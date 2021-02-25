from flask import Blueprint, render_template, redirect, url_for, session
import psycopg2
import settings

EVENT_INSERT =  '''
INSERT INTO events_logs
(user_code, page_num, duration, last_updated)
VALUES('{0}', 2, 10, now())
on conflict on constraint events_logs_un  do update set 
duration = 20 ,last_updated = now()

'''

from psycopg2 import Error
# login blueprint definition
be = Blueprint('be', __name__,  url_prefix="/be")



# Routes
@be.route('/')
def be_index():
    connection = psycopg2.connect(user=settings.DB['user'], password=settings.DB['password'],
                                  host=settings.DB['host'], post=settings.DB['post'],
                                  database=settings.DB['database'])
    cursor = connection.cursor()
    cursor.execute(EVENT_INSERT)
    return "helo world!"

