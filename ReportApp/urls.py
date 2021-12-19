from django.conf.urls import url
from ReportApp import views


urlpatterns=[
    url(r'^report/$',views.reportApi),
    url(r'^report/([0-9]+)$',views.reportApi),
    url(r'^report/id?=([0-9]+)$',views.reportDetailApi),
]