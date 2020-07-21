import { rest } from 'msw';

export const handlers = [
  // GET requests to https://httpbin.org/anything with any parameters
  rest.get('https://httpbin.org/anything', (req, res, ctx) => {
    // Return OK status with a JSON object
    return res(
      ctx.status(200),
      ctx.json({
        args: {
          ingredients: ['bacon', 'tomato', 'mozzarella', 'pineapples'],
        },
      })
    );
  }),
];
