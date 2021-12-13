from rest_framework import serializers
from ReportApp.models import Reports

class ReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reports
        fields = ('ReportId','PlayerName','PositionName','TeamName','OFV','PlayerType',
                  'HittingGrade','HittingText','PowerGrade','PowerText','RunningGrade',
                  'RunningText','FieldingGrade','FieldingText','ThrowingGrade','ThrowingText',
                  'FastballGrade','FastballVelocity','FastballText','ChangeupGrade','ChangeupVelocity',
                  'ChangeupText','SliderGrade','SliderVelocity','SliderText','CurveballGrade',
                  'CurveballVelocity','CurveballText')