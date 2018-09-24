# free-agents-api

To generate a key

`node -e "console.log(require('crypto').randomBytes(20).toString('hex'))"`

`export KEY=f1949639e4e8ba9bda92bee97efe7d6d31566cb3`
or

add key to your bash profile
`cd ~`
`open -e .bash_profile`
`export KEY=f1949639e4e8ba9bda92bee97efe7d6d31566cb3`
`source ~/.bash_profile`

## Open SSL
`openssl req -newkey rsa:2048 -nodes -keyout keytemp.pem -x509 -days 365 -out cert.pem`
`openssl rsa -in keytemp.pem -out key.pem`

copy key.pem and cert.pem to config folder

### Tutorial
`https://itnext.io/building-restful-web-apis-with-node-js-express-mongodb-and-typescript-part-1-2-195bdaf129cf`