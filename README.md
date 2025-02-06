# JavaScript Null Value Handling Bug

This repository demonstrates a common, yet subtle, bug in JavaScript related to null value handling within a simple addition function. The original code incorrectly returns 0 when one or both inputs are null.  The solution provides alternative approaches for better error handling and more robust null value management.

## Bug Description

The `foo` function attempts to add two numbers. However, it prematurely returns 0 if either `a` or `b` is `null`.  This behavior is not always desired;  a more informative approach is to either treat nulls as 0 or to throw an error indicating invalid input.

## Solution

The solution showcases two improvements:

1.  **Treating nulls as 0:**  This approach replaces null inputs with 0 before performing the addition, ensuring the function always returns a numerical result.
2.  **Throwing an error:** This approach provides more robust error handling by explicitly throwing an error when a null value is detected.  This approach is preferred when null values are unexpected and should halt program execution.

Choose the solution that best fits your application's requirements and error-handling strategy.