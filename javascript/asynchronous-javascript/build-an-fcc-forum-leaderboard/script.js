const forumLatest =
  'https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json';
const forumTopicUrl = 'https://forum.freecodecamp.org/t/';
const forumCategoryUrl = 'https://forum.freecodecamp.org/c/';
const avatarUrl = 'https://sea1.discourse-cdn.com/freecodecamp';

const allCategories = {
  299: { category: 'Career Advice', className: 'career' },
  409: { category: 'Project Feedback', className: 'feedback' },
  417: { category: 'freeCodeCamp Support', className: 'support' },
  421: { category: 'JavaScript', className: 'javascript' },
  423: { category: 'HTML - CSS', className: 'html-css' },
  424: { category: 'Python', className: 'python' },
  432: { category: 'You Can Do This!', className: 'motivation' },
  560: { category: 'Backend Development', className: 'backend' }
};

const timeAgo = (timestamp) => {
  const currentTime = new Date();
  const stamp = new Date(timestamp);
  const elapsed = currentTime - stamp;
  const s = Math.floor(elapsed / 1000);
  const m = Math.floor(s / 60);
  const h = Math.floor(m / 60);
  const d = Math.floor(h / 24);

  if (m < 60) {
    return m + "m ago";
  } else if (h < 24) {
    return h + "h ago";
  } else {
    return d + "d ago";
  }
}

const viewCount = (views) => {
  if (views >= 1000) {
    return Math.floor(views / 1000) + "k";
  } else {
    return views;
  }
}

const forumCategory = (selected) => {
  const hasCategory = allCategories[selected];
  
  if (hasCategory) {
    return `<a href="${forumCategoryUrl}${hasCategory.className}/${selected}" class="category ${hasCategory.className}">${hasCategory.category}</a>`;
  } else {
    return `<a href="${forumCategoryUrl}general/${selected}" class="category general">General</a>`;
  }
}

const avatars = (posters, users) => {
  return posters.map(poster => {
    const user = users.find(user => user.id === poster.user_id);
    
    if (user) {
      let src = user.avatar_template.replace("{size}", "30");

      if (!src.startsWith("http")) {
        src = `${avatarUrl}${src}`
      }
      return `<img src="${src}" alt="${user.name}">`;
    }
    return '';
  }).join('')  
}

const showLatestPosts = (obj) => {
  const postsContainer = document.getElementById("posts-container");
  const users = obj.users;
  const topics = obj.topic_list.topics;

  topics.map(topic => {
    let tr = 
      `
      <tr>
        <td>
          <a class="post-title" href="${forumTopicUrl}${topic.slug}/${topic.id}">${topic.title}</a>
          ${forumCategory(topic.category_id)}
        </td>
        <td>
          <div class="avatar-container">
            ${avatars(topic.posters, users)}
          </div>
        </td>
        <td>
          ${topic.posts_count - 1}
        </td>
        <td>
          ${viewCount(topic.views)}
        </td>
        <td>
          ${timeAgo(topic.bumped_at)}
        </td>
      </tr>
      `

      postsContainer.innerHTML += tr;
  })
}

const fetchData = async () => {
  try {
    const response = await fetch(forumLatest);
    const data = await response.json();
    showLatestPosts(data)
  } catch (err) {
    console.log(err);
  }
}

fetchData()