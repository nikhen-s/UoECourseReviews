from bs4 import BeautifulSoup
import requests
import pandas as pd

response = requests.get("https://course.inf.ed.ac.uk/")
html_doc = response.text

soup = BeautifulSoup(html_doc, 'html.parser')
table_rows = soup.find_all('tr')

row_names = table_rows[0].text.split('\n')
row_names = row_names[1:-1]
row_names[0] = "Course_Name"
row_names[7] = "Credits"
row_names.pop(2)
row_names.append("DPMT_Link")

data = []
for each_row in table_rows[1:]:
    new_row = each_row.text.split('\n')[1:-1]
    code = new_row[1]
    new_row.pop(2)
    dpmt_links = each_row.find_all('a')
    new_link = None
    for link in dpmt_links:
        if link.text == code:
            new_link = link.get("href")
            
    new_row.append(new_link)
    data.append(new_row)
    

df = pd.DataFrame(data = data, columns = row_names)
df.to_csv('informatics-course-data.csv', index=False)