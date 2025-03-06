import csv 
from functools import reduce 
def mapper(row):
    title, author, published_year, author_frequency, language, num_pages = row
    return published_year, 1 
def reducer(key, values):
    return key, sum(values)
input_file = 'C://Users/ankes/OneDrive/Desktop/BDA LAB/books.csv'  
with open(input_file, 'r') as file:
    reader = csv.reader(file)
    next(reader)
    lines = list(reader)
mapped_data = list(map(mapper, lines))
grouped_data = {}
for key, value in mapped_data:
    if key not in grouped_data:
        grouped_data[key] = []
    grouped_data[key].append(value)
reduced_data = [(key, reduce(lambda x, y: x + y, values)) for key, values in grouped_data.items()]
reduced_data.sort(key=lambda x: x[0])
for key, value in reduced_data:
    print(f"Year: {key}\tFrequency: {value}")
