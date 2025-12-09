import argparse;
import os

parser = argparse.ArgumentParser(description="AI Finance Tool")

parser.add_argument('--s', type=str,default='hello world', help='root path of the data file')

args = parser.parse_args()

print(args.s)

parser.add_argument('--number', type=int, default=3000, help='the number of gernerating items')
parser.add_argument('--root_path', type=str, default='./data/', help='root path of the data file')
parser.add_argument('--data_name', type=str, default='bank_card_data.csv', help='data csy file')

args = parser.parse_args()

file_name = os.path.join(args.root_path, args.data_name)
with open(file_name,'w', encoding='utf-8') as file:
    file.write('Sample Data')
    content = file.read()

print(args.number)
print(args.root_path)
print(args.data_name)