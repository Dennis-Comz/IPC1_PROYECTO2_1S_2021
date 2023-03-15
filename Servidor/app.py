import json
from flask_restful import Api
from flask import Flask, request
from flask_cors import CORS
from Appointment import Appointment
from Doctor import Doctor
from Medicine import Medicine
from Nurse import Nurse
from Patient import Patient

app = Flask(__name__)
CORS(app)
api = Api(app)

patients, doctors, nurses, medicines, sessions, appointments, appointmentsAccep = list(), list(), list(), list(), list(), list(), list()

@app.route('/', methods = ['GET'])
def home():
    return 'API FUNCIONA'

@app.route('/login', methods = ['POST'])
def postLogin():
    content = request.get_json()
    username = content['username']
    password = content['password']
    
    if (username == 'admin' and password == '1234'):
            return {'path': 'admin'}
    else:        
        for value in patients:
            if username == value.name and password == value.password:
                sessions.append(value)            
                return {'path': 'paciente'}
        for value in doctors:
            if username == value.name and password == value.password:
                sessions.append(value)
                return {'path': 'doctor'}
        for value in nurses:
            if username == value.name and password == value.password:
                sessions.append(value)
                return {'path': 'enfermera'}
    
    return {'dato': 'NO'}

@app.route('/add-patient', methods = ['POST'])
def postAddPatient():
    content = request.get_json()
    name = content['name']
    lastname = content['lastname']
    birthday = content['birthday']
    gender = content['gender']
    password = content['password']
    phone = content['phone']
    
    patients.append(Patient(name,lastname,birthday,gender,password,phone))
    return {'message':'REGISTRADO CORRECTAMENTE'}

@app.route('/load-patients', methods=['POST'])
def postLoadPatients(): 
    content = request.get_json()
    for patient_ in content['result']:
        patients.append(Patient(patient_['Nombre'],patient_['Apellido'],patient_['Fecha'],patient_['Sexo'],patient_['Contraseña'], patient_['Teléfono']))

    return {'message': 'patients cargados'}
    
@app.route('/load-doctors', methods=['POST'])
def postLoadDoctors():
    content = request.get_json()
    for doctor_ in content['result']:
        doctors.append(Doctor(doctor_['Nombre'],doctor_['Apellido'],doctor_['Fecha'],doctor_['Sexo'],doctor_['Contraseña'], doctor_['Especialidad'], doctor_['Teléfono']))
    
    return {'message': 'doctors cargados'}

@app.route('/load-nurses', methods=['POST'])
def postLoadNurses(): 
    content = request.get_json()
    for nurse_ in content['result']:
        nurses.append(Nurse(nurse_['Nombre'],nurse_['Apellido'],nurse_['Fecha'],nurse_['Sexo'],nurse_['Contraseña'], nurse_['Teléfono']))
            
    return {'message': 'nurses cargados'}

@app.route('/load-medicines', methods=['POST'])
def postLoadMedicines():
    content = request.get_json()
    for medicine_ in content['result']:
        medicines.append(Medicine(medicine_['Nombre'],medicine_['Precio'],medicine_['Descripcion'],medicine_['Cantidad']))
    
    return {'message': 'medicines cargados'}
                   
# Getters de patients y nurses
@app.route('/patients-quantity', methods=['GET'])
def getPatientsQuantity():
    return {'cantidad': str(len(patients))}

@app.route('/patients-data', methods=['GET'])
def getPatientsData():
    results = json.dumps([obj for obj in patients])
    jsdata = json.dumps({"results": results})
    return jsdata

@app.route('/nurses-quantity', methods=['GET'])
def getNursesQuantity():
    return {'cantidad': str(len(nurses))}
    
@app.route('/nurses-data', methods=['GET'])
def getNursesData():
    results = [obj.to_dict() for obj in nurses]
    jsdata = json.dumps({"results": results})
    return jsdata

# Getters de doctors
@app.route('/doctors-quantity', methods=['GET'])
def getDoctorsQuantity():
    return {'cantidad': str(len(doctors))}

@app.route('/doctors-data', methods=['GET'])
def getDoctorsData():
    results = [obj.to_dict() for obj in doctors]
    jsdata = json.dumps({"results": results})
    return jsdata

# Getters de medicines
@app.route('/medicines-quantity', methods=['GET'])
def getMedicinesQuantity():
    return {'cantidad': str(len(medicines))}

@app.route('/medicines-data', methods=['GET'])
def getMedicinesData():
    results = [obj.to_dict() for obj in medicines]
    jsdata = json.dumps({"results": results})
    return jsdata

@app.route('/appointments-quantity', methods=['GET'])
def getAppointmentsQuantity():
    return {'cantidad': str(len(appointments))}

@app.route('/appointments-data', methods=['GET'])
def getAppointmentsData():
    results = [obj.to_dict() for obj in appointments]
    jsdata = json.dumps({"results": results})
    return jsdata

@app.route('/logout', methods=['GET'])
def postLogout():
    sessions.clear()
    return {'message': 'Sesion Cerrada'}

@app.route('/config', methods=['GET'])
def getConfig():
    results = [obj.to_dict() for obj in sessions]
    jsdata = json.dumps({"results": results})
    return jsdata

@app.route('/appointment', methods=['POST'])
def postAppointment():
    content = request.get_json()
    fecha = content['fecha']
    hora = content['hora']
    motivo = content['motivo']
    username = content['username']

    appointments.append(Appointment(username, fecha, hora, motivo))
    return {'message': 'Cita Generada', 'username': username}

@app.route('/accept-appointment', methods=['POST'])
def postAcceptAppointment():
    content = request.get_json()
    numero = content['No']
    fecha = content['Fecha']
    hora = content['Hora']
    motivo = content['Motivo']
    doctor = content['Doctor']
    
    appointments.append(Appointment(numero,fecha,hora,motivo,doctor))
    return {'message': 'Cita Aceptada'}

@app.route('/appointments-accepted', methods=['GET'])
def getAppointmentsAccepted():
    results = [obj.to_dict() for obj in appointments]
    jsdata = json.dumps({"results": results})
    return jsdata

@app.route('/update', methods=['POST'])
def postUpdate():
    content = request.get_json()
    name = content['nombre']
    lastname = content['apellido']
    username = content['usuario']
    password = content['password']
    fechaNac = content['fechaNac']
    oldUser = content['oldUsuario']
    
    for i in range(0, len(patients)):
        if patients[i].username == oldUser:
            patients[i].name = name
            patients[i].lastname = lastname
            patients[i].username = username
            patients[i].password = password
            patients[i].birthday = fechaNac
            return {'message': 'Actualizado'}
    for i in range(0, len(nurses)):
        if nurses[i].username == oldUser:
            nurses[i].name = name
            nurses[i].lastname = lastname
            nurses[i].username = username
            nurses[i].password = password
            nurses[i].birthday = fechaNac
            return {'message': 'Actualizado'}
    for i in range(0, len(doctors)):
        if patients[i].username == oldUser:
            doctors[i].name = name
            doctors[i].lastname = lastname
            doctors[i].username = username
            doctors[i].password = password
            doctors[i].birthday = fechaNac
            return {'message': 'Actualizado'}
    
        
if __name__ == '__main__':
    app.run(host= '192.168.0.11')
    app.run(debug=True)