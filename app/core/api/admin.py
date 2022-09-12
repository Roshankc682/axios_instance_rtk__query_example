from django.contrib import admin

from api.models import Data

@admin.register(Data)
class Book(admin.ModelAdmin):
    list_display = ['id','first_name','last_name']
