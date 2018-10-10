#!/bin/bash
echo "Hello World"

a=3
b=4
val=`expr $a + $b`
echo "Total Value : $val" 

val=`expr $a - $b`
echo "Total Value : $val" 

val=`expr $a \* $b`
echo "Total Value : $val" 

val=`expr $a / $b`
echo "Total Value : $val" 