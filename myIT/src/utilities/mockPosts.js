const mockPosts = [
  {
    kind: 't3',
    data: {
      id: '1',
      title: 'This is a mock Reddit post about React',
      author: 'user123',
      subreddit: 'reactjs',
      score: 120,
      num_comments: 42,
      post_hint: 'image',
      url: 'https://reddit.com/r/reactjs',
      preview: {
        images: [
          {
            source: {
              url: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
            },
          },
        ],
      },
      comments: [
        {
          id: 1,
          author: 'commenter1',
          text: 'Great post! I love React.',
        },
        {
          id: 2,
          author: 'commenter2',
          text: 'I agree, React is awesome!',
        },
      ],
    },
  },
  {
    kind: 't3',
    data: {
      id: '2',
      title: 'Another mock post about JavaScript',
      author: 'dev_guy',
      subreddit: 'javascript',
      score: 98,
      num_comments: 17,
      post_hint: 'image',
      url: 'https://reddit.com/r/javascript',
      preview: {
        images: [
          {
            source: {
              url: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3',
            },
          },
        ],
      },
      comments: [
        {
          id: 1,
          author: 'commenter3',
          text: 'I love using JavaScript.',
        },
        {
          id: 2,
          author: 'commenter4',
          text: 'JavaScript is the bees knees!',
        },
      ],
    },
  },
];

export default mockPosts;
