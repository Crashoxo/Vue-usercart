<template>
  <div id="app" class="container">
    <transition-group appear @before-enter="beforeEnter" @enter="enter">
      <div
        class="card"
        v-for="(post, index) in posts"
        :data-index="index"
        :key="post.id"
      >
        <h1>{{ post.title }}</h1>
        <p>{{ post.body }}</p>
      </div>
    </transition-group>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  name: "App",
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "id labore ex et quam laborum",
          body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
        },
        {
          id: 2,
          title: "quo vero reiciendis velit similique earum",
          body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
        },
        {
          id: 3,
          title: "odio adipisci rerum aut animi",
          body: "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione",
        },
        {
          id: 4,
          title: "alias odio sit",
          body: "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati",
        },
        {
          id: 5,
          title: "vero eaque aliquid doloribus et culpa",
          body: "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et",
        },
        {
          id: 6,
          title: "odio adipisci rerum aut animi",
          body: "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati",
        },
      ],
    };
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0;
      el.style.transform = "translateY(60px)";
    },
    enter(el) {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: el.dataset.index * 0.2,
      });
    },
  },
};
</script>

<style>
/* body {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: "Montserrat";
}
.container {
  padding-top: 2rem;
  background: #f3f4f6;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.card {
  background: white;
  box-shadow: 3px 3px 3px 0px rgb(107 107 107 / 7%);
  border-radius: 0.5rem;
  max-width: 28rem;
  padding: 1rem 2rem;
  margin: 1rem;
}
.card h1 {
  font-size: 1.5rem;
  line-height: 2rem;
  margin-bottom: 0.75rem;
  font-weight: 600;
} */
</style>
