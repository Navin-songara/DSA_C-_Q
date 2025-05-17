#include <iostream>
#include <vector>
using namespace std;

void reverseArray(vector<int>& arr) {
    int start = 0, end = arr.size() - 1;
    while(start < end) {
        swap(arr[start++], arr[end--]);
    }
}
//done with reversarray

int main() {
    vector<int> arr = {1, 2, 3, 4, 5};
    reverseArray(arr);
    for(int x : arr) cout << x << " ";
}
