import { t } from "elysia";
import { TSchema } from "elysia/node_modules/@sinclair/typebox";

export const commonMeta = t.Object({
  error: t.Optional(
    t.Object({
      code: t.String(),
      message: t.String(),
      trace: t.Optional(t.String()),
    })
  ),
  pagination: t.Optional(
    t.Object({
      total: t.Number(),
      offset: t.Number(),
      limit: t.Number(),
    })
  ),
});

export const createResponseSchema = <
  TData extends TSchema,
  TMeta extends TSchema = never
>(
  dataSchema: TData,
  metaSchema?: TMeta
) => {
  return t.Object({
    data: dataSchema,
    meta: metaSchema ? t.Intersect([commonMeta, metaSchema]) : commonMeta,
  });
};
