# operacion-fuego-quesar


# api/topsecret

```http
POST https://operacion-fuego-quesar.azurewebsites.net/api/topsecret
```

### Example Request
### Body
```json
{
  "satellites": [
    {
      "name": "kenobi",
      "distance": 100.0,
      "message": ["este", "", "", "mensaje", ""]
    },
    {
      "name": "skywalker",
      "distance": 115.5,
      "message": ["", "es", "", "", "secreto"]
    },
    {
      "name": "sato",
      "distance": 142.7,
      "message": ["este", "", "un", "", ""]
    }
  ]
}
```
### Response
```json
{
  "position": {
    "x": -487.29,
    "y": 1557.01
  },
  "message": "este es un mensaje secreto"
}
```


# api/topsecret_split/:id (GET | POST)

```http
POST https://operacion-fuego-quesar.azurewebsites.net/api/topsecret_split/:id 
```

### Example Request

### :id
```text
kenobi | skywalker | sato
```
### Body
```json
{
  "distance": 100.0,
  "message": ["este", "", "", "mensaje", ""]
}
```
### Response
```json
{
  "position": {
    "x": -487.29,
    "y": 1557.01
  },
  "message": "este es un mensaje secreto"
}
```

```http
GET https://operacion-fuego-quesar.azurewebsites.net/api/topsecret_split/:id 
```
### Response
```json
{
  "position": {
    "x": -487.29,
    "y": 1557.01
  },
  "message": "este es un mensaje secreto"
}
```