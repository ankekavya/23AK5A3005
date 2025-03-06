from collections import defaultdict 
import csv 
from multiprocessing import Pool 

def mapper(row):
    country = row["country"]
    product = row["product"]
    return (country, product) 

def reducer(country_product_pairs):
    country_product_count = defaultdict(int)
    for country, product in country_product_pairs:
        country_product_count[(country, product)] += 1
    return country_product_count 

def load_sales_data(sales_data):
    sales_data = []
    with open('C://Users/ankes/OneDrive/Desktop/BDA LAB/sales_data.csv', "r") as f:
        reader = csv.DictReader(f)
        for row in reader:
            sales_data.append(row)
        return sales_data 
def map_reduce_sales_data(filename):
    sales_data = load_sales_data(filename)
    with Pool() as pool:
        country_product_pairs = pool.map(mapper, sales_data)
        country_product_count = reducer(country_product_pairs)
        return country_product_count 
if __name__ == "__main__":
    filename = "sales_data"
    country_product_count = map_reduce_sales_data(filename)
    for (country, product), count in country_product_count.items():
        print(f"Country: {country}, Product: {product}, Count: {count}")
