<template>
  <section id="maintenance">
        <div class="save">
        <h3>Save on the Service You Need</h3>
        <h1>Maintenance Plans</h1>
        <p>With an electrical maintenance plan,

 you won't find yourself in a panic wondering who to call when you're having 
 problems with your electrical system.</p>
      </div>
        <div class="planType-indicator">
          <div class="ovarall-plan">
            <!-- first Loop = Plan has 2index. 3  * 3 = 9 -->

      <div v-for="(obj,index) in 3" :key="index" >

            <Transition name="slide-fade"  class="plan">
        <div>
        <div  v-for="(item, index) in plan" :key="index">
          
            <div class="planType">
        <i :class="item.uil" class="logo" style="size: '5rem'">sc</i>
         <h2>{{item.head}}</h2> 
         <ul>
          <li v-for="obj in item.type" :key="obj">
            {{obj}}
             <uil-check size="20px" class="logo" /> </li>
         </ul>
          <hr>
         <div class="price">
          <h1>{{item.price}}</h1>
          <small><a href="#">Order now</a> <uil-ArrowRight size="20px" class="logo" /></small>
</div>
        </div>
     
      </div>
      </div>
     
        </Transition>
 </div>   
</div>
  <div class="indicator">
    <div @click="makeActive(index)"
        v-for="(head, index) in plan" 
          :key="index" 
        :style="currentIndex == index ? {background: 'blue'} : {background: 'white'}">
             
            </div>
            </div>
            </div>   

      
      
           
      <div class="plans-footer">
        <span class="video">
         <iframe src="https://www.yinube.com/embed/KvnMngrBr6s"
          title="YouTube video player" frameborder="0"
           allow="accelerometer; autoplay; clipboard-write; 
           encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>      
</span>
          <div class="banner">
            <div class="vl"></div>
          <h1>Your Best Option Electrical Contractors 24/7</h1>
         <p>Our experienced electricians are highly trained in all aspects of electrical service, 
            from office lighting and security systems to emergency repair.</p>
            <button>Explore Services</button>
        </div>
        
        <span class="plan-image">
      <img src="@/assets/images/lagosCity.jpg" alt="plans-image">
</span>
      </div>
     
  </section>

</template>

<script>
    //  <!-- swipper js -->

    //   <!-- <swiper
    //     :slides-per-view="currentNoIndex"
    //     :space-between="50"
    //     :autoplay ="autoplay"
    //     :pagination="pagination"
    //     class="pagination-slider"
    //    > -->
    //     <!-- <div v-for="(item, index) in image" :key="index" class="items"> -->
    //       <!-- <div class= 'item'> -->
    //         <!-- <div id= "images"> -->


    //             <!-- <img :key="img"
    //               src="@/assets/images/bulb3.png"
    //               class="image">
    //              -->
    //       <!-- <img :key="img"
    //             :src="item.icon"
    //             class="icon2"> -->
                
    //        <!-- </div> -->
    //             <!-- :style="{background: item.link + `no-repeat center center/cover`}"  -->
                 
    //             <!-- <div> -->
    //              <!-- <h3> {{item.header}} </h3>
    //             <p>{{item.paragraph}}</p> -->
               
                
     
<!--  section  3 -->

