def binary_search(list, item):
    if len(list) == 0:
        return False
    else:
        mid = len(list) / 2
        guess = list[mid]
        if guess == item:
            return True
        elif guess > item:
            rest = list[:mid]
            return binary_search(rest, item)
        else:
            rest = list[mid + 1:]
            return binary_search(rest, item)

def binary_search2(list, item, low = 0, high = None):
    if not list: return None

    high = high if high is not None else len(list) - 1

    if low > high:
        return None
    else:
        mid = (low + high) / 2

        guess = list[mid]

        if guess == item:
            return mid
        elif guess > item:
            return binary_search2(list, item, low, mid - 1)
        else:
            return binary_search2(list, item, mid + 1, high)

my_list = [1, 2, 3, 5, 7, 9, 11, 16, 18]

print binary_search(my_list, 3) # => True
print binary_search2(my_list, 3) # => 2

print binary_search(my_list, 9) # => True
print binary_search2(my_list, 9) # => 5

print binary_search(my_list, -1) # => False
print binary_search2(my_list, -1) # => None

print binary_search(my_list, 16) # => True
print binary_search2(my_list, 100) # => None
