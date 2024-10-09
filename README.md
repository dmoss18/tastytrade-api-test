# tastytrade-api-test

## Setup
Create a file called `.env` the root of this project with the following data in it:

```
BASE_URL_PRODUCTION=<BASE_URL_PRODUCTION>
PRODUCTION_EMAIL=<PRODUCTION_EMAIL>
PRODUCTION_PASSWORD=<PRODUCTION_PASSWORD>
PRODUCTION_ACCT_MRGN=<PRODUCTION_ACCT_MRGN>
BASE_URL_SANDBOX=<BASE_URL_SANDBOX>
SANDBOX_EMAIL=<SANDBOX_EMAIL>
SANDBOX_PASSWORD=<SANDBOX_PASSWORD>
SANDBOX_ACCT_MRGN=<SANDBOX_ACCT_MRGN>
```
Replace all the `<values>` with actual values.

Then run `npm install`

## Running
`node test.js`