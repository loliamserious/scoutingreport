from django.db import models


class Reports(models.Model):
    ReportId = models.AutoField(primary_key=True)
    PlayerName = models.CharField(max_length=100)
    PositionName = models.CharField(max_length=100)
    TeamName = models.CharField(max_length=100)
    OFV = models.IntegerField(default=0)
    PlayerType = models.CharField(max_length=50)
    HittingGrade = models.IntegerField()
    HittingText = models.TextField("Hitting Report",null=True, blank=True)
    PowerGrade = models.IntegerField()
    PowerText = models.TextField("Power Report", null=True, blank=True)
    RunningGrade = models.IntegerField()
    RunningText = models.TextField("Running Report", null=True, blank=True)
    FieldingGrade = models.IntegerField()
    FieldingText = models.TextField("Fielding Report", null=True, blank=True)
    ThrowingGrade = models.IntegerField()
    ThrowingText = models.TextField("Throwing Report", null=True, blank=True)
    FastballGrade = models.IntegerField()
    FastballVelocity = models.IntegerField()
    FastballText = models.TextField("Fastball Report", null=True, blank=True)
    ChangeupGrade = models.IntegerField()
    ChangeupVelocity = models.IntegerField()
    ChangeupText = models.TextField("Changeup Report", null=True, blank=True)
    SliderGrade = models.IntegerField()
    SliderVelocity = models.IntegerField()
    SliderText = models.TextField("Slider Report", null=True, blank=True)
    CurveballGrade = models.IntegerField()
    CurveballVelocity = models.IntegerField()
    CurveballText = models.TextField("Curveball Report", null=True, blank=True)



