from rest_framework.routers import DefaultRouter
from .views import ApplicationViewset,DocumentViewset

router =DefaultRouter()
router.register('document',DocumentViewset)
router.register('application',ApplicationViewset)

urlpatterns=router.urls