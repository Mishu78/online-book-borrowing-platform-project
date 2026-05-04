import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

// Forces the Route Handler to always fetch fresh dynamic data
export const dynamic = "force-dynamic";

export const { POST, GET } = toNextJsHandler(auth);