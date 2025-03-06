from functools import reduce

def map_func(data):
    date, temp = data.split(',')
    temp = int(temp)
    if temp > 25:
        return ("shiny", 1)
    else:
        return ("cool", 1)

def reduce_func(data_dict, data):
    key, value = data
    if key in data_dict:
        data_dict[key] += value
    else:
        data_dict[key] = value
    return data_dict  

def analyze_weather(data):
    mapped_data = map(map_func, data)
    reduced_data = reduce(reduce_func, mapped_data, {})
    return reduced_data

data = ["2023-04-01,30", "2023-04-02,22", "2023-04-03,26", "2023-04-04,18", "2023-04-05,29"]
result = analyze_weather(data)

 print("Weather analysis:")
print(f"Total shiny days: {result['shiny']}")
print(f"Total cool days: {result['cool']}")
