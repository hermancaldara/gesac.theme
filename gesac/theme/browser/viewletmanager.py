from interfaces import IHomeViewletManager
from Products.Five.viewlet.manager import ViewletManagerBase
from zope import interface

class HomeViewletManager(ViewletManagerBase):
    interface.implements(IHomeViewletManager)                                        
