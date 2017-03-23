# SELECTION SORT ALGORITHM: 

## TODO: 
1. Write algorithm in JS
2. Write doc to explain each step clearly 
3. Store status of each step of the algorithm
4. Make animation of the algorithm with D3js

## PSEUDOCODE:
1. Find the smallest value. Swap it with the first value.
2. Find the second-smallest value. Swap it with the second value.
3. Find the third-smallest value. Swap it with the third value.
4. Repeat finding the next-smallest value, and swapping it into the correct position until the array is sorted.

This algorithm is called selection sort because it repeatedly selects the next-smallest element and swaps it into place.

## ALGORITHM EXPLANATION:
1. Bắt đầu mặc định giá trị đầu tiên của mảng là giá trị nhỏ nhất (minNum = arr[0]). Sau đó, kiểm tra lần lượt qua mảng, nếu có số nào nhỏ hơn minNum thì thay thế minNum với giá trị mới này, tiếp tục so sánh minNum mới với các giá trị còn lại trong mảng.
2. Khi kiểm tra lần lượt hết mảng, đổi vị trí của minNum và giá trị đầu tiên. Sau lượt 1, giá trị đầu tiên là giá trị nhỏ nhất trong mảng
3. Tiếp tục kiểm tra từ vị trí thứ 2, lại đặt minNum = arr[1]. Kiểm tra lần lượt qua mảng từ vị trí thứ 2 đến cuối, nếu có giá trị nào nhỏ hơn thì minNum đặt bằng giá trị mới này. Tiếp tục đến cuối, kết thúc lượt 2, lại đổi vị trí của minNum và giá trị thứ 2. Kết thúc lượt 2, giá trị thứ nhất và thứ 2 sẽ xếp theo thứ tự.
4. Tiếp tục quá trình này với giá trị thứ 3 và với phần còn lại của mảng.

## COMPLEXITY: 0(N^2)

## REFERENCE: 
http://codingmiles.com/sorting-algorithms-selection-sort-using-javascript/
