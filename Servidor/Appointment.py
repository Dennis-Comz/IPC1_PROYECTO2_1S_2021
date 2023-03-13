class Appointment:
    
    def __init__(self, id, patient_id, date_time, reason, doctor_id, status):
        self.id = id
        self.patient_id = patient_id
        self.date_time = date_time
        self.reason = reason
        self.doctor_id = doctor_id
        self.status = status

    def __str__(self):
        print(self.id + " " + self.patient_id + " " + self.date_time + " " + self.reason + " " + self.doctor_id + " " + self.status)