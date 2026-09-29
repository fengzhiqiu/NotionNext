const DEFAULT_IMAGE_HOST_FROM = 'img.techins.xyz'
const DEFAULT_IMAGE_HOST_TO = 'https://img.dassr.com'

/**
 * 将历史图床域名迁移到新域名，同时保留路径、查询参数和 hash。
 */
export function rewriteImageHost(source) {
  if (typeof source !== 'string' || !source) return source

  const from =
    process.env.NEXT_PUBLIC_IMAGE_HOST_FROM || DEFAULT_IMAGE_HOST_FROM
  const to = process.env.NEXT_PUBLIC_IMAGE_HOST_TO || DEFAULT_IMAGE_HOST_TO

  try {
    const sourceUrl = new URL(source)
    const fromUrl = new URL(
      from.includes('://') ? from : `https://${from}`
    )
    if (sourceUrl.hostname.toLowerCase() !== fromUrl.hostname.toLowerCase()) {
      return source
    }

    const targetUrl = new URL(to.includes('://') ? to : `https://${to}`)
    sourceUrl.protocol = targetUrl.protocol
    sourceUrl.hostname = targetUrl.hostname
    sourceUrl.port = targetUrl.port
    return sourceUrl.toString()
  } catch {
    return source
  }
}
