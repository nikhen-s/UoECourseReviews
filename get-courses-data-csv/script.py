from bs4 import BeautifulSoup
import requests
import pandas as pd

response = requests.get("https://course.inf.ed.ac.uk/")
html_doc = response.text

soup = BeautifulSoup(html_doc, 'html.parser')
table_rows = soup.find_all('tr')

row_names = table_rows[0].text.split('\n')
row_names = row_names[1:-1]

data = []
for each_row in table_rows[1:]:
    data.append(each_row.text.split('\n')[1:-1])

df = pd.DataFrame(data = data, columns = row_names)
df.to_csv('informatics-course-data.csv')


