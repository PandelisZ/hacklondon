# hacklondon

## place endpoint
Send request to `/api/place?[.......]`

With these optional parameters:
* `price` - number between 1 and 4, with 1 being cheapest (2 default)
* `keyword` - search term i.e. sushi, pizza etc.
* `location` - lat long seperated by comma e.g. `51.5448260,-0.1351860`

Example response:
`{
  "name": "Pizza Express",
  "icon": "https://maps.googleapis.com/maps/api/place/photo?maxwidth=100&photoreference=CmRdAAAA0hf92dacPNx3PRs4NHC8knb4w8-wHgzVOaWQdlJ1tej0mTVJ5t2EdseJZRQLyAGLKxcQB8EPKyiGKKD_D_s6OXqHjOVptjXQMvIad6b5xWzwrIX_jYI8lidcZpR5YwXZEhAMkn-pXM7AEAtKKadE41-nGhRLaSRaOd1GfuXYNBfQ7h_rrSLF-w&key=AIzaSyDA5DX-cT2GxcDlUFqGwmOk8tweI0MjvZQ",
  "location": {
    "lat": 51.5372414,
    "lng": -0.1454804
  },
  "vicinity": "85-87 Parkway, Primrose Hill, London"
}`
