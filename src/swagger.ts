import swaggerJSDoc from 'swagger-jsdoc';

export const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Higo API Documentation',
      version: '1.0.0',
      description: 'Dokumentasi dinamis API untuk Higo Project',
    },
    servers: [
      {
        url: 'https://be-higo-production.up.railway.app',
      },
    ],
  },
  apis: ['./src/routes/**/*.ts'],
});
