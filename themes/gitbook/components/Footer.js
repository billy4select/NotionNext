import { siteConfig } from '@/lib/config'

/**
 * 頁尾組件
 * @returns {JSX.Element}
 */
const Footer = () => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate = parseInt(since) < currentYear ? since + '-' + currentYear : currentYear

  return (
    <footer className='z-20 py-8 text-center w-full text-sm text-gray-500 font-sans tracking-widest'>
      <hr className='mb-6 border-gray-100 dark:border-gray-800' />
      {/* 這裡只留下你的版權宣告，刪除了 Powered By 等資訊 */}
      <span>© {copyrightDate} | {siteConfig('AUTHOR')}</span>
    </footer>
  )
}

export default Footer
