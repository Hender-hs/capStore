# Capstone API

## USER

### GET get users

```
https://capstone-api.herokuapp.com/users
```

#### Example request

```
curl "https://capstone-api.herokuapp.com/users" \
  -X GET
```

### POST Create account

**Headers**
Content-Type application/json

#### Body JSON

```
  "name": "paulo",
  "email": "paulo@gmail.com",
  "phone": "55995025979",
  "cep": "62509136",
  "password": "123456",
  "location": "Rio de Janeiro",
  "cpf": "111.111.111-11",
  "type": "seller"
```

#### Example request

```
curl "https://capstone-api.herokuapp.com/users" \
  -H 'Content-Type: application/json' \
  -X POST \
  -d '{
  "name": "paulo",
  "email": "paulo@gmail.com",
  "phone": "55995025979",
  "cep": "62509136",
  "password": "123456",
  "location": "Rio de Janeiro",
  "cpf": "111.111.111-11"
  "type": "seller"
}'
```

### POST login

**Headers**
Content-Type application/json

#### Body JSON

```
  "email": "paulo@gmail.com",
  "password": "123456"
```

#### Example request

```
curl "https://kabit-api.herokuapp.com/login/" \
  -H 'Content-Type: application/json' \
  -X POST \
  -d '{
  "email": "paulo@gmail.com",
  "password": "123456"
}
'
```

### PATCH update profile

**Headers**
Content-Type application/json \
Authorization

```
Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjIzNDkzOTgxLCJqdGkiOiI1ZDRiMmYxNGM3M2Q0MjAwYTcwZjQwMTUxNDEzNjI1YiIsInVzZXJfaWQiOjY0OX0.upqN4ro1KBwxz1tbNWCVXiPGcIZaGBKKYaCQxb3L7EI
```

#### Body JSON

```
  "name": "novonome",
  "email": "novoemail@gmail.com",
  "phone": "novonumero"
  "password": "novasenha",
  "cep": "novocep",
```

#### Example request

```
curl "https://kabit-api.herokuapp.com/users/3/" \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjIzNDkzOTgxLCJqdGkiOiI1ZDRiMmYxNGM3M2Q0MjAwYTcwZjQwMTUxNDEzNjI1YiIsInVzZXJfaWQiOjY0OX0.upqN4ro1KBwxz1tbNWCVXiPGcIZaGBKKYaCQxb3L7EI' \
  -X PATCH \
  -d '{
  "name": "novonome",
  "email": "novoemail@gmail.com",
  "phone": "novonumero"
  "password": "novasenha",
  "cep": "novocep",
}'
```

### PRODUCTS

### GET get products

**Headers**
Content-Type application/json \

#### Example request

```
  -X GET \
```

### PATCH update product

**Headers**
Content-Type application/json \
Authorization

```
Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjIzNDkzOTgxLCJqdGkiOiI1ZDRiMmYxNGM3M2Q0MjAwYTcwZjQwMTUxNDEzNjI1YiIsInVzZXJfaWQiOjY0OX0.upqN4ro1KBwxz1tbNWCVXiPGcIZaGBKKYaCQxb3L7EI
```

#### Body JSON

```
  "quantity": "9"
```

#### Example request

```
curl "https://kabit-api.herokuapp.com/products/3/" \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjIzNDkzOTgxLCJqdGkiOiI1ZDRiMmYxNGM3M2Q0MjAwYTcwZjQwMTUxNDEzNjI1YiIsInVzZXJfaWQiOjY0OX0.upqN4ro1KBwxz1tbNWCVXiPGcIZaGBKKYaCQxb3L7EI' \
  -X PATCH \
  -d '{
  "quantity": "9"
}'
```

### POST create product

**Headers**
Content-Type application/json \
Authorization

```
Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjIzNDkzOTgxLCJqdGkiOiI1ZDRiMmYxNGM3M2Q0MjAwYTcwZjQwMTUxNDEzNjI1YiIsInVzZXJfaWQiOjY0OX0.upqN4ro1KBwxz1tbNWCVXiPGcIZaGBKKYaCQxb3L7EI
```

#### Body JSON

```
   "name": "Gigabyte B360M Aorus Gaming3 Lga 1151 Ddr4",
    "price": 930,
    "category": "Placa Mãe",
    "id": 2,
    "url": "https://http2.mlstatic.com/D_NQ_NP_620380-MLB32460626041_102019-O.webp",
    "quantity": 10,
    "sellerId": 1,
    "feedback": [
      {
        "user": "Paulo",
        "rating": 4,
        "comment": "Gostei muito!",
        "likes": 0
      },
      {
        "user": "Filipe Gutierry",
        "rating": 1,
        "comment": "Meu deus que placa bosta!",
        "likes": 3
      }
    ]
```

#### Example request

