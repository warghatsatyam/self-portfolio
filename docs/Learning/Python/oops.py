"""
What is OOPS

It is a programming paradigm which organized itself around the objects(method and data) instead of using function and logic

Key benefits:
Modularity: Code is organized into self-contained objects
Resusability: Objects can be reused across different part of the application
Maintainability:Changes to one code doesn't affect other
Scalability: Easy to extend and modify

Four Pillars of OOPS
1. Encapsulation
2. Inheritance
3. Polymorphism
4. Abstraction

Encapsulation : Data Hiding and Access Control

"""
import datetime

class BankAccount:
    def __init__(self,account_number,initial_balance=0):
        self.account_number         = account_number  # public
        self._balance               = initial_balance # protected
        self.__pin                  = None            # private (Name Mangling) replace __pin with BankAccount__pin so in order to access instance._BankAccount__pin
        self.__transaction_history  = []              # private (Name Mangling) 

    #Public Methods - the interface
    def deposit(self,amount):
        if amount > 0:
            self._balance+=amount
            self._log_transaction(f"Deposited ${amount}")


    def withdraw(self,amount):
        if 0<amount < self._balance:
            self._balance-=amount
            self._log_transaction(f'Debuted ${amount}')
            return True
        return False
    
    def get_balance(self):
        return self._balance
    

    def _log_transaction(self,description):
        self.__transaction_history.append({
            'description':description,
            'timestamp':datetime.datetime.now()
            })

    def __validate_pin(self,pin):
        return self.__pin == pin
    
    def set_pin(self,new_pin):
        if len(str(new_pin))==4:
            self.__pin = new_pin
            return True 
        return False
    
    def verify_pin(self,pin):
        return self.__validate_pin(pin)
    


amount = BankAccount(123456,10000)
print(amount.account_number)
print(amount.get_balance())

print(amount._balance)
try:
    print(amount.__pin) # This will give error
except Exception as e:
    print("Error",e)

try:    
    print(BankAccount.__pin) # This is also not valid
except Exception as e:
    print("Error",e)
amount.set_pin(1234)

print(amount._BankAccount__pin)




"""
Now let's Learn Pythonic Encapsulation
"""
class BankAccountPythonic:
    def __init__(self,account_number,initial_balance):
        self.account_number = account_number
        self._balance = initial_balance

    @property
    def balance(self):
        return self._balance
    
    @balance.setter
    def balance(self,amount):
        if not isinstance(amount,(int,float)):
            raise TypeError("Balance must be a number")
        if amount < 0:
            raise ValueError("Amount cannot be negative")
        self._balance = amount

    @balance.deleter
    def balance(self):
        print("Clossing Account")
        self._balance = 0

    
account = BankAccountPythonic(12345,1000)
print(account.balance)
account.balance = 1500
print(account.balance)
try:
    account.balance = -100
except Exception as e:
    print(e)

del account.balance

print(account.balance)



# Convert this basic class to use properties
class Rectangle:
    def __init__(self, width, height):
        self._width = width    # Add validation
        self._height = height  # Add validation
        # Add computed properties: area, perimeter, is_square

    @property
    def width(self):
        return self._width 

    @property
    def height(self):
        return self._height
    

    @width.setter
    def width(self,widht):
        if widht < 0:
            raise ValueError ("Width cannot be negative")
        self._width = widht

    @height.setter
    def height(self,height):
        if height < 0:
            raise ValueError("Height cannot be negative")
        self._height = height

    @height.deleter
    def height(self):
        print("Deleting Height ")
        self._height = 0

    @width.deleter
    def width(self):
        print("Deleting Width")
        self._width = 0

    def area(self):
        return self.width * self.height 
    
    def is_square(self):
        return self.width * self.height == self.width * self.width
    
    def perimeter(self):
        return 2*self.width + 2*self.height
    

