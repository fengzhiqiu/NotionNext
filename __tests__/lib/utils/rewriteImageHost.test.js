import { rewriteImageHost } from '@/lib/utils/rewriteImageHost'

describe('rewriteImageHost', () => {
  const originalFrom = process.env.NEXT_PUBLIC_IMAGE_HOST_FROM
  const originalTo = process.env.NEXT_PUBLIC_IMAGE_HOST_TO

  afterEach(() => {
    if (originalFrom === undefined) {
      delete process.env.NEXT_PUBLIC_IMAGE_HOST_FROM
    } else {
      process.env.NEXT_PUBLIC_IMAGE_HOST_FROM = originalFrom
    }
    if (originalTo === undefined) {
      delete process.env.NEXT_PUBLIC_IMAGE_HOST_TO
    } else {
      process.env.NEXT_PUBLIC_IMAGE_HOST_TO = originalTo
    }
  })

  test('rewrites the legacy image hostname and preserves the path and query', () => {
    expect(
      rewriteImageHost('https://img.techins.xyz/techins/a.jpg?width=800#preview')
    ).toBe('https://img.dassr.com/techins/a.jpg?width=800#preview')
  })

  test('does not rewrite unrelated or lookalike hostnames', () => {
    expect(rewriteImageHost('https://example.com/a.jpg')).toBe(
      'https://example.com/a.jpg'
    )
    expect(rewriteImageHost('https://img.techins.xyz.example.com/a.jpg')).toBe(
      'https://img.techins.xyz.example.com/a.jpg'
    )
  })

  test('supports environment overrides', () => {
    process.env.NEXT_PUBLIC_IMAGE_HOST_FROM = 'old.example.com'
    process.env.NEXT_PUBLIC_IMAGE_HOST_TO = 'https://cdn.example.com'

    expect(rewriteImageHost('http://old.example.com/path/image.png')).toBe(
      'https://cdn.example.com/path/image.png'
    )
  })
})
