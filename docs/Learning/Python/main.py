def my_decorator(func):
    def wrapper():
        print("Hello !!!!")
        func()
        print("How are you doing today?")
    return wrapper


def name():
    print('Satyam')

@my_decorator
def name2():
    print('Manohar')

complete_message = my_decorator(name)
complete_message()
print(10*'-')

name2()
