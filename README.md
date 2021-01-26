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


# api/topsecret_split/{stelite_name} (GET | POST)

```http
POST https://operacion-fuego-quesar.azurewebsites.net/api/topsecret_split/{stelite_name} (kenobi, skywalker, sato)
```

### Example Request
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
GET https://operacion-fuego-quesar.azurewebsites.net/api/topsecret_split/{stelite_name} (kenobi, skywalker, sato)
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