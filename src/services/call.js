const apiHost = import.meta.env.VITE_ENDPOINT

const call = async () => {
  const endpoint = apiHost + 'getMocks'
  try {
    const responseRaw = await fetch(endpoint)
    return await responseRaw.json()
  } catch (e) {
    console.log(e)
  }
}
