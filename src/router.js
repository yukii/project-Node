import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// all
import Projects from './views/Projects.vue'
import Salary from './views/Salary.vue'
import Clients from './views/Clients.vue'
// created
import ProjectCrea from './views/ProjectCreated.vue'
import SalaryCrea from './views/SalaryCreated.vue'
import ClientCrea from './views/ClientCreated.vue'
// edit
import ProjectEdit from './views/ProjectEdit.vue'
import SalaryEdit from './views/SalaryEdit.vue'
import ClientEdit from './views/ClientEdit.vue'
// get one
import ProjectOne from './views/ProjetOne.vue'
import SalaryOne from './views/SalaryOne.vue'
import ClientOne from './views/ClientOne.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    // listes
    {
      path: '/projet',
      name: 'projets',
      component: Projects
    },
    {
      path: '/salary',
      name: 'salary',
      component: Salary
    },
    {
      path: '/client',
      name: 'client',
      component: Clients
    },
    // created
    {
      path: '/projet/created',
      name: 'projetCrea',
      component: ProjectCrea
    },
    {
      path: '/salary/created',
      name: 'salaryCrea',
      component: SalaryCrea
    },
    {
      path: '/client/created',
      name: 'clientCrea',
      component: ClientCrea
    },
    // edit
    {
      path: '/projet/edit/:id',
      name: 'projetEdit',
      component: ProjectEdit
    },
    {
      path: '/salary/edit/:id',
      name: 'salaryEdit',
      component: SalaryEdit
    },
    {
      path: '/client/edit/:id',
      name: 'clientEdit',
      component: ClientEdit
    },
    // get one
    {
      path: '/projet/:id',
      name: 'projetCrea',
      component: ProjectOne
    },
    {
      path: '/salary/:id',
      name: 'salaryCrea',
      component: SalaryOne
    },
    {
      path: '/client/:id',
      name: 'clientCrea',
      component: ClientOne
    }
  ]
})