export default {

  data() {
    return {
      display: true,
      display1: true,
      currentIndex: 1,
        interval: "",
      plan: [
  {type: ['Mountly AC Inspection','Mountly Electrical In','Design Build Services','Supply and Install services','lighting fixture', 
      'Surge Protection Maintenance','24hrs Response'
      ], uil: `uil uil-compress`, head: 'Residential Services', price: '#50,000.00' },

      {type:  ['Indoor/Outddoor Lightening installation','Appliances & Fixture installation' ,'Annual Electrical Inspection ',
'Supply and Install sensor light' ,'lighting fixture','Surge Protection Maintenance ','24hrs Response'], 
 uil:`uil uil-house-user`, head: 'Commercial Services', price: '60000'},

 {type:  ['Indoor/Outddoor Lightening installation','Appliances & Fixture installation' ,'Annual Electrical Inspection ',
'Supply and Install sensor light' ,'lighting fixture','Surge Protection Maintenance ','24hrs Response'],
 uil:`uil uil-building class="logo"`, head: 'Industrial Services', price: '#70,000.00' }
      ]
    }
    },
  mounted() {
     this.changeText()
     this.show()

         this.mediaDisplay()
    window.addEventListener('resize', this.show)
  },

  methods: {
  changeText () {
this.interval = setInterval(() => {
 this.currentIndex = this.currentIndex == 2 ? 0 : this.currentIndex + 1; 
}, 4000);
  },
 show() {
  window.innerWidth < 1024 ?  this.display = false : this.display = true
  window.innerWidth < 820 ?  this.display1 = false : this.display1 = true
 },

mediaDisplay(index) {
  if(window.innerWidth < 820) {
  return this.currentIndex == index
 
  }
   else if (window.innerWidth < 1100) {
    return this.currentIndex !== index
  }else {
      return index == index
  }
},
makeActive(index){
  this.currentIndex = index
}
}
}
</script>
<style  lang='scss'>
section#services {
    display: flex;
    flex-direction: column;
    padding:  5rem 0;

   
 summary {
   @include flexColomn;
  
    .ovarall{
      @include flexRow;

      .summary {
        @include flexColomn;
        @include center;
        width: 100vw;
        position: relative;
  
        .summarySlat{
          @include flexColomn;
          @include center;
          text-align: center;
          width: 33vw;
          height: 100vh;
        

          content: "";
          -webkit-transform: skew(9deg);
          -moz-transform: skew(0deg);
          -o-transform: skew(0deg);

         


          &:hover {
            transform: scale(1.01);
          }
          
          img  {
            position: absolute;
            z-index: -9999;
            opacity: .5;
            background-color: transparent;
          }
    
          div {
           @include flexColomn;
           @include center;
           text-align: center;
            align-self: center;
            width: 25vw;
            transform:skew(-9deg
            );
            -webkit-transform: skew(-9deg);
            -moz-transform: skew(0deg);
            -o-transform: skew(0deg);
            color: white;
            
            h1, h3 {
              @include flexColomn;
              align-items: center;
              gap: 1rem;
              z-index: 9999 !important;
            }
           
            .logo {
              display: flex;
              width: 35px;
              height: 35px;
              border-radius: 50%;
              position: relative;
              background-color: $blue;
            }
            
           .logo::before {
             content: "";
             position: absolute;
             width: 100%;
             height: 100%;
             background-color: inherit;
             border-radius: 50%;
             z-index: -1;
             animation: ripple 1.5s ease-out infinite;
             animation-delay: 0.2s;
           }
           
        
           @keyframes ripple {
             from {
               opacity: 1;
               transform: scale(0);
             }
             to {
               opacity: 0;
               transform: scale(3);
             }
            }
          }
        }
      }
    }
           
    .indicator {
     display: none;
     align-items: center;
      }
 }
           

             //  section  2


 .brief {
    @include flexColomn;
    z-index: -99;
    color: $white;
    align-items: center;
    text-align: center;
    padding: 5rem;
    width: 100vw;
    
   
   
    & > h3 {
          color: $blue;
          }

        & > h1 {
            width: 35rem;
           }

  .pagination-slider{
    @include flexRow;
    width: 100%;
    padding: 5rem;
          
           
    & .swiper-pagination-bullet {
      background-color: white;
      color: white;
    }

    & .swiper-pagination-bullet-active {
      background-color: blue;
      color: white;
    }

    .items {
      @include flexRow;
      width: 100vw;
      justify-content: center;


  .item {
    @include  flexColomn;
    padding: 3rem;
    width: 23rem;
   height: max-content;
   gap: 3rem;
   
     .images {
      position: relative;
      .icon1 {
        width: 12rem;
        height: 12rem;
        border-radius: 100%;
        z-index: 8;
        opacity: 1;
        @include transition-ease;
   
        &:hover {
          opacity: 1;
        }
       }
    
        // .image {
        //   width: 15rem;
        //   z-index: 10;
        //   position: absolute;
        //   right: 1.5rem;
        // }
   
        
        // .icon2 {
        //  width: 5rem;
        //  z-index: 12;
        //  position: absolute;
        //  right: 6.5rem;
        //  top: 5rem;
        // }
   

     }

     .images:hover .icon1 {
      opacity: 1;
     }
    } 
  
    .item:hover .icon1 {
      opacity: 1;
      transform: scale(1.5);
     }
    
}
         
           }
          
}

