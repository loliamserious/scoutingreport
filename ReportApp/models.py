from django.db import models


class Reports(models.Model):
    ReportId = models.AutoField(primary_key=True)
    PlayerName = models.CharField(max_length=100)
    PositionName = models.CharField(max_length=100)
    TeamName = models.CharField(max_length=100)
    OFV = models.IntegerField(default=0)
    PlayerType = models.CharField(max_length=50)
    HittingGrade = models.IntegerField(null=True,blank=True)
    HittingText = models.TextField("Hitting Report",null=True, blank=True)
    PowerGrade = models.IntegerField(null=True,blank=True)
    PowerText = models.TextField("Power Report", null=True, blank=True)
    RunningGrade = models.IntegerField(null=True,blank=True)
    RunningText = models.TextField("Running Report", null=True, blank=True)
    FieldingGrade = models.IntegerField(null=True,blank=True)
    FieldingText = models.TextField("Fielding Report", null=True, blank=True)
    ThrowingGrade = models.IntegerField(null=True,blank=True)
    ThrowingText = models.TextField("Throwing Report", null=True, blank=True)
    FastballGrade = models.IntegerField(null=True,blank=True)
    FastballVelocity = models.IntegerField(null=True,blank=True)
    FastballText = models.TextField("Fastball Report", null=True, blank=True)
    ChangeupGrade = models.IntegerField(null=True,blank=True)
    ChangeupVelocity = models.IntegerField(null=True,blank=True)
    ChangeupText = models.TextField("Changeup Report", null=True, blank=True)
    SliderGrade = models.IntegerField(null=True,blank=True)
    SliderVelocity = models.IntegerField(null=True,blank=True)
    SliderText = models.TextField("Slider Report", null=True, blank=True)
    CurveballGrade = models.IntegerField(null=True,blank=True)
    CurveballVelocity = models.IntegerField(null=True,blank=True)
    CurveballText = models.TextField("Curveball Report", null=True, blank=True)



