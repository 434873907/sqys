import Vue from 'vue'
import Router from 'vue-router'
import signApply from '../pages/signApply/signApply.vue'
import applyDetail from '../pages/signApply/applyDetail.vue'
import consultList from '../pages/consult/consultList.vue'
import consuitDetail from '../pages/consult/consuitDetail.vue'
import patientList from '../pages/docPatient/patientList.vue'
import myPatient from '../pages/docPatient/myPatient.vue'
import patDetail from '../pages/docPatient/patDetail.vue'
import signDetail from '../pages/docPatient/signDetail.vue'
import serviceDetail from '../pages/docPatient/serviceDetail.vue'
import sendMass from '../pages/docPatient/sendMass.vue'
import massMsg from '../pages/docPatient/massMsg.vue'
import serviceHistory from '../pages/service/serviceHistory.vue'
import registerService from '../pages/service/registerService.vue'
import signService from '../pages/service/signService.vue'
import myDetail from '../pages/my/myDetail.vue'
import myMsg from '../pages/my/myMsg.vue'
import docArticle from '../pages/my/docArticle.vue'
import writeArticle from '../pages/my/writeArticle.vue'
import articleText from '../pages/my/articleText.vue'
import accountAbout from '../pages/my/accountAbout.vue'
import edit from '../pages/my/edit.vue'
import docCard from '../pages/docCard/docCard.vue'
import editCard from '../pages/docCard/editCard.vue'
import docChat from '../pages/docChat/docChat.vue'
import sendArticle from '../pages/docChat/sendArticle.vue'
import subscribeService from '../pages/docChat/subscribeService.vue'
import arrangeService from '../pages/docChat/arrangeService.vue'
import arrangeDetail from '../pages/docChat/arrangeDetail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/signApply',
      name: 'signApply',
      component: signApply
    },{
      path: '/applyDetail',
      name: 'applyDetail',
      component: applyDetail
    },{
      path: '/consultList',
      name: 'consultList',
      component: consultList
    },{
      path: '/consuitDetail',
      name: 'consuitDetail',
      component: consuitDetail
    },{
      path: '/patientList',
      name: 'patientList',
      component: patientList
    },{
      path: '/',
      name: 'myPatient',
      component: myPatient
    },{
      path: '/patDetail',
      name: 'patDetail',
      component: patDetail
    },{
      path: '/signDetail',
      name: 'signDetail',
      component: signDetail
    },{
      path: '/serviceDetail',
      name: 'serviceDetail',
      component: serviceDetail
    },{
      path: '/serviceHistory',
      name: 'serviceHistory',
      component: serviceHistory
    },{
      path: '/registerService',
      name: 'registerService',
      component: registerService
    },{
      path: '/myDetail',
      name: 'myDetail',
      component: myDetail
    },{
      path: '/myMsg',
      name: 'myMsg',
      component: myMsg
    },{
      path: '/signService',
      name: 'signService',
      component: signService
    },{
      path: '/docCard',
      name: 'docCard',
      component: docCard
    },{
      path: '/editCard',
      name: 'editCard',
      component: editCard
    },{
      path: '/docChat',
      name: 'docChat',
      component: docChat
    },{
      path: '/subscribeService',
      name: 'subscribeService',
      component: subscribeService
    },{
      path: '/arrangeService',
      name: 'arrangeService',
      component: arrangeService
    },{
      path: '/arrangeDetail',
      name: 'arrangeDetail',
      component: arrangeDetail
    },{
      path: '/massMsg',
      name: 'massMsg',
      component: massMsg
    },{
      path: '/accountAbout',
      name: 'accountAbout',
      component: accountAbout
    },{
      path: '/docArticle',
      name: 'docArticle',
      component: docArticle
    },{
      path: '/sendArticle',
      name: 'sendArticle',
      component: sendArticle
    },{
      path: '/sendMass',
      name: 'sendMass',
      component: sendMass
    },{
      path: '/writeArticle',
      name: 'writeArticle',
      component: writeArticle
    },{
      path: '/articleText',
      name: 'articleText',
      component: articleText
    },{
      path: '/edit',
      name: 'edit',
      component: edit
    },
  ]
})
