#!/usr/bin/env python3
import sys
import this

if sys.version_info.major == 2:
	print("You are running Python 2, which is no longer supported. Please update to Python 3.")

ords = [81, 64, 75, 66, 70, 93, 73, 72, 1, 92, 109, 2, 84, 109, 66, 75, 70, 90, 2, 92, 79]

print("Here is your flag:")
print("".join(chr(o ^ 0x32) for o in ords))


array=[99, 114, 121, 112, 116, 111, 123, 65, 83, 67, 73, 73, 95, 112, 114, 49, 110, 116, 52, 98, 108, 51, 125];
string=''
for i in array:
	string+=chr(i)
print(string)
#con ord() se hace el proceso inverso.

'''
In Python, the bytes.fromhex() function can be used to convert hex to bytes. The .hex() instance method can be called on byte strings to get the hex representation.
'''
clave='63727970746f7b596f755f77696c6c5f62655f776f726b696e675f776974685f6865785f737472696e67735f615f6c6f747d'
convertida=bytes.fromhex(clave)
print('la flag de hexademcimal a bytes es: %s' %convertida)

''' In Python, after importing the base64 module with import base64, you can use the base64.b64encode() function. Remember to decode the hex first as the challenge description states.'''
import base64

hash='72bca9b68fc16ac7beeb8f849dca1d8a783e8acf9679bf9269f7bf'

convertida=bytes.fromhex(hash)
print('En bytes es: %s' %convertida)

enbase64=base64.b64encode(convertida)
print('la flag es: %s' %enbase64)

enbase64_str=""
enbase64_str=enbase64.decode("utf-8")
transf=enbase64_str.replace("+","_")
transf=transf.replace("/","{")
print(transf)
'''
En bytes es: b'r\xbc\xa9\xb6\x8f\xc1j\xc7\xbe\xeb\x8f\x84\x9d\xca\x1d\x8ax>\x8a\xcf\x96y\xbf\x92i\xf7\xbf'
la flag es: b'crypto/Base+64+Encoding+is+Web+Safe/'
crypto{Base_64_Encoding_is_Web_Safe}''' 
