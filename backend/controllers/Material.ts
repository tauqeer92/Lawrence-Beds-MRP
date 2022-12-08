import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import Material from "../models/material";

const createAuthor = (req: Request, res: Response, next: NextFunction) => {
	const { bed }: { bed: string } = req.body;

	const author = new Material({
		_id: new mongoose.Types.ObjectId(),
		bed,
	});

	return author
		.save()
		.then((author) => res.status(201).json({ author }))
		.catch((error) => res.status(500).json({ error }));
};
