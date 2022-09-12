from rest_framework.routers import DefaultRouter
from django.urls import path,include
from api import views
router = DefaultRouter()
router.register('', views.APIdata,basename='__data__')


urlpatterns = [
    path('',include(router.urls)),
]