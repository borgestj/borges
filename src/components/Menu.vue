<template>
  <div id="menu">
    <img class="image-menu" src="@/assets/image/header.png">
    <b-button v-b-toggle.sidebar-right class="btn-menu">
        <div class="btn-menu__burguer"></div>
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

            .btn-menu__burguer {
                width: 32px;
                height: 4px;
                background: #fff;
                border-radius: 5px;
                box-shadow: 0 2px 5px rgba(255,101,47,.2);
                transition: all .5s ease-in-out;
                margin-left: 1px;
            }

            .btn-menu__burguer:before,
            .btn-menu__burguer:after {
                content: '';
                position: absolute;
                width: 32px;
                height: 4px;
                background: #fff;
                border-radius: 5px;
                box-shadow: 0 2px 5px rgba(255,101,47,.2);
                transition: all .5s ease-in-out;
            }

            .btn-menu__burguer:before {
                transform: translateY(-10px);
                margin-left: -16px;
            }

            .btn-menu__burguer:after {
                transform: translateY(10px);
                margin-left: -16px;
            }
        }

        /* ANIMATION */
        .btn-menu.not-collapsed .btn-menu__burguer {
            transform: translateX(-50px);
            background: transparent;
            box-shadow: none;
        }
        .btn-menu.not-collapsed .btn-menu__burguer:before {
            transform: rotate(45deg) translate(35px, -35px);
        }
        .btn-menu.not-collapsed .btn-menu__burguer:after {
            transform: rotate(-45deg) translate(35px, 35px);
        }

        #sidebar-right {
            width: 100%;
            opacity: 0.9;

            .b-sidebar-header {
                display: none;
            }

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
                        &.fa-github:hover,&.fa-linkedin:hover,&.fa-instagram:hover,&.fa-twitter-square:hover{
                            color: #A6134A;
                        }
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

                .btn-menu__burguer {
                    width: 30px;
                    height: 4px;
                    margin-left: 7px;
                }

                .btn-menu__burguer:before,
                .btn-menu__burguer:after {
                    width: 30px;
                    height: 4px;
                }

                .btn-menu__burguer:before {
                    transform: translateY(-11px);
                    margin-left: -15px;
                }

                .btn-menu__burguer:after {
                    transform: translateY(11px);
                    margin-left: -15px;
                }
            }

            #sidebar-right {
                opacity: 0.7;
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