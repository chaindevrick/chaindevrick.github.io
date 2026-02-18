<template>
  <div class="blog-container">
    <div class="header-section">
      <n-page-header @back="$router.push('/')">
        <template #title>Technical Blog</template>
        <template #subtitle>Thoughts, tutorials, and dev logs.</template>
        <template #extra>
          <n-button 
            size="small" 
            secondary 
            tag="a" 
            href="/rss.xml" 
            target="_blank"
          >
            <template #icon>
              <span style="margin-right: 4px;">📡</span>
            </template>
            RSS Feed
          </n-button>
        </template>
      </n-page-header>
    </div>

    <div class="category-tabs">
      <n-tabs type="segment" animated v-model:value="selectedCategory">
        <n-tab-pane name="All" tab="All" />
        <n-tab-pane name="Technical" tab="Technical" />
        <n-tab-pane name="Tutorial" tab="Tutorial" />
        <n-tab-pane name="Finance" tab="Finance" />
        <n-tab-pane name="Thoughts" tab="Thoughts" />
      </n-tabs>
    </div>

    <n-divider />

    <div class="content-section">
      <n-list hoverable clickable bordered>
        <n-list-item v-for="post in blogPosts" :key="post.id" @click="goToPost(post.id)">
          
          <template #prefix>
            <div class="emoji-icon">{{ post.emoji }}</div>
          </template>

          <n-thing>
            <template #header>
              {{ post.title }}
            </template>
            
            <template #header-extra>
              <span class="date-text">{{ post.date }}</span>
            </template>
            
            <template #description>
              <n-space size="small" style="margin-top: 4px; align-items: center;">
                
                <n-tag 
                  v-for="tag in post.tags" 
                  :key="tag" 
                  type="default"
                  size="small" 
                  round 
                  :bordered="false"
                >
                  #{{ tag }}
                </n-tag>
              </n-space>
            </template>
            
            <div class="post-excerpt">
              {{ post.excerpt }}
            </div>
          </n-thing>
        </n-list-item>
      </n-list>

      <div v-if="filteredPosts.length === 0" class="empty-state">
        <p>No posts found in this category.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { 
  NPageHeader, NButton, NList, NListItem, NThing, NTag, NSpace, NDivider, NTabs, NTabPane 
} from 'naive-ui';
// 引入資料庫
import { blogPosts } from '../data/posts';

const router = useRouter();


const goToPost = (id) => {
  router.push(`/blog/${id}`);
};
</script>

<style scoped>
.blog-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 24px;
}

.header-section {
  margin-bottom: 24px;
}

/* 分類標籤樣式 */
.category-tabs {
  margin-bottom: 24px;
  overflow-x: auto; /* 手機版防破版 */
}

.emoji-icon {
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
}

.date-text {
  font-size: 0.85rem;
  color: #666;
}

.category-tag {
  font-weight: bold;
}

.post-excerpt {
  margin-top: 12px;
  color: #aaa;
  font-size: 0.95rem;
  line-height: 1.6;
}

.empty-state {
  text-align: center;
  padding: 60px 0;
  color: #666;
  font-style: italic;
}
</style>