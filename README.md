HyperActive
===========

A native JavaScript Hypermedia Client that can interact and retrieve standard formatted objects in a number of hypermedia formats in using a number of ajax connectors

### Hypermedia Formats

+ Json+HAL

### Http connectors

+ jQuery
+ Angular $http


## Installation

```
bower install hypermedia
```

## Example Usage (Restbucks)

Considering we have the following hal+json response from an API entypoint
```
{
    "_links": {
        "self": {
            "href": "/restbucks/api"
        },
        "orders": {
            "href": "/restbucks/api/orders"
        }
    },
    "name": "RestBucks Store",
    "project": "restbucks",
    "version": "0.0.1"
}
```

You would access and setup this in HyperActive via the following methods.

#### Setup

```
var client = new HyperActive('http://localhost/');
client.setConnector('angular', $http);
client.setMediaType('hal');
```

#### Data retrieval (Links)
```
var root;
var orders;
client.get('/restbucks/api').then(function(model) {
  root = client.hyperActivate(model);
});
root.get('orders').then(function(response) {
  orders = orders;
});
```

#### Data retrieval (Embedded)

HyperActive will hide whether the linked resource is embedded or a link so embedded documents will be handled exactly the same as a link.

So for the following example of hal+json

```
{
    "_links": {
        "self": {
            "href": "http://example.org/api/user/matthew"
        }
    }
    "id": "matthew",
    "name": "Matthew Weier O'Phinney",
    "_embedded": {
        "contacts": [
            {
                "_links": {
                    "self": {
                        "href": "http://example.org/api/user/mac_nibblet"
                    }
                },
                "id": "mac_nibblet",
                "name": "Antoine Hedgecock"
            },
            {
                "_links": {
                    "self": {
                        "href": "http://example.org/api/user/spiffyjr"
                    }
                },
                "id": "spiffyjr",
                "name": "Kyle Spraggs"
            }
        ],
        "website": {
            "_links": {
                "self": {
                    "href": "http://example.org/api/locations/mwop"
                }
            },
            "id": "mwop",
            "url": "http://www.mwop.net"
        },
    }
}
```

If you once `HyperActivate` the response:

```
var user = client.hyperActivate(response);
```
You would still use the `get` method to access embedded documents, so that you know you are using each model using exactly the same promise.

```
var contacts;
user.get('contacts').then(function(response) {
  contacts = response;
});
```






