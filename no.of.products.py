import csv
from collections import defaultdict
def mapper(file_path):
    mapped_data = []
    with open(file_path, 'r') as file:
        reader = csv.reader(file)
        next(reader)
        for row in reader:
            country = row[6]
            mapped_data.append((country, 1))
    return mapped_data

def reducer(mapped_data):
    reduced_data = defaultdict(int)
    for country, count in mapped_data:
        reduced_data[country] += count
    return reduced_data
def main():
    file_path = 'C://Users/ankes/OneDrive/Desktop/BDA LAB/countofproducts.csv'
    mapped_data = mapper(file_path)
    reduced_data = reducer(mapped_data)
    print("\nTotal Products Sold by Country:")
    for country, total in reduced_data.items():
        print(f"{country}: {total}")
if __name__ == "__main__":
    main()
