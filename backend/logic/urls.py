from django.urls import path, re_path
from .views import RandomView, TagView

urlpatterns = [
    path('random/', RandomView.as_view()),
    re_path(r'^tag/$', TagView.as_view()),
]