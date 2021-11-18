#Dicionários
#Sempre se utilizam chaves { ... }
#Exemplo de diferença List / Dict

salario_list = ['Pedro', 1000, 'Carlos', 750, 'Ricardo', 2000, 'Leticia', 2500]
print(salario_list)
print(type(salario_list))

salario_dict = {'Pedro':1000, 'Carlos':750, 'Ricardo':2000, 'Leticia':2500}
print(salario_dict)
print(type(salario_dict))
print(salario_dict['Pedro'])
print(salario_dict['Leticia'])

print(len(salario_dict))

salario_dict['Rafael'] = 1200
print(salario_dict)

#Ferramentas:
print(salario_dict.keys())
print(salario_dict.values())

salario2_dict = {'Gerobaldo':4000, 'Grizelda':1200000}
salario_dict.update(salario2_dict)
print(salario_dict)

del salario_dict['Grizelda']
print(salario_dict)

salario_dict.clear() #Dicionario vazio
del salario_dict #Variavel deletada

dic1 = {'c1':1, 'c2': 77, 'c3': {'d1': 10, 'd2': 5, 'd3': 17}}
print(dic1['c3'])