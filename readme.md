insert

curl 'http://localhost:3000/api/graphql' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: http://localhost:3000' --data-binary '{"query":"mutation ($data: QuantityCreateInput!) {\n  item: createQuantity(data:$data ) {\n    id\n    label: id    \n    __typename  \n  }\n}\n \n","variables":{"data":{"area":"area","segment":"segment","quantity":34}}}' --compressed

mutation ($data: QuantityCreateInput!) {
  item: createQuantity(data:$data ) {
    id
    label: id    
    __typename  
  }
}

{
  "data":{
  	"area": "area",
    "segment": "segment",
    "quantity": 34
	}
}
 

select
curl 'http://localhost:3000/api/graphql' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: http://localhost:3000' --data-binary '{"query":"query (\n  $where: QuantityWhereInput, \n  $take: Int!, \n  $skip: Int!, \n  $orderBy: [QuantityOrderByInput!]) \n  {  \n    items: quantities(where: $where, take: $take, skip: $skip, orderBy: $orderBy) \n    {    \n      id    \n      area    \n      segment    \n      created_at\n    }  \n  }","variables":{"where":{"area":{"equals":"area"}},"take":10,"skip":0,"orderBy":[{"created_at":"desc"}]}}' --compressed

query (
  $where: QuantityWhereInput, 
  $take: Int!, 
  $skip: Int!, 
  $orderBy: [QuantityOrderByInput!]) 
  {  
    items: quantities(where: $where, take: $take, skip: $skip, orderBy: $orderBy) 
    {    
      id    
      area    
      segment    
      created_at
    }  
  }

  {

   "where": {"area": {"equals": "area"}},
    "take": 10,
    "skip": 0,
    "orderBy": [
      {
        "created_at": "desc"
      }
    ]

}