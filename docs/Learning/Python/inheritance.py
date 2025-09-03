class Animal:
    def __init__(self,name,species):
        self.name = name
        self.species = species
        self.is_alive = True

    def eat(self,food):
        return f"{self.name} is eating {food}"
    
    def sleep(self):
        return f"{self.name} is sleeping"
    
    def make_sound(self):
        return "Some generic Sound"
    
    def __str__(self):
        return f"{self.name} the {self.species}"
    
class Dog(Animal):
    def __init__(self,name,breed):
        super().__init__(name,"Dog")
        self.breed = breed
        self.tricks = []

    def make_sound(self):
        return "Woof Woof"
    
    def learn_tricks(self,trick):
        self.tricks.append(trick)
        return f"{self.name} learned new trick {trick}"
    
    def perform_tricks(self):
        if not self.tricks:
            return f"{self.name} is not having any trick up his sleeve"
        return f'{self.tricks}'
    
try:
    dog = Dog("Tom","Husky")
    print(dog)
except Exception as e:
    print(e)

try:
    result = dog.make_sound()
    print(result)
except Exception as e:
    print(e)

try:
    result = dog.learn_tricks('Dancing')
    print(result)
except Exception as e:
    print(e)

try:
    result = dog.perform_tricks()
    print(result)
except Exception as e:
    print(e)


try:
    result = dog.eat('Non Veg')
    print(result)
    print(dog.sleep())
    print(dog.species)
except Exception as e:
    print(e)