# Decorators

- A function that can be used to modify/change/anything different properties/methods in the class
- Not the same as JavaScript decorators
- Used inside/on classes only
- Understanding the order in which decorators are ran are the key to understanding them

# Decorators on a property, method, accessor

- First argument is the **_prototype_** of the object
- Second argument is the key of the property/method/accessor on the object
- Third argument is the property descriptor
- Decorators are applied when the code for this class is ran (**not when an instance is created**)

watch again `decorator` definition
