from functools import wraps


def log_call(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        print("Function is starting")
        result = func(*args, **kwargs)
        print("Function has finished")
        return result

    return wrapper


@log_call
def greet(name):
    print("Hello", name)


greet("Akshay")
