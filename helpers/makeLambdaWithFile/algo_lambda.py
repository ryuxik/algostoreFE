import json
import boto3
import datetime
import numpy as np
import example

def myconverter(o):
    if isinstance(o, datetime.datetime):
        return o.__str__()

def handler(event, context):
    print(np.random.randint(0,10))
    return {
        'statusCode': 200,
        'body': json.dumps({
            'key4' : np.random.randint(0,10),
            'key5' : example.rand2()
        }),
    }
