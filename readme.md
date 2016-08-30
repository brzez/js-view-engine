# Spec:

## Variables
*All variables are escaped.*
```
{{variable}} -> displays `variable`
```


```
{{object.object.variable}} -> deep access
```    

*Unescaped/raw output*

```
{{@ variable}}
```

## loops

```js
var some_array = [
    {name: 'Tom'},
    {name: 'Foo'}
];
```

```
{{% some_array}}
  {{name}}
{{%}}
```



