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
          <router-link to="/summary"><p>Summary.</p></router-link>

          <div class="socials">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i class="icon-instagram"></i>
            </a>    
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i class="icon-linkedin"></i>
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
        height: 300px;

        .image-menu {
            width: 360px;
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
            }
        }
    }

    @media (min-width: 1024px) {
        #menu {
            .image-menu {
                width: unset;
            }

            .btn-menu {
                width: 75px;
                height: 65px;
                top: 60px;
                right: 120px;
                
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
                }
            }
        }
    }

</style>