# class BankAccount:
#     def __init__(self,account_number,initial_balance):
#         self.account_number = account_number
#         self._initial_balance = initial_balance #private
#         self.__pin = None  #protected _BankAccount__pin
        
#     def deposit(self,amount):
#         self._initial_balance+=amount
#         return self._initial_balance
    

# account = BankAccount(12345,1000)
# try:
#     print(account.account_number)
# except Exception as e:
#     print(e)

# try:
#     print(account._initial_balance)
# except Exception as e:
#     print(e)

# try:
#     print(account._BankAccount__pin)
# except Exception as e:
#     print(e)


# account.deposit(100)



class BankAccountPythonic:
    def __init__(self,account_number,balance):
        self.account_number = account_number
        self.balance = balance

    @property
    def account_number(self):
        return self._account_number
    
    @account_number.setter
    def account_number(self,account_number):
        self.account_number = account_number
        return self.account_number
    
    @account_number.deleter
    def account_number(self):
        self.account_number = None 
        return self.account_number
    
    @property
    def balance(self):
        return self._balance 
    
    @balance.setter
    def balance(self,amount):
        self.balance = self.balance + amount
        return self.balance
    
    @balance.deleter
    def balance(self):
        self.balance = 0


account = BankAccountPythonic(12345,10000)

try:
    print(account.account_number)
except Exception as e:
    print(e)

try:
    print(account.balance)
except Exception as e:
    print(e)

try:
    account.balance = 1500
except Exception as e:
    print(e)

try:
    print(account.balance)
except Exception as e:
    print(e)




