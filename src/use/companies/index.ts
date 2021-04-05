import { reactive } from '@vue/composition-api'
import axios from 'axios'

const companies = reactive({
  loading: false,
  list: null
})

export const useCompanies = () => {
  const loadCompanies = async () => {
    try {
      companies.loading = true

      const res = await axios.get('/company/company_users/companies_list')
      companies.list = res.data
    } catch (err) {
      console.log(err)
    } finally {
      companies.loading = false
    }
  }

  return {
    companies,
    loadCompanies
  }
}
