import { Home } from '@/components/HeroIcons'
import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'

const Logo = () => {
  const brandName = siteConfig('BRAND_NAME', siteConfig('TITLE'))
  const brandLogo = siteConfig('BRAND_LOGO', '/brand/da-space-mark.png')
  return (
    <SmartLink href='/' passHref legacyBehavior>
      <div className='flex flex-nowrap justify-center items-center cursor-pointer font-extrabold'>
        <LazyImage
          src={brandLogo}
          width={38}
          height={38}
          alt={`${brandName} Logo`}
          className='mr-3 hidden md:block'
        />
        <div id='logo-text' className='group rounded-2xl flex-none relative'>
          <div className='logo group-hover:opacity-0 opacity-100 visible group-hover:invisible text-lg my-auto rounded dark:border-white duration-200'>
            {brandName}
          </div>
          <div className='flex justify-center rounded-2xl group-hover:bg-[var(--heo-color-primary)] w-full group-hover:opacity-100 opacity-0 invisible group-hover:visible absolute top-0 py-1 duration-200'>
            <Home className={'w-6 h-6 stroke-white stroke-2 '} />
          </div>
        </div>
      </div>
    </SmartLink>
  )
}
export default Logo
