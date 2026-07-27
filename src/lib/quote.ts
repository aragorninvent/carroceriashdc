import { z } from "zod";
export const quoteSchema = z.object({
  name: z.string().trim().min(2, "Ingrese su nombre").max(100), company: z.string().trim().min(2, "Ingrese su empresa").max(120),
  phone: z.string().trim().min(7, "Ingrese un teléfono válido").max(30), email: z.string().trim().email("Ingrese un correo válido"),
  requestType: z.string().min(1, "Seleccione el tipo de solicitud"), description: z.string().trim().min(15, "Describa su proyecto con al menos 15 caracteres").max(3000),
  region: z.string().max(100).optional(), commune: z.string().max(100).optional(), truckBrand: z.string().max(100).optional(), truckModel: z.string().max(100).optional(),
  cargoType: z.string().max(150).optional(), dimensions: z.string().max(200).optional(), privacy: z.literal(true, { errorMap: () => ({ message: "Debe aceptar la política de privacidad" }) }), website: z.string().max(0).optional()
});
export type QuoteInput = z.infer<typeof quoteSchema>;
