<template>
  <section id="services">
    <!--  section 1 -->
    <summary>
     <div class="ovarall">
        <div  v-for="(head, index) in summary"
         :key="index" class="summary">
          <div class="summarySlat "
          v-if="mediaDisplay(index)"
          :style="{background: head.img  + `no-repeat center  center/cover`}">
         <img src="@/assets/images/slideinfo-marker.png" >
            <div>
             <h1>{{head.header}}
                <div  v-if="selectedItem !== index"  class="logo"
                 @click="show(index)"
                > + </div>
             </h1>
             <h3
              v-if="selectedItem == index">{{head.paragraph}}
              <div class="logo"  @click="hide(index)"> &mdash; </div>
             </h3>
        </div>
      </div>
     </div>
     </div>
     <div class="indicator">
      <div @click="makeActive(index)"
        v-for="(head, index) in summary"
          :key="index"
        :style="currentIndex == index ? {background: 'blue'} : {background: 'white'}">

            </div>
            </div>
   </summary>

 <!--  section 2 -->

  <div class="brief" >
      <h3 class="brief-intro">24/7 Electrician Services - Safe and Efficient</h3>
     <h1>We are a Full Service Electrical Contractor</h1>

     <!-- swipper js -->
<!-- swipper as image wrapper -->
      <swiper
        :slides-per-view="currentNoIndex"
        :space-between="50"
        :autoplay ="autoplay"
        :pagination="pagination"
        class="pagination-slider"
       >
       <!-- looping image in data -->
        <swiper-slide v-for="(item, index) in image" :key="index" class="items">
          <div class= 'item'>

            <!--  three image position absolute in respect to thier parent-->
            <div class= "images">

                <img :key="img"
                 :src="item.link" 
                 class="icon1">

                <img :key="img"
                  src="@/assets/images/bulb3.png"
                  class="image">
                
               <img :key="img"
                :src="item.icon"
                class="icon2">
                
           </div>
                 <!-- content after images -->
                <div>
                 <h3> {{item.header}} </h3>
                <p>{{item.paragraph}}</p>
                 </div>
                  </div>
     </swiper-slide>
    </swiper>
  </div>
     
<!--  section  3 -->
  <div class="banner-wrapper">
    <div class="banner">
      <div class="vl"></div>
      <h1>Do you <span>Need Help</span> With Electrical Maintenance?</h1>
      <p>Our electrical repair and service options are proudly offered to clients.
       Give us a call today to schedule a free service estimate!</p>

<!-- buttons -->
      <div class="buttons">
        <a href="tel:+2349079119413"> 
              <uil-phoneAlt size="20px"  />Give a Call</a>
        
        <a    
        href="https://docs.google.com/forms/d/e/1FAIpQLScHtN0R06uyO7VFybKWWVklSAqnhU25rwGqf4TJvamgC4wA0A/viewform?embedded=true"
          target= '_blank' >
        <uil-BoltAlt size="15px" class="logo" />Free Estimate 
        </a>
      </div>
    </div>
</div>
 

 </section>
</template>
<script>
 import { Swiper, SwiperSlide } from 'swiper/vue';
 import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper";

//  css file for swipper
import "swiper/swiper.min.css";
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

SwiperCore.use([Pagination, Autoplay, Navigation]);

  
import {UilBoltAlt, UilPhoneAlt} from '@iconscout/vue-unicons'
export default {
  components: {
    UilBoltAlt,Swiper, SwiperSlide,UilPhoneAlt
      },

  data() {
      return {
        currentSlide : 1,
        currentIndex : 1,
        interval: "",
        currentNoIndex: 3,
        selectedItem: null,
        
        autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        },

        pagination: {
        clickable: true
        },

  summary: [
      {header: 'Residential', paragraph:`'We offer the highest level of responsive and reliability, including on-line job management and reporting.
      Our highly experienced contractors across the nation ensure that your premises are always maintained and compliant'`,
      img:` url(${require('@/assets/images/home1.jpg')}) `},

      { header: 'Commercial', paragraph:`'We offer the highest level of responsiveness and reliability, including on-line job management and reporting.
      Our highly experienced contractors across the nation ensure that your premises are always maintained and compliant'`,
      img:` url(${require('@/assets/images/industry.jpg')}) `},

      {header: 'Industrial', paragraph:`'We offer the highest level of responsiveness and reliability, including on-line job management and reporting.
      Our highly experienced contractors across the nation ensure that your premises are always maintained and compliant'`,
       img:` url(${require('@/assets/images/industrial1.jpg')}) `}

          ],


  image: [
    {link:`${require('@/assets/images/meter.jpg')} `,
      header: 'Panel Services',paragraph:'Electrical panels are the heart of electrical system',
      icon: `${require('@/assets/images/a.png')} `
      },

    {link: `${require('@/assets/images/house2.jpg')}`,
      header: 'Trouble Shooting',paragraph:'We think before we start working to save money',
      icon: `${require('@/assets/images/b.png')} `
      },

    {link:`${require('@/assets/images/meter.jpg')} `, 
      header: 'Heating Services',paragraph:'We offer energy efficient electric heat products and installation',
      icon: `${require('@/assets/images/c.png')}`
      },

    {link: `${require('@/assets/images/industry.jpg')}`, 
      header: 'Electrical Services',paragraph:'We provide complete design and installation services',
        icon: `${require('@/assets/images/d.png')} `
    },

    {link:`${require('@/assets/images/industry.jpg')}`,
    header: 'Air Conditioning',paragraph:'Our installation services ensure that you get the right air conditioner',
      icon: `${require('@/assets/images/e.png')} `
    },

  {link: `${require('@/assets/images/industry.jpg')} `,
    header: 'Security Services',paragraph:'Our installation services ensure that you get the right air conditioner',
      icon: `${require('@/assets/images/f.png')} `
    }
    ],
}
  },

  mounted(){
    this.setInterval()
    this.mediaDisplay()
    this.changeIndex()
    },

  watch: {
    currentNoIndex(){
    window.addEventListener('resize', this.changeIndex)    
  }
  },

  methods:{
    setInterval () {
      this.interval = setInterval(() => {
      this.currentSlide = this.currentSlide == 1 ? 0 : this.currentSlide + 1
     this.currentIndex = this.currentIndex == 2 ? 0 : this.currentIndex + 1;
     }, 4000);
      },

    show(index) {
      this.selectedItem = index
    clearInterval(this.interval)
    },

  hide() {
    this.selectedItem = null;
    this.setInterval()
  },

  mediaDisplay(index) {
    if(window.innerWidth < 820 ) {
       return this.currentIndex == index
    }
  else  if(window.innerWidth < 1024 ) {
      return this.currentIndex !== index
   }
  else {
    return index == index
  }
  
  },
  
  changeIndex() {
    if(window.innerWidth < 820 ) {
    this.currentNoIndex = 1
   }
   else if (window.innerWidth < 1024) {
    this.currentNoIndex = 2
  }
  else {
       this.currentNoIndex = 3
  }
},

  makeActive(index) {
 this.currentIndex = index
     }

},

}

</script>

