<template>
  <div id="menu">
    <img class="image-menu" src="@/assets/image/header.png">
    <b-button v-b-toggle.sidebar-right class="btn-menu">
        <img src="@/assets/image/menu.svg">
    </b-button>
    <div>
      <b-sidebar id="sidebar-right" right shadow>
        <div class="px-3 py-2 submenu">
          <router-link to="/"><p>Home.</p></router-link>
          <router-link to="/projects"><p>Projects.</p></router-link>
          <router-link to="/resume"><p>Summary.</p></router-link>

          <div class="socials">
            <a href="https://github.com/borgestj" target="_blank" rel="noopener noreferrer">
              <i class="icon fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/borgestj/" target="_blank" rel="noopener noreferrer">
              <i class="icon fab fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/borgestij/" target="_blank" rel="noopener noreferrer">
              <i class="icon fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com/jsolotj" target="_blank" rel="noopener noreferrer">
              <i class="icon fab fa-twitter-square"></i>
            </a>
          </div>
        </div>
      </b-sidebar>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { SidebarPlugin } from 'bootstrap-vue'

Vue.use(SidebarPlugin)

export default {

}
</script>

<style lang="scss">
    #menu {
        display: flex;
        align-items: baseline;
        justify-content: flex-end;
        max-height: 200px;
        height: 100%;

        .image-menu {
            width: 100%;
            max-width: 200px;
        }

        .btn-menu {
            position: absolute;
            width: 55px;
            height: 45px;
            top: 30px;
            right: 30px;
            z-index: 999999999999;
            border: none;
            border-radius: 12px;
            background-color: #151515;
            box-shadow: 3px 3px 5px #000, -3px -3px 5px #252525;
        }

        #sidebar-right {
            width: 100%;
            opacity: 0.6;

            .submenu {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                margin-top: 40px;
                margin-left: 10px;

                a {
                    color: #fff;
                    font-size: 26pt;
                    font-weight: 800;
                    opacity: 1;
                    text-decoration: none;

                    &:hover {
                        color: #CA1357;
                    }
                }

                .socials {
                    .icon {
                        font-size: 48px;
                        color: #fff;
                        margin: 100px 20px 10px;
                    }

                    .icon:first-child {
                        margin-left: 0;
                    }
                }
            }
        }
    }

    @media (min-width: 1024px) {
        #menu {
            .image-menu {
                width: unset;
            }

            .btn-menu {
                width: 65px;
                height: 55px;
                top: 20px;
                right: 60px;
                
                &:hover {
                    box-shadow: inset 3px 3px 5px #000, inset -3px -3px 5px #252525;
                    transform: scale(.98);
                }
            }

            #sidebar-right {
                width: 50%;
    
                .submenu {
                    margin-top: 100px;
                    margin-left: 20px;
    
                    a {
                        font-size: 32pt;
                    }

                    .socials {
                        i {
                            width: 30px;
                            margin: 10px;
                        }
                    }
                }
            }
        }
    }

</style>