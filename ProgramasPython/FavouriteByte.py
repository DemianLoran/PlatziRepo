#In Python, the bytes.fromhex() function can be used to convert hex to bytes. The .hex() instance method can be called on byte strings to get the hex representation.
#In Python, after importing the base64 module with import base64, you can use the base64.b64encode() function. Remember to decode the hex first as the challenge description states.
#import base64

from pwn import xor

clave='73626960647f6b206821204f21254f7d694f7624662065622127234f726927756d'
convertida=bytes.fromhex(clave)
for i in range(20):
    flag=xor(convertida,i)
    decodeflag=flag.decode("UTF-8")
    if decodeflag[0:6] == 'crypto':
        print('la flag es: %s' %decodeflag)
        exit()

#crypto{0x10_15_my_f4v0ur173_by7e}
