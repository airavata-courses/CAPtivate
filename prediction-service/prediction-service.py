from kafka import KafkaConsumer
import time

consumer = KafkaConsumer(
    'test',
     bootstrap_servers=['localhost:9092'],
     value_deserializer=lambda x: x.decode('utf-8'))

while True:
    time.sleep(0.5)
    m = consumer.poll()
    if bool(m):
        print(m)
        