//  section  3
  .banner-wrapper {
    background:  url('@/assets/images/plier.jpg')  no-repeat center center/cover;
    width: 100vw;
    height: 45rem;
    align-items: center;
    justify-content: center;
  
    .banner {
    @include flexColomn;
    @include banner;
    
        h1 {
        span {
          color: $blue;
        }
    }
      
      p {
        color: $dark-alt;
      }
    
      .buttons {
    @include flexRow;
    gap: 1rem;
    
      a {
      @include colorButton;
      gap: .5rem;
    

      &:hover {
        @include hover;
      }
  
     }


      }
    }
    }

  
  }

  @media screen  and (max-width: 1024px){
section#services {
  summary {

    .ovarall{
      @include flexRow;

      .summary {
       
        
        .summarySlat{
          width: 50vw;
          height: 40vw;
      content: "";
      -webkit-transform: skew(0deg);
      -moz-transform: skew(0deg);
      -o-transform: skew(0deg);

      &:hover {
        transform: scale(1);
        
      }
    
          div {
            width: 40vw;
            transform:skew(0deg
            );
            -webkit-transform: skew(0deg);
            -moz-transform: skew(0deg);
            -o-transform: skew(0deg);
         

        
         
        }
        }
     
              
    }

 }
 .indicator {
 @include indicator;

 }
}
 

.brief {
  
 .ovarall-image {
   
    .overhead-gallery {
     

      .gallery-wrapper{
           

      .gallery {
        @include  flexColomn;
                width: 18rem;
                height: 22rem;



                #icon {
                  color: white;
                  size: 15rem;
                  width: 5rem;
                  z-index: 99;

                }
          .electrical-icon2 {
                    width: 17rem;
                    height: 15rem;
                  }

  }
}

}
.indicator {
@include indicator;

}
}

}


.banner-wrapper {
background: url(https://media.istockphoto.com/id/901478514/photo/young-electrician-working-in-a-residential-electrical-installation.jpg?s=612x612&w=0&k=20&c=nIbxi-xzxffAhBarHGN4tS6nvzxuAXaJrBACykwx3M8=) no-repeat center center/cover;
width: 100vw;
height: 30rem;
 align-items: center;
 justify-content: center;

 

.banner {
 @include flexColomn;
 @include bannerMd;

 
}
}
    }

}
@media screen  and (max-width: 820px){
  section#services {


  summary {

    .ovarall{
    
      .summary {
      
        .summarySlat{
          width: 100vw;
          height: 50vw;
        
      
          div{
            width: 70vw;
          }
        }
     
              
    }


 }
 
}

//  .brief {
//    height: 38rem;
//        & > h3 {
//          color: $blue;
//           font-size:2.5vw;
//          }
//        & > h1 {
//           font-size: 5vw;
//            width: 35rem;
//            margin-bottom: 25rem;
//           }

//    .gallery-wrapper {
  
      
//  .gallery {
       
//            }
 
// }
// .indicator {
//  @include indicator;
//  width: 2px;
//  height: 2px;
//  }
//  }


 .banner-wrapper {
 background: url(https://media.istockphoto.com/id/901478514/photo/young-electrician-working-in-a-residential-electrical-installation.jpg?s=612x612&w=0&k=20&c=nIbxi-xzxffAhBarHGN4tS6nvzxuAXaJrBACykwx3M8=) no-repeat center center/cover;
 width: 100vw;
 height: 30rem;
  align-items: center;
  justify-content: center;
 
  

 .banner {
  @include flexColomn;
  @include bannerSm;
  

    
 }
 }

 
 }
 

 
  }
}





//   & > h3 {
  //         color: $blue;
  //         }

  //       & > h1 {
  //           width: 35rem;
  //          }

  // .pagination-slider{
  //   @include flexRow;
  //   width: 100%;
  //   padding: 5rem;
          
           
  //   & .swiper-pagination-bullet {
  //     background-color: white;
  //     color: white;
  //   }

  //   & .swiper-pagination-bullet-active {
  //     background-color: blue;
  //     color: white;
  //   }

  //   .items {
  //     @include flexRow;
  //     width: 100vw;
  //     justify-content: center;


  // .item {
  //   @include  flexColomn;
  //   padding: 3rem;
  //   width: 23rem;
  //  height: max-content;
  //  gap: 3rem;
   
    
      .icon{
        width: 12rem;
        height: 12rem;
        border-radius: 100%;
        z-index: 8;
        opacity: 1;
        @include transition-ease;
   
        &:hover {
          opacity: 1;
        }
       }
    
        // .image {
        //   width: 15rem;
        //   z-index: 10;
        //   position: absolute;
        //   right: 1.5rem;
        // }
   
        
        // .icon2 {
        //  width: 5rem;
        //  z-index: 12;
        //  position: absolute;
        //  right: 6.5rem;
        //  top: 5rem;
        // }
</style>
