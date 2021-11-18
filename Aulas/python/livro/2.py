#Declaração multipla:
disciplina1, disciplina2, disciplina3 = 'quimica', 'estatística', 'matemática'
print('Odeio', disciplina1)
print('Odeio', disciplina2)
print('Odeio', disciplina3)

varstr = 'Estudo'
print(varstr[0])
print(varstr[1])
print(varstr[2])
print(varstr[3])
print(varstr[4])
print(varstr[5])

print('A letra T é a número:', varstr.find('t') + 1)

#Manipulação de strings

frase = 'Python é uma linguagem muito foda'
print(frase[2:])
print(frase[29:])
print(frase[-4:].upper())
print(frase[::1])
print(frase[::2])
print(frase[::3])
print(frase[::-1])

print(frase.split())
print(len(frase))