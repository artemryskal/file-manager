import { h } from 'vue'
import IconHome from '@/assets/icons/IconHome.vue'
import IconSearch from '@/assets/icons/IconSearch.vue'
import IconArrow from '@/assets/icons/IconArrow.vue'
import IconAdd from '@/assets/icons/IconAdd.vue'
import IconGrid from '@/assets/icons/IconGrid.vue'
import IconRow from '@/assets/icons/IconRow.vue'
import IconStarFilled from '@/assets/icons/IconStarFilled.vue'
import IconStarOutlined from '@/assets/icons/IconStarOutlined.vue'
import IconMore from '@/assets/icons/IconMore.vue'
import IconLogo from '@/assets/icons/IconLogo.vue'
import IconPasswordShow from '@/assets/icons/IconPasswordShow.vue'
import IconEdit from '@/assets/icons/IconEdit.vue'

const icons = {
  iconHome: IconHome,
  iconSearch: IconSearch,
  iconArrow: IconArrow,
  iconAdd: IconAdd,
  iconGrid: IconGrid,
  iconRow: IconRow,
  iconStarFilled: IconStarFilled,
  iconStarOutlined: IconStarOutlined,
  iconMore: IconMore,
  iconLogo: IconLogo,
  iconPasswordShow: IconPasswordShow,
  iconEdit: IconEdit,
}

const custom = {
  component: (props) => h(icons[props.icon]),
}

export { custom }
