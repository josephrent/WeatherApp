# Run app
To run app with angular live server run `ng serve`

# Docker Info
To build docker app `docker build -t example:dev .`

To run docker app  `docker run -v ${PWD}:/app -v /app/node_modules -p 4201:4200 --rm example:dev`

Can open the docker app on localhost:4201

# Note
MongoDB has thousands of items from the .csv file

Some examples to try are:
- AE000041196
- AGM00060360
- CA005010547
