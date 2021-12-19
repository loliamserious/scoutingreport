from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from ReportApp.models import Reports
from ReportApp.serializers import ReportSerializer

@csrf_exempt
def reportApi(request,id=0):
    if request.method=='GET':
        reports = Reports.objects.all()
        reports_serializer = ReportSerializer(reports,many=True)
        return JsonResponse(reports_serializer.data,safe=False)
    elif request.method=='POST':
        report_data = JSONParser().parse(request)
        reports_serializer = ReportSerializer(data=report_data)
        if reports_serializer.is_valid():
            reports_serializer.save()
            return JsonResponse("Added Successfully!",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=='PUT':
        report_data = JSONParser().parse(request)
        report = Reports.objects.get(ReportId=report_data['ReportId'])
        report_serializer = ReportSerializer(report,data=report_data)
        if report_serializer.is_valid():
            report_serializer.save()
            return JsonResponse("Updated Successfully!",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        report = Reports.objects.get(ReportId=id)
        report.delete()
        return JsonResponse("Deleted Successfully",safe=False)

@csrf_exempt
def reportDetailApi(request,id=0):
    if request.method=='GET':
        report = Reports.objects.get(ReportId=id)
        report_serializer = ReportSerializer(report,many=False)
        return JsonResponse(report_serializer.data,safe=False)