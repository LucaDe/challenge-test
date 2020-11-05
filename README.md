## Coding challenge

Welcome to our coding challenge. Thanks for your interest and your time in participating. In case of any questions feel free to reach out directly to Luca (luca.demmel@cosi-group.com).

Generally if there are missing infos, it's ok to make assumptions (e.g. on date formatting etc.).

## Overview

The repository contains a basic Typescript NestJs starter project. You can fork the codesandbox to push your changes or export the box to new a new private github repo. Please provide access to luca.demmel@cosi-group.com in that case.

### Task 1

Create a new nest module (+ expose an api) for creating pin code which allow the our guests to enter their room. The exposed api should accept a reservation and take care of the pin code generation.

Scenario:
We have 2 properties available:
1 in Munich => Property id DE_MU_001
1 in Berlin => Property id DE_BE_001
Both properties have a different hardware provider for the keysystem installed. DE_MU_001 runs on GLUTZ and DE_BE_001 runs on SAG. Luckily both systems expose simple rest apis that we can utilize to generate pin codes dynamically.

Glutz API description:
Please note: This is a simplified mocked dummy api
The glutz system works with a user based access system. Before creating a pin code we need to create a user on the system. Then we can grant access to a specifc unit. We can also need to specify the pin code ourselves (random 4-digits are fine here)
Base url: https://api.mocki.io/v1/291cd555
POST /user
Expected body { name: string }
Creates a new user on the pin system
GET /user/{userId}
Gets a specific user by its id
POST /grant-access
Expected body { userId: string, unitId: string, validFrom: Date, validTo: Date, pinCode: string }
Grants access to a specifc unit (identified via unitId) for a given timeframe with the given pinCode.

SAG API description
The sag system does not allow custom pincodes and generates them automatically based on the validFrom, validTo and unitId.
Please note: This is a simplified mocked json dummy api
Base url: https://api.mocki.io/v1/fc467680
POST /pin-code
Expected body { validFrom: Date, validTo: Date, unitId: string }
Returns a new pin code for a given timeframe and a specific unit

A reservation consists of the following properties
{
reservationId: string;
guestName: string;
arrival: Date;
departure: Date;
propertyId: string;
}

### Task 2

Apaleo is a property management system and is the main entry point for new reservations (coming from Booking.com, Expedia, AirBnB, our website, etc.). We can configure it to send webhooks to our systems to process reservations.
A junior developer added a new module (ApaleoModule), which should be responsible for handling such a webhook. His/Her task was to listen for those webhooks, deduplicate them, send a slack notification and push the event to a Queue system for further processing. Please review the code in the src/apaleo directory.
Which tips / adjustments would you suggest in a code review scenario?
You can add comments within the code or write a quick text somewhere else

### Task 3

You have probably heard about serverless technologies. Please state 2-3 advantages & disadventages each, which come to your mind about the conccepts (high level is totally ok, if you're not to familiar with serverless yet ;) )

## Command overview

```bash
# start server
$ npm start

# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
