from pwn import *
str1='label'
integer=13
flag=''
j=0

for i in str1:
	A= ord(str1[j])
	var1=A ^ integer
	var2=chr(var1)
	flag+=var2
	j+=1

print ('crypto{%s}' %flag)

#con xor() 
#print (xor(str1,integer))

