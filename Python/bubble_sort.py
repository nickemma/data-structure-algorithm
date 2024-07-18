def custom_sort(arr, fn):
    decorated_list = [(element, fn(element)) for element in arr]

    decorated_list.sort(key=lambda x: x[1])

    sorted_arr = [element[0] for element in decorated_list]

    return sorted_arr

# Example 1:
arr1 = [5, 4, 1, 2, 3]
fn1 = lambda x: x
print(custom_sort(arr1, fn1)) 

# Example 2:
arr2 = [{"x": 1}, {"x": 0}, {"x": -1}]
fn2 = lambda d: d["x"]
print(custom_sort(arr2, fn2))  

# Example 3:
arr3 = [[3, 4], [5, 2], [10, 1]]
fn3 = lambda x: x[1]
print(custom_sort(arr3, fn3))  