def searchMatrix(matrix, target):
        cel_len = len(matrix[0]) #amount of cells in each row
        cels = len(matrix) #amount of rows
        
        #we should use binary search to detect if such array that could include such number exists123
        idx = -1
        start = 0
        end = cels - 1

        while (idx == -1 and start <= end):

            mid_idx = (start + end) // 2
            print("This is first : " + str(matrix[mid_idx][0]) + " and this is last of array " + str(matrix[mid_idx][-1]))
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


lasd = [[-10,-10,-8,-7,-6],[-4,-4,-3,-2,0],[1,1,2,2,4]]

print(searchMatrix(lasd, -4))