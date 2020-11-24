export class VideoModel {
  constructor(
    public id: string,
    public name: string,
    public year: number,
    public genre: string,
    public language: string,
    public uploadDate: Date,
    public rating: number,
    public imageURL: string
  ) {}
}
