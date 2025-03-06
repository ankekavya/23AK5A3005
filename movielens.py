import csv 
from collections import defaultdict 
from functools import reduce 
def mapper(row):
    movie_id = row['movieId']
    tags = row['tags'].split('|') if row['tags'] else []
    return movie_id, tags 

def reducer(movie_id, tags_list):
    all_tags = reduce(lambda x, y: x + y, tags_list)
    unique_tags = set(all_tags)
    return movie_id, unique_tags 
 
with open('C:/Users/ankes/OneDrive/Desktop/movielens.csv', newline='') as csvfile:
    reader = csv.DictReader(csvfile)
    mapped_data = map(mapper, reader)
    reduced_data = defaultdict(list)
    for movie_id, tags in mapped_data:
        reduced_data[movie_id].append(tags)
    for movie_id, unique_tags in reduced_data.items():
        result = reducer(movie_id,unique_tags)
        print(f"MovieId: {result[0]}, Tags: {result[1]}")
