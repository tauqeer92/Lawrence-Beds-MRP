import mongoose, { Document, Schema } from "mongoose";

const Currency = {
	UkCurrency: "GBP",
	UsCurrency: "USD",
} as const;

type CurrencyType = typeof Currency[keyof typeof Currency];

export type Material = {
	supplierId: String;
	name: String;
	price: Number;
	description: String;
	currency: CurrencyType;
};

export interface MaterialModel extends Material, Document {}

const MaterialSchema = new Schema({
	supplierId: { type: String, required: true },
	name: { type: String, required: true },
	price: { type: Number, required: true },
	description: { type: String },
	currency: {
		type: String,
		enum: Object.values(Currency),
		required: true,
	},
});

export default mongoose.model<MaterialModel>("Material", MaterialSchema);
