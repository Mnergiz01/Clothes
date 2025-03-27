<template>
    <div>
        <div class="flex justify-between">
            <div>
                <ul class="flex justify-around text-black gap-10 items-center">
                    <li class="  hover:bg-white rounded-full p-2 transition-all ease-in-out duration-300"><svg
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="1.5" d="M4 5h12M4 12h16M4 19h8" color="#000" />
                        </svg></li>
                    
                        <li @click="scrollToSection('home')" class="menu-item active ">
                           <router-link to="/">Home</router-link> 
                        </li>
                  
                    
                        <li @click="scrollToSection('collection')" class="menu-item">Collections</li>
                    
                        
                        <li @click="scrollToSection('new')" class="menu-item">New</li>
                   
                    
                        <li @click="scrollToSection('about')" class="menu-item">About</li>
                    
                </ul>
            </div>

            <div>
                <img src="@/assets/logo1.svg" alt="">
            </div>

            <div>
                <ul class="flex justify-around gap-10 items-center">
                    <router-link to="/likeproduct">
                    <li class="menu-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24">
                            <path fill="#fff" fill-rule="evenodd"
                                d="M19.285 12.645a3.8 3.8 0 0 0-5.416-5.332q-.288.288-.732.707l-.823.775l-.823-.775q-.445-.42-.733-.707a3.8 3.8 0 0 0-5.374 0c-1.468 1.469-1.485 3.844-.054 5.32l6.984 6.984l6.97-6.972zm-14.75-6.18a5 5 0 0 1 7.072 0q.273.274.707.682q.432-.408.707-.683a5 5 0 0 1 7.125 7.017l-7.125 7.126a1 1 0 0 1-1.414 0L4.48 13.48a5 5 0 0 1 .055-7.017z" />
                        </svg></li></router-link>
                    <router-link to="/mycart"> <li class="menu-icon ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 64 64">
                            <path fill="#fff"
                                d="M61.063 2H58.25v.896c-3.916.876-4.479 4.511-4.7 5.9c-.105.657-.318 1.942-.582 3.516H3.988c-1.938 0-2.155 1.811-1.902 2.813l5.746 25.367c.252 1.002 1.313 1.82 2.353 1.82h42.944c1.034 0 1.877.841 1.877 1.875s-.843 1.875-1.877 1.875H6.255a1.874 1.874 0 1 0 0 3.75h2.43a7.5 7.5 0 0 0-3.872 6.563h1.875c0 3.105 2.52 5.625 5.625 5.625s5.625-2.52 5.625-5.625h1.875a7.5 7.5 0 0 0-3.873-6.563h26.494a7.5 7.5 0 0 0-3.873 6.563h1.875a5.627 5.627 0 0 0 11.252 0h1.875a7.5 7.5 0 0 0-3.872-6.563h3.44a5.63 5.63 0 0 0 5.625-5.625a5.626 5.626 0 0 0-5.627-5.625h-.697l2.398-14.91c.668-3.938 2.108-12.445 2.446-14.561c.17-1.069.335-1.82.974-2.241v.774h2.813A.94.94 0 0 0 62 6.688v-3.75A.94.94 0 0 0 61.063 2m-48.75 57.188A2.816 2.816 0 0 1 9.5 56.375h5.625a2.816 2.816 0 0 1-2.812 2.813m33.75 0a2.816 2.816 0 0 1-2.814-2.813h5.627a2.82 2.82 0 0 1-2.813 2.813m-2.307-42.194a1.07 1.07 0 0 1 1.04-.932h5.937c.516 0 .875.416.794.927l-.588 3.771c-.078.51-.567.927-1.084.927h-5.663a.826.826 0 0 1-.841-.932zm-1.009 9.375a1.07 1.07 0 0 1 1.04-.932h5.483c.517 0 .875.416.797.927l-.443 2.834c-.079.51-.567.927-1.084.927h-5.257a.828.828 0 0 1-.841-.932zM6.866 20.777l-.95-3.805c-.124-.502.198-.91.715-.91h7.059c.518 0 .985.419 1.04.932l.404 3.762a.828.828 0 0 1-.84.932H8.033c-.516 0-1.042-.411-1.167-.911m3.271 9.348c-.516 0-1.042-.41-1.166-.91l-.716-2.867c-.125-.502.195-.91.712-.91h5.729c.517 0 .985.419 1.04.932l.304 2.824a.827.827 0 0 1-.84.932zm5.969 8.438h-3.865c-.519 0-1.042-.41-1.167-.91l-.716-2.867c-.124-.502.196-.91.714-.91h4.53c.517 0 .985.419 1.042.932l.302 2.824a.826.826 0 0 1-.84.931m11.492-.938a.94.94 0 0 1-.94.938h-4.891a1.07 1.07 0 0 1-1.039-.932l-.304-2.824a.825.825 0 0 1 .839-.932h5.395a.94.94 0 0 1 .94.938zm0-8.437a.94.94 0 0 1-.94.938H20.86c-.516 0-.982-.419-1.04-.932l-.302-2.824a.826.826 0 0 1 .839-.932h6.301a.94.94 0 0 1 .94.938zm0-8.438a.94.94 0 0 1-.94.938h-6.702a1.07 1.07 0 0 1-1.04-.932l-.404-3.762a.827.827 0 0 1 .84-.932h7.307a.94.94 0 0 1 .94.938v3.75zm10.159 16.881a1.07 1.07 0 0 1-1.04.932h-4.42a.94.94 0 0 1-.939-.938v-2.813a.94.94 0 0 1 .939-.938h4.924c.516 0 .896.419.84.932zm.906-8.438a1.07 1.07 0 0 1-1.04.932h-5.326a.94.94 0 0 1-.939-.938v-2.813a.94.94 0 0 1 .939-.938h5.83c.517 0 .896.419.839.932zm.906-8.437a1.07 1.07 0 0 1-1.04.932h-6.232a.94.94 0 0 1-.939-.938V17a.94.94 0 0 1 .939-.938h6.837c.517 0 .896.419.841.932zm7.232 17.807v-.007l-.008.007h-4.416c-.029 0-.054-.014-.083-.018c-.005-.034-.005-.068-.011-.104l-.044.092l.037.008c-.461-.053-.791-.434-.738-.91l.302-2.824a1.07 1.07 0 0 1 1.04-.932h5.076c.517 0 .873.416.795.927l-.443 2.834c-.077.51-.565.927-1.082.927z" />
                        </svg>
                    </li></router-link>
                    <router-link to="/contact"> <li class="menu-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24">
                            <g fill="#fff" fill-rule="evenodd" clip-rule="evenodd">
                                <path d="M16 9a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-2 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0" />
                                <path
                                    d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1M3 12c0 2.09.713 4.014 1.908 5.542A8.99 8.99 0 0 1 12.065 14a8.98 8.98 0 0 1 7.092 3.458A9 9 0 1 0 3 12m9 9a8.96 8.96 0 0 1-5.672-2.012A6.99 6.99 0 0 1 12.065 16a6.99 6.99 0 0 1 5.689 2.92A8.96 8.96 0 0 1 12 21" />
                            </g>
                        </svg></li></router-link>
                </ul>
            </div>

        </div>
    </div>
