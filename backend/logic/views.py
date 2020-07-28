from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.renderers import TemplateHTMLRenderer
import requests
import random


class RandomView(APIView):
    
    def get(self, request):
        print("THIS IS RANDOM VIEW")
        url = "https://type.fit/api/quotes"
        result = requests.get(url).json()
        rand = random.randint(0, len(result))
        if result[rand]["author"] is None:
            result[rand]["author"] = "Unknown"
        return Response(result[rand], status=status.HTTP_200_OK)

class TagView(APIView):
    
    def get(self, request):
        print("THIS IS TAG VIEW w/ TAG:", request.GET['type'])
        url = "https://type.fit/api/quotes"
        result = requests.get(url).json()
        rand = random.randint(0, len(result))
        if result[rand]["author"] is None:
            result[rand]["author"] = "Unknown"
        return Response(result[rand], status=status.HTTP_200_OK)

        
