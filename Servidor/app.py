from flask import Flask, request, jsonify
from flask_restful import Api
from flask_cors import CORS, cross_origin
import json

app = Flask(__name__)
CORS(app)
api = Api(app)

class Persona:
    
    def __init__(self, name, lastname, birthday, gender, password, phone):
        self.name = name
        self.lastname = lastname
        self.birthday = birthday
        self.gender = gender
        self.password = password
        self.phone = phone

    def to_dict(self):
        return {"name": self.name, "lastname": self.lastname, "birthday": self.birthday,
                "gender": self.gender, "password": self.password,
                'phone': self.phone}

class Doctor:
    def __init__(self, name, lastname, birthday, gender, password, especialidad, phone):
        self.name = name
        self.lastname = lastname
        self.birthday = birthday
        self.gender = gender
        self.password = password
        self.especialidad = especialidad
        self.phone = phone

    def to_dict(self):
        return {"name": self.name, "lastname": self.lastname, "birthday": self.birthday,
                "gender": self.gender, "password": self.password,
                "especialidad": self.especialidad, 'phone': self.phone}

class Medicamento:
    def __init__(self, name, price, description, quantity):
        self.name = name
        self.price = price
        self.description = description
        self.quantity = quantity
    
    def to_dict(self):
        return {"name": self.name, "price": self.price, "description": self.description,
                "quantity": self.quantity}

class citasUsuarios:
    def __init__(self, idUser, fecha, hora, motivo):
        self.idUser = idUser
        self.fecha = fecha
        self.hora = hora
        self.motivo = motivo
    
    def to_dict(self):
        return {'id': self.idUser, 'fecha': self.fecha, 'hora': self.hora, 'motivo': self.motivo}

class citasAceptadas:
    def __init__(self, no, fecha, hora, motivo, doctor):
        self.no = no
        self.fecha = fecha
        self.hora = hora
        self.motivo = motivo
        self.doctor = doctor
    
    def to_dict(self):
        return {'no': self.no, 'fecha': self.fecha, 'hora': self.hora, 'motivo': self.motivo, 'doctor': self.doctor}
        
          
pacientes = list()
doctores = list()
enfermeras = list()
medicamentos = list()
sesiones = list()
citas = list()
citasAcep = list()

@app.route('/', methods = ['GET'])
def home():
    return 'API FUNCIONA'

@app.route('/verificar', methods = ['POST'])
def postVerificar():
    content = request.get_json()
    username = content['username']
    password = content['password']
    
    if (username == 'admin' and password == '1234'):
            return {'path': 'admin'}
    else:        
        for value in pacientes:
            if username == value.name and password == value.password:
                sesiones.append(value)            
                return {'path': 'paciente'}
        for value in doctores:
            if username == value.name and password == value.password:
                sesiones.append(value)
                return {'path': 'doctor'}
        for value in enfermeras:
            if username == value.name and password == value.password:
                sesiones.append(value)
                return {'path': 'enfermera'}
    
    return {'dato': 'NO'}

@app.route('/registrar', methods = ['POST'])
def postUsuario():
    content = request.get_json()
    name = content['name']
    lastname = content['lastname']
    birthday = content['birthday']
    gender = content['gender']
    password = content['password']
    phone = content['phone']
    
    pacientes.append(Persona(name,lastname,birthday,gender,password,phone))
    return {'message':'REGISTRADO CORRECTAMENTE'}

@app.route('/cargarPacientes', methods=['POST'])
def postCargarPacientes(): 
    content = request.get_json()
    contador = 0
    global name 
    global lastname
    global birthday
    global gender
    global phone
    for i in range(0, len(content['result'])):
        for value in content['result'][i]:
            # print(value + str(contador))
            if contador == 0:
                name = content['result'][i][str(value)]
                # print(name)
            elif contador == 1:
                lastname = content['result'][i][str(value)]
                # print(lastname)
            elif contador == 2:
                birthday = content['result'][i][str(value)]
                # print(birthday)
            elif contador == 3:
                gender = content['result'][i][str(value)]
                # print(gender)
            elif contador == 4:
                password = content['result'][i][str(value)]
                # print(password)
            elif contador == 5:
                phone = content['result'][i][str(value)]
                # print(phone)
            contador += 1
            if contador == 6:
                contador = 0
                pacientes.append(Persona(name,lastname,birthday,gender,password, phone))

    return {'message': 'Pacientes cargados'}
    
@app.route('/cargarDoctores', methods=['POST'])
def postCargarDoctores():
    content = request.get_json()
    contador = 0
    global name 
    global lastname
    global birthday
    global gender
    global phone
    for i in range(0, len(content['result'])):
        for value in content['result'][i]:
            # print(value + str(contador))
            if contador == 0:
                name = content['result'][i][str(value)]
                # print(name)
            elif contador == 1:
                lastname = content['result'][i][str(value)]
                # print(lastname)
            elif contador == 2:
                birthday = content['result'][i][str(value)]
                # print(birthday)
            elif contador == 3:
                gender = content['result'][i][str(value)]
                # print(gender)
            elif contador == 4:
                password = content['result'][i][str(value)]
                # print(password)
            elif contador == 5:
                especialidad = content['result'][i][str(value)]
            elif contador == 6:
                phone = content['result'][i][str(value)]
                # print(phone)
            contador += 1
            if contador > 6:
                contador = 0
                doctores.append(Doctor(name,lastname,birthday,gender,password,especialidad,phone))
    
    return {'message': 'Doctores cargados'}

