class Stack:
    def __init__(self):
        self.items = []

    def push(self, element):
        self.items.append(element)

    def pop(self):
        return self.items.pop()

    def is_empty(self):
        return len(self.items) == 0

# Example usage
my_stack = Stack()
my_stack.push(1)
my_stack.push(2)
my_stack.push(3)

while not my_stack.is_empty():
    print(my_stack.pop())
