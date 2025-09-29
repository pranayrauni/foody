import { auth } from "express-oauth2-jwt-bearer";
if (!process.env.AUTH0_AUDIENCE || !process.env.AUTH0_ISSUER_BASE_URL) {
    throw new Error("Missing auth0 configuration in enviroonment variables");
}
export const jwtCheck = auth({
    audience: process.env.AUTH0_AUDIENCE,
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
    tokenSigningAlg: 'RS256'
});
//# sourceMappingURL=auth.js.map