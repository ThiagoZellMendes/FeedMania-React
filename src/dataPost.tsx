import { PostType } from "./components/PostProps";

export const posts: PostType[] = [
  {
    id: "1",
    author: {
      avatarUrl: 'https://github.com/ThiagoZellMendes.png',
      name: 'Thiago Mendes',
      role: 'Mobile developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala meu povo'},
      {type: 'paragraph', content: 'Mano ta hard terminar essa task, mas eu envio ela ainda hoje. prometo 🌝'},
      {type: 'paragraph', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2023-04-29 17:01:01')
  },
  {
    id: "2",
    author: {
      avatarUrl: 'https://github.com/arianebrandao.png',
      name: 'Ariane Madalena Brandão',
      role: 'Web developer'
    },
    content: [
      {type: 'paragraph', content: 'Olá Folks!'},
      {type: 'paragraph', content: 'Zell é o melhor tank ever! 🌝'},
      {type: 'paragraph', content: 'jane.design/HealerTheBest'}
    ],
    publishedAt: new Date('2023-04-30 20:00:00')
  },
]