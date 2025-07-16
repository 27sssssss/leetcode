def searchMatrix(matrix, target):
        cel_len = len(matrix[0]) #amount of cells in each row
        cels = len(matrix) #amount of rows
        
        #we should use binary search to detect if such array that could include such number exists
        idx = -1
        start = 0
        end = cels - 1
        if (target < start): #dead case
            idx = 0
        while (idx == -1 and start <= end):
            mid_idx = (start + end) // 2
            if (matrix[mid_idx][0] <= target and target <= matrix[mid_idx][-1]):
                idx = mid_idx
            elif (matrix[mid_idx][0] > target):
                end = mid_idx - 1
            else:
                start = mid_idx + 1
        
        start = 0
        end = cel_len - 1
        cel = matrix[idx]
        print("This is idx " + str(idx))
        print("This is start idx " + str(start))
        print("This is end idx " + str(end))

        while (start <= end):
            mid_idx = (start + end) // 2
            print(cel[mid_idx])
            if (cel[mid_idx] == target):
                 return True
            elif(cel[mid_idx] > target):
                 end = mid_idx - 1
            else:
                 start = mid_idx + 1

        return False


lasd = [[1, 3, 5, 7, 9, 11],
    [15, 17, 19, 22, 24, 27],
    [30, 33, 36, 40, 45, 50],
    [55, 60, 66, 73, 81, 90],
    [100, 111, 123, 136, 150, 165]]

print(searchMatrix(lasd, 50))