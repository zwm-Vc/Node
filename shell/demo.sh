#!/bin/bash
mtext="hello"
mtext2="world"
mtext3=$mtext" "$mtext2
echo $mtext3
echo ${#mtext3}
echo ${mtext3:2:4}

array=(1 2 3 4 5)  #定义数组
array2=(aa bb cc dd ee)  #定义数组
value=${array[3]}  #找到某一个下标的数，然后赋值
echo $value  #打印
value2=${array2[3]}  #找到某一个下标的数，然后赋值
echo $value2  #打印
length=${#array[*]}  #获取数组长度
echo $length

value3=${array[*]}
echo $value3