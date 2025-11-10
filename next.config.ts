import createMDX from '@next/mdx'

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  reactCompiler: true,
}

const withMDX = createMDX()

export default withMDX(nextConfig)