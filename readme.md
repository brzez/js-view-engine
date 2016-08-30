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



## tokenization process

Read string. Match token regex from [].
If token is matched - run it.

Tokenizer will parse input, consume it (move pointer, or just eat part of string it consumed).
It will return parsed output as string.

The outputs will be later joined to string and returned as a rendered view.

