def fact(x):
    if x == 0:
        return 1
    else:
        return x * fact(x - 1)

print fact(0) # 0! = 1
print fact(3) # 3 * 2 * 1 => 6