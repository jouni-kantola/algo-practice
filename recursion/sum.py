def sum(xs):
    if len(xs) == 0:
        return 0

    #return xs.pop() + sum(xs)
    return xs[0] + sum(xs[1:])

print sum([1,2,3,4]) # => 10