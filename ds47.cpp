// merge array 
#include <iostream>
#include <vector>
using namespace std;

vector<int> mergeArrays(vector<int>& a, vector<int>& b) {
    int i = 0, j = 0;
    vector<int> result;
    while(i < a.size() && j < b.size()) {
        if(a[i] < b[j]) result.push_back(a[i++]);
        else result.push_back(b[j++]);
    }
    while(i < a.size()) result.push_back(a[i++]);
    while(j < b.size()) result.push_back(b[j++]);
    return result;
}

int main() {
    vector<int> a = {1, 3, 5}, b = {2, 4, 6};
    vector<int> merged = mergeArrays(a, b);
    for(int x : merged) cout << x << " ";
}

