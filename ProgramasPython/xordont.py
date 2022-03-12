#In Python, the bytes.fromhex() function can be used to convert hex to bytes. The .hex() instance method can be called on byte strings to get the hex representation.
#In Python, after importing the base64 module with import base64, you can use the base64.b64encode() function. Remember to decode the hex first as the challenge description states.

from Crypto.Util.number import *
import base64
from pwn import xor

encrypted_msg = "0e0b213f26041e480b26217f27342e175d0e070a3c5b103e2526217f27342e175d0e077e263451150104"
encrypted_msg = bytes.fromhex(encrypted_msg)

flag_format = b"crypto{"
key = [o1 ^ o2
       for (o1, o2) in zip(encrypted_msg, flag_format)] + [ord("y")]

flag = []
key_len = len(key)
for i in range(len(encrypted_msg)):
    flag.append(
        encrypted_msg[i] ^ key[i % key_len]
    )
flag = "".join(chr(o) for o in flag)

print("Flag:")
print(flag)
