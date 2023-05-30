from rest_framework.routers import DefaultRouter
from .views import MachineViewset

router=DefaultRouter()
router.register('machine',MachineViewset)

urlpatterns=router.urls