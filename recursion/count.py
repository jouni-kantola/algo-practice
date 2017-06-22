def count(arr):
    if len(arr) == 0:
        return 0

    return 1 + count(arr[1:])

print count([1,2,3,4]) # => 4