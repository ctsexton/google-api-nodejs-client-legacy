# google-api-nodejs-client-legacy
DON'T DELETE UNTIL CONFIRMED stem-ensemble does not use this.

This repository is based on a snapshot of our fork of the google-api-nodejs-client, tag v2.1.3, with a custom youtubePartner API patch applied. This is used in stem-ensemble to run Youtube delivery jobs.

The youtubePartner API is generated from the package.json generate script:

```
"generate": "node scripts/generate.js 'https://www.googleapis.com/discovery/v1/apis/youtubePartner/v1/rest'"
```

The prepare script has been removed so the /apis directory is not ovewritten upon install in the app. To make youtubePartner API available to the package, youtubePartner was added as an export in /apis/index.js:

```
'youtubePartner': requireAPI('youtubePartner')
```

To install googleapis package in stem-ensemble, run:

```
yard add https://github.com/stems/google-api-nodejs-client-legacy/tarball/master
```

To include in a component:

```
import google from 'googleapis'
```

Currently, this has been added to stem-ensemble in both /services/api and servcies/super-api.
