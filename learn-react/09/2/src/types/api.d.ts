interface Posts {
  id: string;
  title: string;
  views: number;
}

interface Comments {
  id: string;
  text: string;
  postId: string;
}