import { z } from "zod";
import { NoBody } from "../../../framework/Aliases.ts";
import { createController } from "../../../framework/Controller.ts";
import { HTTPMethod } from "../../../framework/HTTPMethod.ts";
import { HTTPStatus } from "../../../framework/HTTPStatus.ts";

export const GetSpeakersController = createController(() => ({
  path: "/api/speakers" as const,
  method: HTTPMethod.GET,
  params: z.object({
    offset: z.coerce.number().optional(),
    limit: z.coerce.number().optional(),
  }),
  requestBody: NoBody,
  responseBody: z.array(
    z.object({
      id: z.string().uuid(),
      name: z.string(),
    }),
  ),
  handler: async (data) => {
    console.log("[Controller] GetSpeakers:", data.params.offset, data.params.limit);

    return {
      status: HTTPStatus.OK,
      json: [
        {
          id: "fd61734e-1ee9-41ac-8b0b-c7f8794a5981",
          name: "John Doe",
        },
        {
          id: "258cbaa0-76cf-4c02-b76f-07a39a76e862",
          name: "Alex Smith",
        },
      ],
    };
  },
}));