</template>

<script setup>

const scrollToSection = (href) => {
    
    const section = document.getElementById(href);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

</script>

<style scoped>
/* Menü Öğeleri İçin *//* Menü Öğeleri İçin */
.menu-item {
    padding: 10px 15px;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
}

/* Üzerine Gelindiğinde */
.menu-item:hover {
    background-color: black;
    color: white;
}

/* Aktif Sayfa */
.menu-item.active {
    background-color: white;
    font-weight: bold;
    border-bottom: 2px solid black;
}

/* Menü İkonları */
.menu-icon {
    background-color: black;
    color: black;
    display: flex;
    align-items: center;
    border-radius: 50px;
    padding: 10px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
}

/* İkon Hover Efekti */
.menu-icon:hover {
    background-color:white ;
    color: black;
}

.menu-icon:hover svg path {
    fill: black;
}

/* Aktif Menü */
.menu-icon.active {
    background-color: white;
    color: black;
}

.menu-icon.active svg path {
    fill: black;
}

/* Mobil - SM */
@media (max-width: 640px) {
    .menu-item {
        font-size: 12px;
        padding: 8px 12px;
        cursor: pointer;
    }

    .menu-icon {
        padding: 8px;
    }

    .flex {
        flex-direction: column;
        gap: 5px;
        text-align: center;
    }

    .menu-icon svg {
        width: 20px;
        height: 20px;
    }
}

/* Tablet - MD */
@media (min-width: 641px) and (max-width: 1024px) {
    .menu-item {
        font-size: 14px;
        padding: 10px 15px;
        cursor: pointer;
    }

    .menu-icon {
        padding: 10px;
    }

    .flex {
        flex-direction: row;
        gap: 15px;
    }

    .menu-icon svg {
        width: 22px;
        height: 22px;
    }
}

/* Masaüstü - LG */
@media (min-width: 1025px) {
    .menu-item {
        font-size: 16px;
        padding: 12px 20px;
    }

    .menu-icon {
        padding: 12px;
    }

    .flex {
        flex-direction: row;
        gap: 20px;
    }

    .menu-icon svg {
        width: 24px;
        height: 24px;
    }
}
.active:hover{
    color: black;
}

</style>
