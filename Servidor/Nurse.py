class Nurse:
    
    def __init__(self, name, lastname, birthday, gender, password, phone):
        self.name = name
        self.lastname = lastname
        self.birthday = birthday
        self.gender = gender
        self.password = password
        self.phone = phone

    def __str__(self):
        print(self.name + " " + self.lastname + " " + self.birthday + " " + self.gender + " " + self.password + " " + self.phone)