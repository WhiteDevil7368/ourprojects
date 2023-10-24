def f(x):
    def f1(*args,**kwargs):
        print("Sanfoundry")
        return x(*args,**kwargs)
    return f1