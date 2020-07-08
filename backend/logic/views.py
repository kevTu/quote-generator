from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.renderers import TemplateHTMLRenderer
import requests
import random


class HomeView(APIView):
    
    def get(self, request):
        # tmp = {'text': 'This is a cool story.', 'author': 'Joe Yeager'}
        url = "https://type.fit/api/quotes"
        result = requests.get(url).json()
        rand = random.randint(0, len(result))
        #if not result[rand].author:
        #    result[rand].author = "Unknown"
        return Response(result[rand], status=status.HTTP_200_OK)

        
