#Tuplas
#Se utilizam parênteses ( ... ), mas não é um requisito obrigatório
#São imutaveis, diferente das listas de dos dicionários, e não podem conter múltiplos tipos de dados

tupla1 = 'a', 'b', 'c', 'd', 'e' #Sem parenteses
print(tupla1)
print(type(tupla1))

tupla2 = ('a', 'b', 'c', 'd', 'e') #Com parenteses
print(tupla2)
print(type(tupla2))

#Deve-se utilizar tuplas em algoritimos onde a imutabilidade é um requisito importante
#Para garantir a integridade dos dados

#Não é possivel modificar a tupla diretamente, podemos usar o .count e .index
#Não podemos deletar os elementos individualmente, mas podemos deletar a tupla inteira

del tupla2

#Podemos tranformar ela em lista e fazer as alterações nescessarias e depois tranforma-la em tupla de novo
list1 = list(tupla1)
list1.append('f')
tupla1 = tuple(list1)
print(tupla1)