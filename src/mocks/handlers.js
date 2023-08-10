// src/mocks/handlers.js
import { rest } from 'msw'
export const handlers = [
    rest.post("https://example-api.com/data", (req, res, ctx) => {
        const { userData } = req.params;
        return res(
            ctx.status(200),
            ctx.json({
            message: "데이터 전송 성공",
            userData,
            success : true,
            username : "abc123**",
            })
        );
    })
]