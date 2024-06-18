"""
molecular_weight_calculator.py
Written by Kelsey Corro
Date written June 15, 2024
Date/Time last modified: 

Purpose: Given a chemical formula, return the molecular weight.
Example:
    Input: H2O
    Output: 18.015
    Reason: Molecular weight of H is 1.0079
            Molecular weight of O is 15.999
            H2O = 1.0079 * 2 + 15.999 = 18.0148

Atomic Weights are from: https://www.periodictable.one/elements/
"""

# import text file that contains molecular weight of elements
# create a dictionary 

#open the text file  
with open('element_mw.txt', 'r') as f: 
  #read the text file into a list of lines 
  lines = f.readlines() 
 
#create an empty dictionary 
file_dict = {} 
 
#loop through the lines in the text file  
for line in lines: 
  #split the line on ':' 
  key, value = line.split(':') 
  #strip the whitespace 
  key = key.strip() 
  value = value.strip() 
  #add the key, value pair to the dictionary 
  file_dict[key] = value 
   
#print the dictionary 
print(file_dict) 