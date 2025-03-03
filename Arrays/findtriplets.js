function findTriplets(arr) {
    arr.sort((a, b) => a - b);
    let found = false;

    for (let i = 0; i < arr.length - 2; i++) {
        let left = i + 1, right = arr.length - 1;
        while (left < right) {
            let sum = arr[i] + arr[left] + arr[right];
            if (sum === 0) {
                console.log(`Triplet: (${arr[i]}, ${arr[left]}, ${arr[right]})`);
                found = true;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    if (!found) {
        console.log("No triplets found.");
    }
}

// Example usage
const arr = [-1, 0, 1, 2, -1, -4];
findTriplets(arr);