```
curl "https://kabit-api.herokuapp.com/products/3/" \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjIzNDkzOTgxLCJqdGkiOiI1ZDRiMmYxNGM3M2Q0MjAwYTcwZjQwMTUxNDEzNjI1YiIsInVzZXJfaWQiOjY0OX0.upqN4ro1KBwxz1tbNWCVXiPGcIZaGBKKYaCQxb3L7EI' \
  -X PATCH \
  -d '{
   "name": "Gigabyte B360M Aorus Gaming3 Lga 1151 Ddr4",
    "price": 930,
    "category": "Placa Mãe",
    "id": 2,
    "url": "https://http2.mlstatic.com/D_NQ_NP_620380-MLB32460626041_102019-O.webp",
    "quantity": 10,
    "sellerId": 1,
    "feedback": [
      {
        "user": "Paulo",
        "rating": 4,
        "comment": "Gostei muito!",
        "likes": 0
      },
      {
        "user": "Filipe Gutierry",
        "rating": 1,
        "comment": "Meu deus que placa bosta!",
        "likes": 3
      }
    ]
}'
```

### COMPUTERS

### GET get computers

**Headers**
Content-Type application/json \

#### Example request

```
curl "https://kabit-api.herokuapp.com/computers/3/" \
  -X GET \
```

### PATCH update computers

**Headers**
Content-Type application/json \
Authorization

```
Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjIzNDkzOTgxLCJqdGkiOiI1ZDRiMmYxNGM3M2Q0MjAwYTcwZjQwMTUxNDEzNjI1YiIsInVzZXJfaWQiOjY0OX0.upqN4ro1KBwxz1tbNWCVXiPGcIZaGBKKYaCQxb3L7EI
```

#### Body JSON

```
  "memory": "5"
```

#### Example request

```
curl "https://kabit-api.herokuapp.com/products/3/" \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjIzNDkzOTgxLCJqdGkiOiI1ZDRiMmYxNGM3M2Q0MjAwYTcwZjQwMTUxNDEzNjI1YiIsInVzZXJfaWQiOjY0OX0.upqN4ro1KBwxz1tbNWCVXiPGcIZaGBKKYaCQxb3L7EI' \
  -X PATCH \
  -d '{
  "memory": "5"
}'
```

### POST create computer

**Headers**
Content-Type application/json \
Authorization

```
Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjIzNDkzOTgxLCJqdGkiOiI1ZDRiMmYxNGM3M2Q0MjAwYTcwZjQwMTUxNDEzNjI1YiIsInVzZXJfaWQiOjY0OX0.upqN4ro1KBwxz1tbNWCVXiPGcIZaGBKKYaCQxb3L7EI
```

#### Body JSON

```
    "title": "Setup Desenvolvedor",
    "description": "Um computador com as configurações recomendadas para alguém que atua como desenvolvedor",
    "userId": 3,
    "owner": "Juan",
    "id": 1,
    "case": 6,
    "motherboard": 1,
    "cpu": 2,
    "memory": 3,
    "ram": 4,
    "videocard": 5,
    "cooler": 7,
    "power": 8
```

#### Example request

```
curl "https://kabit-api.herokuapp.com/products/3/" \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjIzNDkzOTgxLCJqdGkiOiI1ZDRiMmYxNGM3M2Q0MjAwYTcwZjQwMTUxNDEzNjI1YiIsInVzZXJfaWQiOjY0OX0.upqN4ro1KBwxz1tbNWCVXiPGcIZaGBKKYaCQxb3L7EI' \
  -X POST \
  -d '{
    "title": "Setup Desenvolvedor",
    "description": "Um computador com as configurações recomendadas para alguém que atua como desenvolvedor",
    "userId": 3,
    "owner": "Juan",
    "id": 1,
    "case": 6,
    "motherboard": 1,
    "cpu": 2,
    "memory": 3,
    "ram": 4,
    "videocard": 5,
    "cooler": 7,
    "power": 8
}'
```

### DELETE delete computers

**Headers**
Content-Type application/json \
Authorization

```
Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjIzNDkzOTgxLCJqdGkiOiI1ZDRiMmYxNGM3M2Q0MjAwYTcwZjQwMTUxNDEzNjI1YiIsInVzZXJfaWQiOjY0OX0.upqN4ro1KBwxz1tbNWCVXiPGcIZaGBKKYaCQxb3L7EI
```

#### Example request

```
curl "https://kabit-api.herokuapp.com/computers/3/" \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjIzNDkzOTgxLCJqdGkiOiI1ZDRiMmYxNGM3M2Q0MjAwYTcwZjQwMTUxNDEzNjI1YiIsInVzZXJfaWQiOjY0OX0.upqN4ro1KBwxz1tbNWCVXiPGcIZaGBKKYaCQxb3L7EI' \
  -X DELETE \
```
