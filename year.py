year = int(input(" "))
if year % 4 == 0:
    if year % 100 == 0:
        if year % 400 == 0:  # Fixed: using modulo operator instead of bitwise AND
            print("leap year")
        else:
            print("not a leap year")
    else:
        print("leap year")
else:
    print("not a leap year")
