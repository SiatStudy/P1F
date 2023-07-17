import { rest } from 'msw'

export const loginHandler = rest.post(
    'https://localhost:8080/login',
    (req, res, ctx) => {
        return res(ctx.json({
           id : "test",
           pw : "test"
        }));
    },
);