# Varying Degrees

Client repository for New America's [Varying Degrees project](https://www.newamerica.org/in-depth/varying-degrees/). 
Backend code lives [here](https://github.com/newamericafoundation/varying-degrees-backend)

## Getting Started

1. clone repo
2. run ``` npm install ```

## Running Locally

The project can be run locally by running the ``` npm run start-dev ``` script.  
The backend must also be running locally in order to support data fetches.  Alternatively, the [dbPath](https://github.com/newamericafoundation/varying-degrees/blob/master/projects/varying_degrees/actions/index.js#L5) can be changed to the production backend that is hosted on heroku.

## Creating a Production Build
Running ``` npm run build ``` will emit two files ([varying_degrees-submodule.js](https://s3.console.aws.amazon.com/s3/object/na-data-projects/projects/varying_degrees-submodule.js?region=us-east-1&tab=overview) and [varyingdegrees-emebed.js](https://s3.console.aws.amazon.com/s3/object/varyingdegrees-embed/varying_degrees-embed.js?region=us-east-1&tab=overview) and upload them to the appropriate buckets in S3.

The embed script is used to power the https://varyingdegrees.newamerica.org/, which is used for creating iframes for individual questions/topics from the survey.

The submodule script is added into the [varying degrees bundled script](https://github.com/newamericafoundation/newamerica-data-projects/tree/master/src/js/projects/varying_degrees) in the data-projects repo and is used to include chart modules directly into the org website's data viz block template.

