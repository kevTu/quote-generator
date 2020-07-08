from django.test import TestCase

import requests

# Create your tests here.
resp = requests.get('https://type.fit/api/quotes')
if resp.status_code != 200:
    # This means something went wrong.
    print('ERROR')
for i in resp.json():
    print(i)