#Listas
#Sempre utilizam colchetes [ ... ]
lista_vazia = []
print(type(lista_vazia))

lista_de_compras = ['maçâ', 'banana', 'uva']
print(lista_de_compras)

del lista_de_compras[1] #Ja tem banana
print(lista_de_compras)

lista_de_numeros = [1, 3, 9, 2, 77, 8000, 77, 123]
print(lista_de_numeros)
lista_de_numeros.remove(8000)
print(lista_de_numeros)
lista_de_numeros.remove(77)
print(lista_de_numeros)
lista_de_numeros.remove(77)
print(lista_de_numeros)

lista_de_numeros.sort() #Organização da lista
print(lista_de_numeros)
lista_de_numeros.reverse() #Ao contrario
print(lista_de_numeros)

lista_de_numeros.append(1)
print(lista_de_numeros)
print('O número 1 aparece', lista_de_numeros.count(1), 'vezes')
print('O número 123 está presente na casa:', lista_de_numeros.index(123))
lista_de_numeros.insert(3,101)
print(lista_de_numeros)

#Se quiser copiar uma lista, simpresmente criar um lista1 = lista2 n adianta
numeros2 = lista_de_numeros[:]
numeros3 = lista_de_numeros.copy()
numeros4 = list(lista_de_numeros)
#Esses são substitutos q ajudam na hora de copiar listas...

#List Comprehension
list_num = [x**2 for x in range(20)]
print(list_num)

list_num_par = [x for x in list_num if x % 2 == 0]
print(list_num_par)

letras = [letra for letra in 'Python']
print(letras)