data = { 
    2019: [100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210], 
    2020: [200, 220, 240, 260, 280, 300, 320, 340, 360, 380, 400, 420], 
    2021: [150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260] 
} 
def mapper(record): 
    year, values = record 
    for i, value in enumerate(values): 
        yield (i, (year, value)) 
def reducer(key, values): 
    max_year = None 
    max_value = float("-inf") 
    for year, value in values: 
        if value > max_value: 
            max_year = year 
            max_value = value 
    yield (max_year, max_value) 
def map_reduce(data, mapper, reducer): 
    intermediate_data = [] 
    for year, values in data.items(): 
        intermediate_data.extend(mapper((year, values))) 
    intermediate_data.sort() 
    final_output = [] 
    i = 0 
    while i < len(intermediate_data): 
        key = intermediate_data[i][0] 
        values = [] 
        while i < len(intermediate_data) and intermediate_data[i][0] == key: 
            values.append(intermediate_data[i][1]) 
            i += 1 
        for output in reducer(key, values): 
            final_output.append(output) 
        return final_output 
output = map_reduce(data, mapper, reducer) 
for year, max_value in output: 
    print(f"Maximum consumption in {year}: {max_value}")
