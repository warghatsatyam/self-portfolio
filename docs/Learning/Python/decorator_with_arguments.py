def my_decorator(func):
    def wrap(*args,**kwargs):
        print(f"Calling {func.__name__} with args: {args} and {kwargs}")
        result = func(*args,**kwargs)
        print(f"{func.__name__} returned result {result}")
        return result
    return wrap



@my_decorator
def add_number(a,b):
    return a+b 

add_number(4,5)

@my_decorator
def greetings(name,greet='Hello'):
    return f"{greet} {name}"


greetings('Satyam','Namskar')