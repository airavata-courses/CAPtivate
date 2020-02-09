from kafka import KafkaConsumer
import time
import requests
from pymongo import MongoClient

mclient = MongoClient(port=27017)

db = mclient.foo

consumer = KafkaConsumer(
    'test',
     bootstrap_servers=['localhost:9092'],
     value_deserializer=lambda x: x.decode('utf-8'))


while True:
    m = consumer.poll()
    headers = {'token':'tlOrjLlVkdmPriWTBeKteqdOURnHqvjL'}
    url ='https://www.ncdc.noaa.gov/cdo-web/api/v2/data'
    params = {'datasetid': 'GHCND', 'locationid':'ZIP:28801', 'startdate': '2010-05-01', 'enddate': '2010-05-01'}
    if bool(m):
        _,v = m.popitem()
        # v[0].value
        r = requests.get(url, params = params, headers = headers)
        print(r.text)
        # result = db.btable.insert_one(bar)
    
