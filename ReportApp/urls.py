from django.conf.urls import url
from ReportApp import views


urlpatterns=[
    url(r'^$',views.reportApi),
    url(r'^([0-9]+)$',views.reportApi),
    url(r'^id?=([0-9]+)$',views.reportDetailApi),
]