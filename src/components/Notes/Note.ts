class Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;

  constructor(id: string, title: string, content: string) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.createdAt =
      new Date().getMonth() + '/' + new Date().getDate() + '/' + new Date().getFullYear();
    this.updatedAt =
      new Date().getMonth() + '/' + new Date().getDate() + '/' + new Date().getFullYear();
  }
}

export default Note;
