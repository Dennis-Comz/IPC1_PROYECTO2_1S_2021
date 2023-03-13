class Medicine:
    def __init__(self, name, price, description, quantity):
        self.name = name
        self.price = price
        self.description = description
        self.quantity = quantity

    def __str__(self):
        print(self.name + " " + self.price + " " + self.description + " " + self.quantity)