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
  "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
  "location": {
    "lat": 51.5372414,
    "lng": -0.1454804
  },
  "vicinity": "85-87 Parkway, Primrose Hill, London"
}`
