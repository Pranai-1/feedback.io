import z from "zod"

const errorMessage="Error occured contact Admin"
export const spaceSchema = z.object({
  userId:z.string().min(1, "Please login and try again."),
  spaceName: z.string().min(1, "Space name is required."),
  description:z.string().min(1, "Space description is required."),
  title: z.string().min(1, "Header title is required."),
  customMessage: z.string().min(1, "Custom message is required."),
  image: z.string().url("Invalid URL format for space logo."),
  questions:z.string().array().min(1, { message: "questions cannot be empty" }) ,
  collectionType: z.string().min(1, { message: errorMessage }),
  darkTheme: z.boolean({ required_error: errorMessage }),
  videoButtonText: z.string().min(1, { message: errorMessage }),
  textButtonText: z.string().min(1, { message: errorMessage }),
  disableCheersImage: z.boolean({ required_error:errorMessage}),
  thankyouTitle: z.string().min(1, { message:errorMessage }),
  thankyouDescription: z.string().min(1, { message:errorMessage}),
});