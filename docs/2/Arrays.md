# Arrays
  `所属包：java.util.Arrays`

## hashCode
  - 返回基于数组内容生成的哈希戳
```java
  int[] arr = new int[5];
  System.out.println(Arrays.hashCode(arr));
```

## binarySearch
  - 基于二分法查找数组元素
  - 如果没有找到则返回一个负数
::: tip
    binarySearch(int[] a, int key) 
    使用二分搜索法来搜索指定的 int 型数组，以获得指定的值

	binarySearch(int[] a, int fromIndex, int toIndex, int key) 
    使用二分搜索法来搜索指定的 int 型数组的范围，以获得指定的值
:::

```java
int[] arr = new int[3];
arr[0] = 100;
arr[1] = 200;
arr[2] = 300;
System.out.println(Arrays.binarySearch(arr, 200));  // 1
```

## copyOf
  - 复制数组，修改副本数据不会影响源数组
  - 如果长度，则指定为默认值
::: tip
copyOf(int[] original, int newLength) 
复制指定的数组，截取或用 0 填充（如有必要），以使副本具有指定的长度
:::
```java
int[] arr = {1,2,3,4};
int[] arr2 = Arrays.copyOf(arr,5);  // 1,2,3,4,0
```