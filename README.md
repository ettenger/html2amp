## Run this shiz
```
$ npm i -g serverless
$ npm run dev
```

## Local Endpoints
http://localhost:3000/parse

http://localhost:3000/amp

### Try parsing something
http://localhost:3000/parse?url=https://www.mrmoneymustache.com/2013/04/22/curing-your-clown-like-car-habit/

### Try generating an AMP page
http://localhost:3000/amp?url=https://www.websitebuilderexpert.com/building-websites/how-to-make-money-from-a-website/

## Deployed Dev Endpoints
https://ko334eoxac.execute-api.us-east-1.amazonaws.com/dev/amp?url=

## Deployed Prod Endpoints
https://3rxg5eils2.execute-api.us-east-1.amazonaws.com/prod/amp?url=

## WTF is this based on?
Based on the (MIT-licensed) [Mercury Parser](https://github.com/postlight/mercury-parser), which they use to power their own [AMP converter](https://mercury.postlight.com/amp-converter/).
