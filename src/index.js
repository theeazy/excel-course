import {Router} from '@core/routes/Router';
import {DashboardPage} from '@/pages/Dashboard.page'
import './scss/index.scss'
import {ExcelPage} from '@/pages/ExcelPage'

new Router('#app', {
  dashboad: DashboardPage,
  excel: ExcelPage
})

