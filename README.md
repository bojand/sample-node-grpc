# DigitalOcean App Platform gRPC Demo

Sample Node.js gRPC DigitalOcean App Platform application

## Instructions

Clone the repo.

Adjust `./do/app.yaml` to match up your GitHub URLs.

Create app using [doctl](https://github.com/digitalocean/doctl):

```sh
doctl apps create --spec .do/app.yaml
```
