import { createRouter,createWebHistory } from 'vue-router'
const HomeView=()=>import('@/views/HomeView.vue')
const BookingView=()=>import('@/views/BookingView.vue')
const ServiceDetailView=()=>import('@/views/ServiceDetailView.vue')
const ServicesView=()=>import('@/views/ServicesView.vue')
const StoreView=()=>import('@/views/StoreView.vue')
const GiftsView=()=>import('@/views/GiftsView.vue')
const PackagesGiftsView=()=>import('@/views/PackagesGiftsView.vue')
const BranchesView=()=>import('@/views/BranchesView.vue')
const ContactView=()=>import('@/views/ContactView.vue')
const GiftRecipientView=()=>import('@/views/GiftRecipientView.vue')
const BlogView=()=>import('@/views/BlogView.vue')
const BlogDetailView=()=>import('@/views/BlogDetailView.vue')

export default createRouter({history:createWebHistory(import.meta.env.BASE_URL),routes:[
  {path:'/',name:'home',component:HomeView},
  {path:'/index.html',redirect:'/'},
  {path:'/booking',alias:'/booking.html',name:'booking',component:BookingView},
  {path:'/services',alias:'/services.html',name:'services',component:ServicesView},
  {path:'/services/:id',name:'service-detail',component:ServiceDetailView},
  {path:'/store',alias:'/store.html',name:'store',component:StoreView},
  {path:'/gifts',alias:'/gifts.html',name:'gifts',component:GiftsView},
  {path:'/packages-gifts',alias:'/packages-gifts.html',name:'packages-gifts',component:PackagesGiftsView},
  {path:'/branches',alias:'/branches.html',name:'branches',component:BranchesView},
  {path:'/contact',alias:'/contact.html',name:'contact',component:ContactView},
  {path:'/gift-recipient',alias:'/gift-recipient.html',name:'gift-recipient',component:GiftRecipientView},
  {path:'/blog',alias:'/blog.html',name:'blog',component:BlogView},
  {path:'/blog/:slug',name:'blog-detail',component:BlogDetailView},
  {path:'/:pathMatch(.*)*',redirect:'/'}
]})
