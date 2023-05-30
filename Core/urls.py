from rest_framework.routers import DefaultRouter
from .views import DisionViewset



router=DefaultRouter()
router.register('division',DisionViewset)

urlpatterns = router.urls