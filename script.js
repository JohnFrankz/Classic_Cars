/*  给menu按钮添加点击事件监听器，当点击菜单按钮时，它会选择所有
    具有类名 .target 的元素（也就是页面的四个主要部分）。 为其中
    每个元素来切换类名  .change，这样就可以实现菜单按钮的旋转效果。
*/
document.querySelector(".menu").addEventListener("click", () => {
  document.querySelectorAll(".target").forEach((item) => {
    item.classList.toggle("change");
  });
});

/*  这个函数遍历所有含有类 .wrapper 的元素，并为每个元素添加了一个点击事件监听器。
    当点击包装器元素时，它会选择所有具有类名 .target 的元素，并使用 forEach 方法
    遍历每个元素。对于每个元素，它会使用 classList.remove() 方法移除类名 .change，
    从而还原元素的样式。这样做可以实现在点击包装器元素时，取消菜单按钮和其他元素的旋转
    效果。
*/
document.querySelectorAll(".wrapper").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".target").forEach((item) => {
      item.classList.remove("change");
    });
  });
});

/* 先通过选择器 .video 获取到所有的视频元素，并将它们保存在变量 videos 中 */
const videos = document.querySelectorAll(".video");

/* 使用 forEach 方法遍历每个视频元素，并为每个元素添加了两个事件监听器：
   1. 当鼠标悬停在视频上时触发 mouseover 事件，函数中的 video.play()
      将播放该视频。
   2. 当鼠标移出视频时触发 mouseout 事件，回调函数中的 video.pause() 
      方法将暂停该视频。
  以实现鼠标悬停在视频上时自动播放视频，移出时暂停播放。
*/
videos.forEach((video) => {
  video.addEventListener("mouseover", () => {
    video.play();
  });
  video.addEventListener("mouseout", () => {
    video.pause();
  });
});
