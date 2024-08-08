import mongoose, { Document, Schema } from 'mongoose';

export interface IArticle extends Document {
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: Date;
}

const ArticleSchema: Schema = new Schema({
    author: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true },
    urlToImage: { type: String, required: true },
    publishedAt: { type: Date, required: true },

});

export default mongoose.model<IArticle>('article', ArticleSchema);
