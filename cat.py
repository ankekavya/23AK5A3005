def catfood(n,c,u,arr):
    if n == 0:
        return 0
    cf = 0
    rf=c*u
    for i in range(n):
        cf = cf + arr[i]
        if cf >= rf :
            return i+1
    if cf <rf:
        return -1
n=int(input())
c=int(input())
u=int(input())
arr=[]
for i in range(n):
    arr.append(int(input()))
print(catfood(n,c,u,arr))

    
