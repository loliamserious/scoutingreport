from django.db import models


class Reports(models.Model):
    ReportId = models.AutoField(primary_key=True)
    PlayerName = models.CharField(max_length=100)
    PositionName = models.CharField(max_length=100)
    TeamName = models.CharField(max_length=100)
    OFV = models.CharField(max_length=10)
    PlayerType = models.CharField(max_length=50)
    HittingGrade = models.CharField(max_length=10,null=True, blank=True)
    HittingText = models.TextField("Hitting Report",null=True, blank=True)
    PowerGrade = models.CharField(max_length=10,null=True, blank=True)
    PowerText = models.TextField("Power Report", null=True, blank=True)
    RunningGrade = models.CharField(max_length=10,null=True, blank=True)
    RunningText = models.TextField("Running Report", null=True, blank=True)
    FieldingGrade = models.CharField(max_length=10,null=True, blank=True)
    FieldingText = models.TextField("Fielding Report", null=True, blank=True)
    ThrowingGrade = models.CharField(max_length=10,null=True, blank=True)
    ThrowingText = models.TextField("Throwing Report", null=True, blank=True)
    FastballGrade = models.CharField(max_length=10,null=True, blank=True)
    FastballVelocity = models.CharField(max_length=30,null=True, blank=True)
    FastballText = models.TextField("Fastball Report", null=True, blank=True)
    ChangeupGrade = models.CharField(max_length=10,null=True, blank=True)
    ChangeupVelocity = models.CharField(max_length=30,null=True, blank=True)
    ChangeupText = models.TextField("Changeup Report", null=True, blank=True)
    SliderGrade = models.CharField(max_length=10,null=True, blank=True)
    SliderVelocity = models.CharField(max_length=30,null=True, blank=True)
    SliderText = models.TextField("Slider Report", null=True, blank=True)
    CurveballGrade = models.CharField(max_length=10,null=True, blank=True)
    CurveballVelocity = models.CharField(max_length=30,null=True, blank=True)
    CurveballText = models.TextField("Curveball Report", null=True, blank=True)



