export default interface INote {
  id: number,
  date: number,
  comment: string,
  text: string,
  photo: IPhoto
}

interface IPhoto {
  id: number,
  url: string,
  comment: string
}