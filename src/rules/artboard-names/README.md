# ```artboard-names```

## Locates artboard names that are not properly named

In the Natural Design System, artboard names must represent their content. All artboard names must be formatted with the follwoing pattern:

`_section-name` optional: ` -  Description`

### Example

:green_circle: `_dashboard-v1`

:green_circle: `_dashboard-v1 - User data view`

:green_circle: `_products - Search results`

:no_entry_sign: `products` *(missing the underscore)*

:no_entry_sign: `_product catalogue` *(section name has a white space)*

## Configuration

```js
{
  "active": true,
}
```