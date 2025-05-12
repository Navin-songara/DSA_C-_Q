#include <stdio.h>

void swap(int* a, int* b) {
    int t = *a; *a = *b; *b = t;
}

int partition(int arr[], int l, int r) {
    int pivot = arr[r], i = l;
    for (int j = l; j < r; j++) {
        if (arr[j] <= pivot) {
            swap(&arr[i], &arr[j]);
            i++;
        }
    }
    swap(&arr[i], &arr[r]);
    return i;
}

int kthSmallest(int arr[], int l, int r, int k) {
    if (k > 0 && k <= r - l + 1) {
        int index = partition(arr, l, r);
        if (index - l == k - 1)
            return arr[index];
        if (index - l > k - 1)
            return kthSmallest(arr, l, index - 1, k);
        return kthSmallest(arr, index + 1, r, k - index + l - 1);
    }
    return -1;
}

int main() {
    int arr[] = {12, 3, 5, 7, 4, 19, 26};
    int n = sizeof(arr)/sizeof(arr[0]), k = 3;
    printf("Kth smallest element is %d\n", kthSmallest(arr, 0, n - 1, k));
    return 0;
}
