from django.shortcuts import HttpResponse, render
from numpy import append
from rest_framework.views import APIView
from rest_framework.response import Response
from django.core.files import File
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import JSONRenderer, TemplateHTMLRenderer
import json
from django.http import JsonResponse
from django.middleware.csrf import get_token

# Create your views here.
users = [
            {'name':'Vedant Dhenge','language':'python'},
            {'name':'Deep Korde','language':'C'},
            {'name':'Apparao Chincholkar','language':'Java'},
            {'name':'Laukeek Korde','language':'python'},
            {'name':'Neeraj Shrimanwar','language':'python'}
        ]

@api_view(('GET',))
@renderer_classes((TemplateHTMLRenderer, JSONRenderer))
def get_kidney_cols_list(request):
    columns_list = []
    # f = open("D:/Multiple Deases Prediction/MDP_React_Django/react_django_app/core/txtfiles/kidney_columns_list.txt",'r')
    # print(f.read())
    with open("D:/Multiple Deases Prediction/MDP_React_Django/react_django_app/core/txtfiles/kidney_columns_list.txt",'r') as f:
        read = f.read().split("\n")
        for i in read:
            if((i != 'id') and (i != 'classification') and (i != '')):
                print(i)
                columns_list.append(i)
            
        print(columns_list)
    return Response(json.dumps(columns_list))

def post_diabetes_data(request):
    if request.method=="POST":
        data = request.body
        
        print(json.loads(data))
        response = {"success":True}
    else:
        response = {"success":False}
    return JsonResponse(response)

# @api_view(['POST'])
# def post_heart_data(request):
#     if request.method=="POST":
#         print(request.data)
#     return Response("Data Got")

def post_heart_data(request):
    if request.method=="POST":
        print(json.loads(request.body))
    return JsonResponse({"success":True})

def post_kidney_data(request):
    if request.method=="POST":
        print(json.loads(request.body))
    return JsonResponse({"success":True})

def post_parkinsons_data(request):
    if request.method=="POST":
        print(json.loads(request.body))
    return JsonResponse({"success":True})

def csrf(request):
    print("Csrf is requesteed")
    return JsonResponse({'csrfToken':get_token(request)})

def ping(request):
    return JsonResponse({'result': 'OK'}) 

class ReactView(APIView):

    def get(self,request):
        print("Get Request by user")
        return Response(users)

