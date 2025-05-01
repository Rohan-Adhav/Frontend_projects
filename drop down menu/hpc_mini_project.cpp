#include <mpi.h>
#include <stdio.h>
#include <stdlib.h>

void quicksort(int *arr, int left, int right) {
    if (left < right) {
        int pivot = arr[right];
        int i = left - 1, j, temp;

        for (j = left; j < right; j++) {
            if (arr[j] < pivot) {
                i++;
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        temp = arr[i + 1];
        arr[i + 1] = arr[right];
        arr[right] = temp;
        
        int partitionIndex = i + 1;
        quicksort(arr, left, partitionIndex - 1);
        quicksort(arr, partitionIndex + 1, right);
    }
}

int main(int argc, char *argv[]) {
    int rank, size, n = 10;
    int *data = NULL, *sub_data = NULL;
    int i, sub_size;

    MPI_Init(&argc, &argv);
    MPI_Comm_rank(MPI_COMM_WORLD, &rank);
    MPI_Comm_size(MPI_COMM_WORLD, &size);

    if (rank == 0) {
        data = (int *)malloc(n * sizeof(int));
        for (i = 0; i < n; i++)
            data[i] = rand() % 100;

        printf("Unsorted array: ");
        for (i = 0; i < n; i++)
            printf("%d ", data[i]);
        printf("\n");
    }

    sub_size = n / size;
    sub_data = (int *)malloc(sub_size * sizeof(int));

    MPI_Scatter(data, sub_size, MPI_INT, sub_data, sub_size, MPI_INT, 0, MPI_COMM_WORLD);

    quicksort(sub_data, 0, sub_size - 1);

    MPI_Gather(sub_data, sub_size, MPI_INT, data, sub_size, MPI_INT, 0, MPI_COMM_WORLD);

    if (rank == 0) {
        printf("Sorted array: ");
        for (i = 0; i < n; i++)
            printf("%d ", data[i]);
        printf("\n");
        free(data);
    }

    free(sub_data);
    MPI_Finalize();
    return 0;
}
