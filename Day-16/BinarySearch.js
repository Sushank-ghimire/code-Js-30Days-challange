// Binary Searching Using Recursion
function binarySearch(arr, numSearch, low = 0, high = arr.length - 1) {
  // Ensure the array is sorted
  arr = arr.sort((a, b) => a - b);

  // Base case: if the low index exceeds the high index, the element is not found
  if (low > high) {
    return -1;
  }

  // Calculate the middle index
  const mid = Math.floor((low + high) / 2);

  // Check if the element at the middle index is the target
  if (arr[mid] === numSearch) {
    return mid;
  }

  // If the target is smaller than the middle element, search in the left half
  if (arr[mid] > numSearch) {
    return binarySearch(arr, numSearch, low, mid - 1);
  }

  // If the target is larger than the middle element, search in the right half
  return binarySearch(arr, numSearch, mid + 1, high);
}

// Example usage
const arr = [2, 8, 4, 7, 5, 9, 90, 34, 56];
const numSearch = 90;

const result = binarySearch(arr, numSearch);
console.log(
  result !== -1 ? `Element found at index ${result}` : "Element not found"
);
