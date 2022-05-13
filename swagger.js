const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = ['./server/router/*.js'];

swaggerAutogen(outputFile, endpointsFiles);
