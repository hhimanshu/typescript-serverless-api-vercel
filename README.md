# TypeScript Serverless APIs on Vercel

This directory is a brief example of using a Custom Build script that can be deployed with Vercel and zero configuration.

## Available APIs
http://localhost:3000/api/address?total=<number>&type=<addressType>

- The value of `number` must be between `1` and `50`(inclusive)  
- The valid values for `addressTypes` are `city`, `zipCode`  

Some examples are  
```shell
http://localhost:3000/api/address?total=20&type=zipCode
http://localhost:3000/api/address?total=10&type=city
```
