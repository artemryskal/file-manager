import instance from '../instance'

export const getFiles = async () => {
  await instance.get('/files')
}
