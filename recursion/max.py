def max(xs):
    if len(xs) == 1:
        return xs[0]
    else:
        sub_max = max(xs[1:])
        return xs[0] if xs[0] > sub_max else sub_max

print max([1]) # => 1
print max([1,2,10,3,4]) # => 10
