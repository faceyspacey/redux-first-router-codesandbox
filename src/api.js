import { videosHash, videosByCategory } from './data'

export default async path =>
  path.indexOf('/api/videos/') === 0
    ? await findVideos(path.replace('/api/videos/', ''))
    : await findVideo(path.replace('/api/video/', ''))

const findVideos = async category => {
  await fakeDelay(1000)
  return videosByCategory[category] || []
}

const findVideo = async slug => {
  await fakeDelay(500)
  return videosHash[slug]
}

const fakeDelay = ms => new Promise(res => setTimeout(res, ms))