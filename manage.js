Vue.component('heading', {
    template: `
        <div class="row">
            <div class="col-4"> </div>
            <div class="col-2">
                <span style="font-weight: bold;"><a href="About.html">About</a></span>
            </div>
           <div class="col-2">
               <span style="font-weight: bold;"><a href="Project.html">Project</a></span>
           </div>
        </div>
    `
});

Vue.component('links', {
    template: `
        <div>
            <a href="https://github.com/brandanteng" target="https://github.com/brandanteng"><i class="fa fa-github"></i></a>
            <a href="www.linkedin.com/in/brandanteng" target="www.linkedin.com/in/brandanteng"><i class="fa fa-linkedin"></i></a>
            <a href="https://www.instagram.com/brandanteng/" target="https://www.instagram.com/brandanteng/"><i class="fa fa-instagram"></i></a>
        </div>
    `
})

const vm = new Vue({
    el:"#app"
});
