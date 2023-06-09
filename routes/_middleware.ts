import { MiddlewareHandlerContext } from "$fresh/server.ts";

import pt from "../utils/i18n/pt.json" assert { type: "json" };
import en from "../utils/i18n/en.json" assert { type: "json" };

import SecurityHeaders from "../utils/securityHeaders.ts";
import { State } from "../utils/types.ts";

export const handler = [
  async function setLanguage(
    req: Request,
    ctx: MiddlewareHandlerContext<State>,
  ) {
    const cookie = req.headers.get("cookie");
    if (cookie && cookie.includes("lang")) {
      ctx.state.lang = cookie.split("=")[1] as "en" | "pt";
      ctx.state.translation = ctx.state.lang === "en" ? en : pt;
      return await ctx.next();
    } else {
      ctx.state.lang = req.headers.get("accept-language")?.includes("pt")
        ? "pt"
        : "en";
      ctx.state.translation = ctx.state.lang === "en" ? en : pt;
      const res = await ctx.next();
      res.headers.set("Set-Cookie", `lang=${ctx.state.lang}`);
      return res;
    }
  },
  async function setSecurityHeaders(
    _req: Request,
    ctx: MiddlewareHandlerContext<State>,
  ) {
    const resp = await ctx.next();
    SecurityHeaders.map((header) => {
      resp.headers.set(header.key, header.value);
    });
    return resp;
  },
];
