"""Explore object identity, mutability, and copying."""
import copy

original = [[1, 2], [3, 4]]
reference = original
shallow_copy = copy.copy(original)
deep_copy = copy.deepcopy(original)

print("Same object:", original is reference)
print("Shallow copy is same object:", original is shallow_copy)

original[0].append(99)

print("Original:", original)
print("Reference:", reference)
print("Shallow copy:", shallow_copy)
print("Deep copy:", deep_copy)
