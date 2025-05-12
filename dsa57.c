#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

void printList(struct Node* head) {
    while (head) {
        printf("%d ", head->data);
        head = head->next;
    }
}

void push(struct Node** head, int data) {
    struct Node* node = malloc(sizeof(struct Node));
    node->data = data;
    node->next = *head;
    *head = node;
}

void reverse(struct Node** head) {
    struct Node *prev = NULL, *current = *head, *next = NULL;
    while (current) {
        next = current->next;
        current->next = prev;
        prev = current;
        current = next;
    }
    *head = prev;
}

int main() {
    struct Node* head = NULL;
    push(&head, 20); push(&head, 15); push(&head, 10); push(&head, 5);
    reverse(&head);
    printList(head);
    return 0;
}
