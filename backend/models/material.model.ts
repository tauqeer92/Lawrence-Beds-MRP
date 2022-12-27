import mongoose, { Document, Schema } from "mongoose";

// const Currency = {
// 	UkCurrency: "GBP",
// 	UsCurrency: "USD",
// } as const;

// type CurrencyType = typeof Currency[keyof typeof Currency];

// export type IMaterial = {
// 	// supplierId: String;
// 	name: String;
// 	price: Number;
// 	// currency: CurrencyType;
// 	description?: String;
// };

// export interface MaterialModel extends IMaterial, Document {}

const materialSchema = new Schema({
	// supplierId: { type: String, required: true },
	name: { type: String, required: true },
	price: { type: Number, required: true },
	description: { type: String },
	// currency: {
	// 	type: String,
	// 	enum: Object.values(Currency),
	// 	required: true,
	// },
});

export const Material = mongoose.model("Material", materialSchema);

// export const Material = mongoose.model<MaterialModel>("Material", MaterialSchema);
