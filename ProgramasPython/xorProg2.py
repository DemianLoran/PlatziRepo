from pwn import xor

KEY1 = 'a6c8b6733c9b22de7bc0253266a3867df55acde8635e19c73313'
KEY2xorKEY3 = 'c1545756687e7573db23aa1c3452a098b71a7fbf0fddddde5fc1'
FLAGxor = '04ee9855208a2cd59091d04767ae47963170d1660df7f56f5faf'

key1_convertida = bytes.fromhex(KEY1)
key3_convertida = bytes.fromhex(KEY2xorKEY3)
flag_convertida = bytes.fromhex(FLAGxor)

print('La flag es %s' %(xor(flag_convertida,key1_convertida,key3_convertida)))


