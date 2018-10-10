#!/bin/bash
# mtext="hello"
# mtext2="world"
# mtext3=$mtext" "$mtext2
# echo $mtext3
# echo ${#mtext3}
# echo ${mtext3:2:4}

# array=(1 2 3 4 5)  #定义数组
# array2=(aa bb cc dd ee)  #定义数组
# value=${array[3]}  #找到某一个下标的数，然后赋值
# echo $value  #打印
# value2=${array2[3]}  #找到某一个下标的数，然后赋值
# echo $value2  #打印
# length=${#array[*]}  #获取数组长度
# echo $length

# value3=${array[*]}
# echo $value3
# a=3
# b=4
# if [ $a -eq $b ]
# then 
#     echo "a is equal b"
# elif [ $a -ne $b ]
# then 
#     echo "a is not equal b"
# fi

# for i in {1..10}
# do  
#     echo $i
# done

# for file in $HOME/.bash*
# do
#     echo $file
# done

# echo $HOME
# counter=0
# while [ $counter -lt 5 ]
# do
#     counter=`expr $counter + 1`
#     echo $counter
# done

# while read FILM
# do
#     echo "Yeah! great film the $FILM"
# done
echo "-----Begin------"
git add .
git commit -m $1
echo $1
git push node master
echo "-----End--------"