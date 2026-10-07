import { siteConfig } from '@/lib/config'
import LazyImage from '@/components/LazyImage'
import { useRouter } from 'next/router'
import MenuGroupCard from './MenuGroupCard'
import { MenuListSide } from './MenuListSide'

/**
 * 侧边抽屉
 * @param tags
 * @param currentTag
 * @returns {JSX.Element}
 * @constructor
 */
const SideBar = (props) => {
  const router = useRouter()
  const brandLogo = siteConfig(
    'BRAND_LOGO',
    '/brand/da-space-mark-compact.png'
  )
  return (
        <div id='side-bar'>
            <div className="h-52 w-full flex justify-center">
                <div>
                    <div onClick={() => { router.push('/') }}
                        className='justify-center items-center flex hover:rotate-45 py-6 hover:scale-105 dark:text-gray-100  transform duration-200 cursor-pointer'>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <LazyImage src={brandLogo} className='rounded-2xl' width={80} height={80} alt={siteConfig('BRAND_NAME', siteConfig('TITLE'))} />
                    </div>
                    <MenuGroupCard {...props} />
                </div>
            </div>
            <MenuListSide {...props} />
        </div>
  )
}

export default SideBar