@app.route('/cargarEnfermeras', methods=['POST'])
def postCargarEnfermeras(): 
    content = request.get_json()
    contador = 0
    global name 
    global lastname
    global birthday
    global gender
    global phone
    for i in range(0, len(content['result'])):
        for value in content['result'][i]:
            # print(value + str(contador))
            if contador == 0:
                name = content['result'][i][str(value)]
                # print(name)
            elif contador == 1:
                lastname = content['result'][i][str(value)]
                # print(lastname)
            elif contador == 2:
                birthday = content['result'][i][str(value)]
                # print(birthday)
            elif contador == 3:
                gender = content['result'][i][str(value)]
                # print(gender)
            elif contador == 4:
                password = content['result'][i][str(value)]
                # print(password)
            elif contador == 5:
                phone = content['result'][i][str(value)]
                # print(phone)
            contador += 1
            if contador == 6:
                contador = 0
                enfermeras.append(Persona(name,lastname,birthday,gender,password,phone))
            
    return {'message': 'Enfermeras cargados'}

@app.route('/cargarMedicamentos', methods=['POST'])
def postCargarMedicamentos():
    content = request.get_json()
    for i in content['result']:
        if i['Nombre'] != '':
            name = i['Nombre']
            price = i['Precio']
            description = i['Descripcion'] 
            quantity = i['Cantidad']
            
            medicamentos.append(Medicamento(name,price,description,quantity))
    
    return {'message': 'Medicamentos cargados'}
                   
# Getters de Pacientes y enfermeras
@app.route('/cantidadPacientes', methods=['GET'])
def getCantidadPacientes():
    return {'cantidad': str(len(pacientes))}

@app.route('/datosPacientes', methods=['GET'])
def getDatosPacientes():
    results = [obj.to_dict() for obj in pacientes]
    jsdata = json.dumps({"results": results})
    return jsdata

@app.route('/cantidadEnfermeras', methods=['GET'])
def getCantidadEnfermeras():
    return {'cantidad': str(len(enfermeras))}
    
@app.route('/datosEnfermeras', methods=['GET'])
def getDatosEnfermeras():
    results = [obj.to_dict() for obj in enfermeras]
    jsdata = json.dumps({"results": results})
    return jsdata

# Getters de Doctores
@app.route('/cantidadDoctores', methods=['GET'])
def getCantidadDoctores():
    return {'cantidad': str(len(doctores))}

@app.route('/datosDoctores', methods=['GET'])
def getDatosDoctores():
    results = [obj.to_dict() for obj in doctores]
    jsdata = json.dumps({"results": results})
    return jsdata

# Getters de Medicamentos
@app.route('/cantidadMedicamentos', methods=['GET'])
def getCantidadMedicamentos():
    return {'cantidad': str(len(medicamentos))}

@app.route('/datosMedicamentos', methods=['GET'])
def getDatosMedicamentos():
    results = [obj.to_dict() for obj in medicamentos]
    jsdata = json.dumps({"results": results})
    return jsdata

@app.route('/cerrarSesion', methods=['GET'])
def postCerrarSesion():
    sesiones.clear()
    return {'message': 'Sesion Cerrada'}

@app.route('/configuracion', methods=['GET'])
def getConfiguracion():
    results = [obj.to_dict() for obj in sesiones]
    jsdata = json.dumps({"results": results})
    return jsdata

@app.route('/cita', methods=['POST'])
def postCita():
    content = request.get_json()
    fecha = content['fecha']
    hora = content['hora']
    motivo = content['motivo']
    username = content['username']

    citas.append(citasUsuarios(username, fecha, hora, motivo))
    return {'message': 'Cita Generada', 'username': username}
    
@app.route('/cantidadCitas', methods=['GET'])
def getCantidadCitas():
    return {'cantidad': str(len(citas))}

@app.route('/datosCitas', methods=['GET'])
def getDatosCitas():
    results = [obj.to_dict() for obj in citas]
    jsdata = json.dumps({"results": results})
    return jsdata

@app.route('/citasAceptadas', methods=['POST'])
def postCitasAceptadas():
    content = request.get_json()
    numero = content['No']
    fecha = content['Fecha']
    hora = content['Hora']
    motivo = content['Motivo']
    doctor = content['Doctor']
    
    citasAcep.append(citasAceptadas(numero,fecha,hora,motivo,doctor))
    return {'message': 'Cita Aceptada'}

@app.route('/aceptadas', methods=['GET'])
def getAceptadas():
    results = [obj.to_dict() for obj in citasAcep]
    jsdata = json.dumps({"results": results})
    return jsdata

@app.route('/actualizar', methods=['POST'])
def postActualizar():
    content = request.get_json()
    name = content['nombre']
    lastname = content['apellido']
    username = content['usuario']
    password = content['password']
    fechaNac = content['fechaNac']
    oldUser = content['oldUsuario']
    
    for i in range(0, len(pacientes)):
        if pacientes[i].username == oldUser:
            pacientes[i].name = name
            pacientes[i].lastname = lastname
            pacientes[i].username = username
            pacientes[i].password = password
            pacientes[i].birthday = fechaNac
            return {'message': 'Actualizado'}
    for i in range(0, len(enfermeras)):
        if enfermeras[i].username == oldUser:
            enfermeras[i].name = name
            enfermeras[i].lastname = lastname
            enfermeras[i].username = username
            enfermeras[i].password = password
            enfermeras[i].birthday = fechaNac
            return {'message': 'Actualizado'}
    for i in range(0, len(doctores)):
        if pacientes[i].username == oldUser:
            doctores[i].name = name
            doctores[i].lastname = lastname
            doctores[i].username = username
            doctores[i].password = password
            doctores[i].birthday = fechaNac
            return {'message': 'Actualizado'}
    
        
if __name__ == '__main__':
    app.run(host= '0.0.0.0')
    app.run(debug=True)