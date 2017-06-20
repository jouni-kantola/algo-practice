def binary_search(list, item):
    low = 0
    high = len(list) - 1
    
    while low <= high:
        mid = (low + high) / 2
        guess = list[mid]
        
        if guess == item:
            return mid
        
        if guess < item:
            low = mid + 1
        else:
            high = mid - 1
    
    return None

my_list = [1, 3, 5, 7, 9]

# O(log n)
print binary_search(my_list, 3) # => 1
print binary_search(my_list, -1) # => None

# 128 values => log2(128) => 2^x=128 => x=7
# 256 values => log2(256) => 2^x=256 => x=8