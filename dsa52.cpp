// Finding median sorted array 
#include <iostream>
#include <vector>
using namespace std;

double findMedianSortedArrays(vector<int>& A, vector<int>& B) {
    if (A.size() > B.size()) return findMedianSortedArrays(B, A);

    int m = A.size(), n = B.size();
    int low = 0, high = m;

    while (low <= high) {
        int partitionA = (low + high) / 2;
        int partitionB = (m + n + 1) / 2 - partitionA;

        int maxLeftA = (partitionA == 0) ? INT_MIN : A[partitionA - 1];
        int minRightA = (partitionA == m) ? INT_MAX : A[partitionA];

        int maxLeftB = (partitionB == 0) ? INT_MIN : B[partitionB - 1];
        int minRightB = (partitionB == n) ? INT_MAX : B[partitionB];

        if (maxLeftA <= minRightB && maxLeftB <= minRightA) {
            if ((m + n) % 2 == 0)
                return (max(maxLeftA, maxLeftB) + min(minRightA, minRightB)) / 2.0;
            else
                return max(maxLeftA, maxLeftB);
        } else if (maxLeftA > minRightB) {
            high = partitionA - 1;
        } else {
            low = partitionA + 1;
        }
    }

    throw invalid_argument("Input arrays not sorted");
}

int main() {
    vector<int> A = {1, 3};
    vector<int> B = {2};
    cout << "Median: " << findMedianSortedArrays(A, B) << endl;
}
