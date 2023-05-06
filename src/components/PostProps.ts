export interface Author { 
  name: string;
  role: string;
  avatarUrl: string;
}

export interface Content {
  type: 'paragraph' | 'link';
  content: string;
}

export interface PostType {
  id: string
  author: Author;
  publishedAt: Date;
  content: Content[];
}

export interface postProps {
  post: PostType
}