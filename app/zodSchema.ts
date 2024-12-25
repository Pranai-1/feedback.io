import z from "zod"

const errorMessage="Error occured contact Admin"
export const spaceSchema = z.object({
  spaceName: z.string().min(1, "Space name is required."),
  headerTitle: z.string().min(1, "Header title is required."),
  customMessage: z.string().min(1, "Custom message is required."),
  spaceLogo: z.string().url("Invalid URL format for space logo."),
  questions: z
    .array(
      z.object({
        label: z.string(),
        id: z.union([z.string(), z.number()]),
      })
    )
    .min(1, { message: "Questions cannot be empty" }),
  collectionType: z.string().min(1, { message: errorMessage }),
  darkTheme: z.boolean({ required_error: errorMessage }),
  videoButtonText: z.string().min(1, { message: errorMessage }),
  textButtonText: z.string().min(1, { message: errorMessage }),
  disableCheersImage: z.boolean({ required_error:errorMessage}),
  thankyouTitle: z.string().min(1, { message:errorMessage }),
  thankyouDescription: z.string().min(1, { message:errorMessage}),
});


export const spaceSchemaBackend = z.object({
  userId:z.string().min(1, "Login and try again."),
  spaceName: z.string().min(1, "Space name is required."),
  headerTitle: z.string().min(1, "Header title is required."),
  customMessage: z.string().min(1, "Custom message is required."),
  spaceLogo: z.string().url("Invalid URL format for space logo."),
  questions: z
    .array(
      z.object({
        label: z.string(),
        id: z.union([z.string(), z.number()]),
      })
    )
    .min(1, { message: "Questions cannot be empty" }),
  collectionType: z.string().min(1, { message: errorMessage }),
  darkTheme: z.boolean({ required_error: errorMessage }),
  videoButtonText: z.string().min(1, { message: errorMessage }),
  textButtonText: z.string().min(1, { message: errorMessage }),
  disableCheersImage: z.boolean({ required_error:errorMessage}),
  thankyouTitle: z.string().min(1, { message:errorMessage }),
  thankyouDescription: z.string().min(1, { message:errorMessage}),
});