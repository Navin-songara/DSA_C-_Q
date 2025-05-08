#include <iostream>
using namespace std;

class Stack {
    int *arr, top, size;
public:
    Stack(int size) {
        this->size = size;
        arr = new int[size];
        top = -1;
    }
    void push(int x) {
        if(top == size - 1) {
            cout << "Stack Overflow\n";
            return;
        }
        arr[++top] = x;
    }
    int pop() {
        if(top == -1) {
            cout << "Stack Underflow\n";
            return -1;
        }
        return arr[top--];
    }
};

int main() {
    Stack s(5);
    s.push(10);
    s.push(20);
    cout << s.pop() << endl;
}
